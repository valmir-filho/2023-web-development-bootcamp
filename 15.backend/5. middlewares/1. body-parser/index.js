import express from 'express';
import bodyParser from 'body-parser';  // Pré-processing middleware category.
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));  // Middleware.

app.get("/", (req, res) => {
  // console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");  // This is the file that will be sended.
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

/* Observations!
1. Install body-parser module;
2. Run index.js with nodemon;
3. Import body-parser module;
4. Mount the middleware using the express .use() method;
5. Specify .urlencoded({extended: true}) to create a body for URL-encoded requests like our from submission;
6. Write a .post("/submit") handler where you console.log() the form contents when user clicks the submit button.
*/