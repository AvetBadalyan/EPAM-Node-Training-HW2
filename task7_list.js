/* Task 7: Recursive Directory Operations
**Instructions**:
1. Create a script that recursively lists all files and directories within a given directory.
2. Write another script that copies the contents of one directory to another, preserving the directory structure. */

const fs = require("fs");
const path = require("path");

function listFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      listFiles(fullPath);
    } else {
      console.log(fullPath);
    }
  });
}

listFiles("sourceDir");
