import express from 'express';
import morgan from 'morgan';  // Logging middleware category.

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

/* 
Observations!
1. Install morgan module;
2. Run index.js with nodemon;
3. Import morgan module;
4. Mount the middleware using the express .use() method;
5. Test the loggin on localhost and with Postman.
*/