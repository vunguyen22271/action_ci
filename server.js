// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function main() {
//   while(true) {
//     console.log('Containers rule!');
//     await sleep(5000);
//   }
// }

// main();
const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/health", (req, res, next) => {
  res.status(200).send("Hello!");
});

