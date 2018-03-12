const fetch = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });

const getRandomNum = async () => {
  for (let i = 0; i < 3; i++) {
    const res = await fetch();
    console.log(res);
  }
};

getRandomNum();
