/*  Task 4: JSON File Handling
**Instructions**:
1. Create a JSON file called `data.json` with some sample data (e.g., a list of users with names and ages).
2. Write a script to read the JSON file and parse its contents into a JavaScript object.
3. Add a new user to the object and write the updated object back to the JSON file. */

const fs = require("fs");

const data = [
  { name: "Avet", age: 29 },
  { name: "Woody", age: 89 },
];

fs.writeFileSync("data.json", JSON.stringify(data, null, 2), "utf8");

const parsingUserData = fs.readFileSync("data.json", "utf8");
const users = JSON.parse(parsingUserData);

users.push({ name: "Vahe", age: 28 });

fs.writeFileSync("data.json", JSON.stringify(users, null, 2), "utf8");
