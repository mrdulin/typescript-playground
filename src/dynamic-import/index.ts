function main() {
  if (process.env.NODE_ENV !== "production") {
    import("./mod")
      .then(mod => {
        console.log("mod: ", mod);
        mod.print();
      })
      .catch(err => {
        console.error(err);
      });
  }
}

main();
