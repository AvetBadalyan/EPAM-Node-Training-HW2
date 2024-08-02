/* Task 2: File and Directory Management
**Instructions**:
1. Write a script that creates a directory called `testDir`.
2. Inside `testDir`, create a new file called `testFile.txt` and write some text into it.
3. Rename `testFile.txt` to `renamedFile.txt`.
4. Delete `renamedFile.txt` and then delete `testDir`. */

const fs = require("fs");
const path = require("path");


const dir = "testDir";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}


const filePath = path.join(dir, "testFile.txt");
fs.writeFileSync(filePath, "This is a test file.", "utf8");

const newFilePath = path.join(dir, "renamedFile.txt");
fs.renameSync(filePath, newFilePath);


fs.unlinkSync(newFilePath);
fs.rmdirSync(dir);
