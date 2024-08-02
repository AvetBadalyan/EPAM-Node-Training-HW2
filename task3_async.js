
/* Task 3: Synchronous vs. Asynchronous Operations
**Instructions**:
1. Write two scripts:
   - One that uses synchronous methods (`fs.readFileSync`, `fs.writeFileSync`) to read from and write to a file.
   - Another that uses asynchronous methods (`fs.readFile`, `fs.writeFile`) to achieve the same functionality.
2. Compare the scripts and note the differences in their execution. */

const fs = require("fs");

const filePath = "asyncFile.txt";

fs.writeFile(filePath, "This is written asynchronously.", "utf8", (err) => {
  if (err) throw err;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});