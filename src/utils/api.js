const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Kritika",
          empid: "1",
          stories: [
            {
              id: "DPDHL-2001",
              date: new Date("2022-06-01"),
            },
            {
              id: "DPDHL-2002",
              date: new Date("2022-06-02"),
            },
            {
              id: "DPDHL-2003",
              date: new Date("2022-06-15"),
            },
          ],
        },
        {
          name: "Matheus",
          empid: "2",
          stories: [],
        },
        {
          name: "Omar",
          empid: "3",
          stories: [
            {
              id: "DPDHL-2005",
              date: new Date("2022-06-23"),
            },
          ],
        },
      ]);
    }, 2000);
  });
};

const getReleaseData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Release 10",
          date: new Date("2022-06-15"),
        },
        {
          name: "Release 9",
          date: new Date("2022-06-24"),
        },
      ]);
    }, 2000);
  });
};

export { getData, getReleaseData };
