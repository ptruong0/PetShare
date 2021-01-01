import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import postsRouter from './routes/petPosts.js';

// Start Express
const app = express();

// Connect to Mongo Database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Mongo database!'))
    .catch((err) => console.log(err.message));


// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/posts', postsRouter);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on Port ${PORT}...`));