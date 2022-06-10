import React, { useEffect, useState } from "react";
import getData from "../../utils/api";

// getData().then((d) => console.log(d.map((i) => `<div>${i.name}</div>`)));

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((d) => setData(d));
  }, []);

  if (data.length === 0) {
    return "loading";
  }

  return (
    <div>
      <h1>Home</h1>
      {data.map((i) => (
        <div>
          {i.empid} - {i.name}
        </div>
      ))}
    </div>
  );
};

export default Home;
