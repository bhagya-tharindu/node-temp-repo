const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/async.js",
      `there goes ${first} and ${second}`,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        readFile("./content/async.js", "utf-8", (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(data);
        });
      }
    );
  });
});
console.log("hello");
