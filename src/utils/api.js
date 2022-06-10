const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Kritika",
          empid: '1'
        },
        {
          name: "Matheus",
          empid: '2'
        },
        {
          name: "Omar",
          empid: '3'
        },
      ]);
    }, 2000);
  });
};

export default getData;
