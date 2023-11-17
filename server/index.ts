import express from 'express';

import { connectToDatabase, disconnectFromDatabase } from './services/db';
import { Engineer } from './models/engineer'

const app = express();
const port = 3000;


connectToDatabase()
  .then(() => {
    app.get('/', (req, res) => {
      res.send('Hello, TypeScript and Express!');
    });

    app.get('/engineers', async (req, res) => {
      try {
        const allEngineers = await Engineer.find();
        res.json(allEngineers);
      } catch (error) {
        console.error('Error retrieving engineers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to start the server:', error);
  });

// Gracefully disconnect from the database on process termination
process.on('SIGINT', async () => {
  try {
    await disconnectFromDatabase();
    process.exit(0);
  } catch (error) {
    console.error('Error disconnecting from the database:', error);
    process.exit(1);
  }
});

// Gracefully disconnect from the database on unhandled promise rejections
process.on('unhandledRejection', async (reason) => {
  try {
    console.error('Unhandled Promise Rejection:', reason);
    await disconnectFromDatabase();
    process.exit(1);
  } catch (error) {
    console.error('Error disconnecting from the database:', error);
    process.exit(1);
  }
});
