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
          ],
        },
        {
          name: "Matheus",
          empid: "2",
          stories: [
    
          ],
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

export default getData;
