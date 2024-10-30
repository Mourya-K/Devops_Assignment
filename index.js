const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Docker with Node.js!');
});

const port = 2020;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
