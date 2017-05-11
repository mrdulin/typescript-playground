const p: Promise<number> = Promise.resolve(2222);

async function fn(): Promise<number> {
  const i = await p;
  return 1 + i;
}

fn().then((num: Number) => console.log(num));
