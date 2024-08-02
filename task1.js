/* Task 1: Basic File Operations
**Instructions**:
1. Write a script that creates a new text file called `example.txt` and writes the string "Hello, World!" into it.
2. Modify the script to append "This is Node.js FS module." to the same file.
3. Read the contents of `example.txt` and print them to the console. 
*/
const fs = require("fs");

fs.writeFileSync("example.txt", "Hello, World!", "utf8");
fs.appendFileSync("example.txt", " This is Node.js FS module.", "utf8");

const data = fs.readFileSync("example.txt", "utf8");
console.log(data);
