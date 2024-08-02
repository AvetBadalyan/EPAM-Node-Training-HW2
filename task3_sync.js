/* Task 3: Synchronous vs. Asynchronous Operations
**Instructions**:
1. Write two scripts:
   - One that uses synchronous methods (`fs.readFileSync`, `fs.writeFileSync`) to read from and write to a file.
   - Another that uses asynchronous methods (`fs.readFile`, `fs.writeFile`) to achieve the same functionality.
2. Compare the scripts and note the differences in their execution. */

const fs = require("fs");

const filePath = "syncFile.txt";

fs.writeFileSync(filePath, "This is written synchronously.", "utf8");

const data = fs.readFileSync(filePath, "utf8");
console.log(data);
