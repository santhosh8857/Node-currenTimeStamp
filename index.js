var http = require("http"); //responsible for http requests
const fs = require("fs"); //responsible for file system

http
  .createServer((req, res) => {
    let date = new Date();
    // write the date and time in file
    fs.writeFileSync("currentDateTime.txt", `${date}`);

    // read the file
    const data = fs.readFileSync("currentDateTime.txt", "utf-8");

    // giving the response
    res.write(data);
    res.end();
  })
  .listen(8000);
