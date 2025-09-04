require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/digital-learning-nabha', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const quizRoutes = require('./routes/quizzes');

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/quizzes', quizRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Digital Learning Nabha Backend is running');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
