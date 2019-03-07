import { asyncTask } from "./async-task";
import faker from "faker";

async function main1() {
  const emails: string[] = Array(3).fill(faker.internet.email());
  const asyncTasks = emails.map((email: string) => asyncTask(email));
  try {
    const results = await Promise.all(asyncTasks);
    console.log("all async tasks success");
    console.log("results: ", results);
  } catch (error) {
    console.error("failed");
    console.log(error);
  }
}

async function main2() {
  const emails: string[] = Array(3).fill(faker.internet.email());
  const asyncTasks = emails.map((email: string, index: number) =>
    asyncTask(email).then(result => {
      console.log(`async task index:${index} success`);
      return result;
    })
  );
  try {
    const results = await Promise.all(asyncTasks);
    console.log("all async tasks success");
    console.log("results: ", results);
  } catch (error) {
    console.error("failed");
    console.log(error);
  }
}

main2();
