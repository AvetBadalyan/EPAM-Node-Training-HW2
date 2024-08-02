/* Task 5: File Watching
**Instructions**:
1. Write a script that watches a directory called `watchDir` for changes.
2. Whenever a file is added, modified, or deleted in `watchDir`, log the event to the console. */

const fs = require("fs");
const dir = "watchDir";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.watch(dir, (eventType, filename) => {
  if (filename) {
    console.log(`${eventType} event was applied to ${filename}`);
  }
});
