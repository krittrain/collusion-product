import React, { useEffect, useState } from "react";
import getData from "../../utils/api";
import { addDays, lastDayOfWeek } from "date-fns";
import css from "./index.css";

// getData().then((d) => console.log(d.map((i) => `<div>${i.name}</div>`)));

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((d) => setData(d));
  }, []);

  if (data.length === 0) {
    return "loading";
  }

  const dates = data
    .flatMap((i) => i.stories)
    .map((i) => i.date)
    .sort((a, b) => a - b);

  const startWeek = lastDayOfWeek(dates[0]);
  const endWeek = lastDayOfWeek(dates[dates.length - 1]);
  const weeks = [];
  for (let i = startWeek; i <= endWeek; i = addDays(i, 7)) {
    weeks.push(i);
  }

  return (
    <div>
      <h1>Home</h1>
      <div className={css.dates}>
        {weeks.map((i) => (
          <div className={css.week}>{i.toDateString()}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
