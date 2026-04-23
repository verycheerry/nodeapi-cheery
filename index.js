const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Node API');
});

app.get('/food', (req, res) => {
    res.send('Food API working');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
