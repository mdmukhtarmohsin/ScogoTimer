import { useEffect, useState } from "react";

let interval;
export const Debouce = () => {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };
  useEffect(() => {
    if (interval) {
      clearTimeout(interval);
    }
    interval = setTimeout(() => {
      console.log(data);
    }, 2000);
  }, [data]);
  return <input type="text" value={data} onChange={handleChange} />;
};
