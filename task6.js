/* Task 6: Error Handling
**Instructions**:
1. Write a script that attempts to read a file that does not exist.
2. Implement error handling to gracefully handle the error and print an appropriate message to the console. */

const fs = require("fs").promises;

const filePath = "babken.txt";

fs.readFile(filePath, "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(`Error reading file: ${err.message}`);
  });
