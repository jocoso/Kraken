const express = require('express');
const sequelize = require('./config/database');

// Models
const User = require('./src/models/user');
const Artwork = require('./src/models/artwork');
const Version = require('./src/models/version');

// Routes
const artRoutes = require('./src/routes/artRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Database sync
sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
})

app.use('/api', artRoutes);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});