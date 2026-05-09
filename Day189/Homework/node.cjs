const fs = require("fs/promises");

async function fileManager() {
  try {
    await fs.writeFile("test.txt", "Hello world!");
    console.log("File created");

    const data = await fs.readFile("test.txt", "utf8");
    console.log(data);

    await fs.appendFile("test.txt", " Hello Shio!");
    console.log("Text appended");

    const updated = await fs.readFile("test.txt", "utf8");
    console.log(updated);
  } catch (err) {
    console.error(err);
  }
}

fileManager();