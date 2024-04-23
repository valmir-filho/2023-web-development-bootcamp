import express from 'express';

const app = express();
const port = 3000;

// Endpoints examples.
app.get("/", (req, res) => {
    // res.send("Hello World");
    res.send("<h1>Home</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1><p>Cell phone: +5541991256214</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}!`)
});

/*
Observation!
Use nodemon to run automatically (nodemon index.js). 
*/