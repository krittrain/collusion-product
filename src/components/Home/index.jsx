import React, { Fragment, useEffect, useState } from "react";
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

  const dataWithWeeks = data.map((i) => ({
    ...i,
    weeks: weeks.map((j) => ({ date: j, stories: i.stories })),
  }));
  console.log(dataWithWeeks);

  return (
    <div>
      <h1>Home</h1>
      {dataWithWeeks.map((j, index) => (
        <div className={css.row}>
          <div className={css.name}>{j.name}</div>
          <div className={css.dates}>
            {j.weeks.map((i) => (
              <div className={css.week}>
                {index === 0 ? i.date.toDateString() : ""}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
