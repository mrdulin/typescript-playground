import url from "url";

function nestedTryCatch() {
  try {
    console.log("outside try block");
    try {
      throw new Error("inside error");
    } catch (error) {
      console.log("inside catch block");
      throw error;
    }
  } catch (error) {
    console.log("outside catch block");
    throw error;
  }
}

function customErrorMessage() {
  try {
    try {
      const str: any = 123;
      const urlParsed = url.parse(str);
      console.log(`buiness success: ${urlParsed}`);
    } catch (error) {
      console.error(`url parse failed.`);
      throw error;
    }
  } catch (error) {
    console.error(`business failed.`);
    throw error;
  }
}

customErrorMessage();

export { nestedTryCatch, customErrorMessage };
