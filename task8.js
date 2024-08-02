/* Task 8: Permissions and Metadata
**Instructions**:
1. Write a script that reads and prints the metadata (e.g., size, creation date) of a given file.
2. Modify the script to change the permissions of the file to read-only. */

const fs = require("fs");

const filePath = "metadataFile.txt";

fs.writeFileSync(
  filePath,
  "This file is for metadata and permissions demo.",
  "utf8"
);

const stats = fs.statSync(filePath);
console.log(`Size: ${stats.size} bytes`);
console.log(`Created at: ${stats.birthtime}`);

fs.chmodSync(filePath, "0444");

/* The permissions are represented numerically:

4 stands for read (r).
2 stands for write (w).
1 stands for execute (x).
These values can be combined:

0 means no permissions.
4 means read only.
6 means read and write.
7 means read, write, and execute. 

0444 breaks down as: 0 for special modes, 4 for owner (read), 4 for group (read), 4 for others (read) */

console.log("Permissions changed to read-only.");
