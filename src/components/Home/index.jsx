import React, { useEffect, useState } from "react";
import { getData, getReleaseData } from "../../utils/api";
import { addDays, differenceInDays, lastDayOfWeek } from "date-fns";
import css from "./index.css";

// getData().then((d) => console.log(d.map((i) => `<div>${i.name}</div>`)));

const Home = () => {
  const [data, setData] = useState([]);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    getData().then((d) => setData(d));
    getReleaseData().then((r) => setReleases(r));
  }, []);

  console.log(releases);

  if (data.length === 0) {
    return "loading";
  }

  const dates = data
    .flatMap((i) => i.stories)
    .map((i) => i.date)
    .sort((a, b) => a - b);

  const startWeek = lastDayOfWeek(dates[0]);
  const firstDayWeek = addDays(startWeek, -7);

  const endWeek = lastDayOfWeek(dates[dates.length - 1]);

  const daysInSeries = differenceInDays(endWeek, firstDayWeek);

  const weeks = [];
  for (let i = startWeek; i <= endWeek; i = addDays(i, 7)) {
    weeks.push(i);
  }

  const dataWithWeeks = data.map((i) => ({
    ...i,
    weeks: weeks.map((j, index) => ({
      date: j,
      stories: i.stories.filter(
        (s) =>
          s.date <= j &&
          s.date >= (index === 0 ? new Date(1994, 0, 1) : weeks[index - 1])
      ),
    })),
  }));

  const releasesInSeries = releases.filter(
    (r) => r.date >= firstDayWeek && r.date <= endWeek
  );

  console.log(releasesInSeries);

  return (
    <div>
      <h1>Home</h1>
      {dataWithWeeks.map((j, index) => (
        <div className={css.row}>
          <div className={css.name}>{j.name}</div>
          <div className={css.dates}>
            {releasesInSeries.map((r) => {
              const days = differenceInDays(r.date, firstDayWeek);

              return (
                <div
                  style={{ left: `${days / daysInSeries * 100}%` }}
                  className={css.indicator}
                ></div>
              );
            })}

            {j.weeks.map((i) => (
              <div className={css.week}>
                {index === 0 ? i.date.toDateString() : ""}
                <div className={css.flex}></div>
                {i.stories.map((s) => (
                  <div>{s.id}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
