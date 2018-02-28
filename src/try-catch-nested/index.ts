function main() {
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

export { main };
