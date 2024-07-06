const express = require('express');
const app = express();
const artRoutes = require('./routes/artRoutes');

const PORT = process.env.PORT || 3000;

app.use('/api', artRoutes);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});