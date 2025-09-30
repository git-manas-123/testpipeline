const express = require('express');
const app = express();

// Random port between 3000-9000
const port = process.env.PORT || Math.floor(Math.random() * 6000) + 3000;

app.get('/', (req, res) => {
    res.send('Hello World from Manas on Windows!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
