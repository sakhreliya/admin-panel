const express = require('express');
const connectDB = require('./db/dbConnect');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();

// MongoDB Connnect
connectDB();

app.use(express.json());

// Use routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Admin Panel API');
});

// Error handling
app.use(errorHandler);

//Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
