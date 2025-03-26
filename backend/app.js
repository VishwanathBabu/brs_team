const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const requestRoutes = require('./routes/requestRoutes');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
connectDB();

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/api/requests', requestRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
