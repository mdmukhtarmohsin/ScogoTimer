import { useRef, useState } from "react";
import { UseTimer } from "./UseTimer";

export const App = () => {
  const { time, setTime, start, setStart } = UseTimer();
  const [change, setChange] = useState(false);
  const inputref = useRef();
  const default_time = useRef(time);
  let seconds = time % 60;
  let minutes = Math.floor(time / 60);
  if (minutes == 0) {
    minutes = undefined;
  }
  let hours;
  if (minutes >= 60) {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
  }
  function prependZero(number) {
    if (number < 9) return "0" + number;
    else return number;
  }
  function normalize(str) {
    while (str.length < 6) {
      str = 0 + str;
    }
    return str;
  }
  console.log("hi");
  console.log(seconds, minutes, hours);
  return (
    <div className=" bg-[rgb(32,33,36)] text-white w-48 border-white rounded font-serif text-xs">
      <div className="text-center border-white">Timer</div>
      <div
        className=" h-10 flex gap-2"
        onClick={() => {
          setChange(true);
          setStart(false);
        }}
      >
        {change ? (
          <input
            type="number"
            ref={inputref}
            className=" bg-[rgb(32,33,36)] text-white"
            placeholder="00 h 00 m 00 s"
          />
        ) : (
          <>
            {hours != undefined && <span>{`${hours}h`}</span>}
            {minutes != undefined && <span>{prependZero(minutes) + "m"}</span>}
            {seconds != undefined && <span>{prependZero(seconds) + "s"}</span>}
          </>
        )}

        {/* <form>
        </form> */}
      </div>
      <div className=" flex gap-2 border-red-700">
        {start ? (
          <button
            className="bg-[rgb(138,180,248)] m-2 pl-2 pr-2 hover:bg-[rgb(32,33,36)]"
            onClick={() => {
              setStart(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button
            onClick={() => {
              if (change) {
                let x = normalize(inputref.current.value);
                let temptime = 0;
                temptime += +x[5];
                temptime += +x[4] * 10;
                temptime += +x[3] * 60;
                temptime += +x[2] * 60 * 10;
                temptime += +x[1] * 3600;
                temptime += +x[0] * 3600 * 10;

                setTime(temptime);
                default_time.current = temptime;
                setChange(false);
                console.log(time, default_time);
              }
              setStart(true);
            }}
          >
            Start
          </button>
        )}

        <button
          onClick={() => {
            setTime(default_time.current);
            setStart(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
