const fetchData = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2222);
    }, 200);
  })
};

async function fn(): Promise<number> {
  const i = await fetchData();
  return 1 + i;
}

fn().then((num: Number) => console.log(num));
