/* Task 7: Recursive Directory Operations
**Instructions**:
1. Create a script that recursively lists all files and directories within a given directory.
2. Write another script that copies the contents of one directory to another, preserving the directory structure. */

const fs = require("fs");
const path = require("path");

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  fs.readdirSync(src).forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

copyDir("sourceDir", "destDir");
