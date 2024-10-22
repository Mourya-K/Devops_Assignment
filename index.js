const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Docker with Node.js!');
});

const port = 80;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});