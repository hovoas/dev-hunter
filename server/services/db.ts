import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://0.0.0.0:27017/dev_hunter', );

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

const disconnectFromDatabase = async () => {
  try {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
    throw error;
  }
};

export { connectToDatabase, disconnectFromDatabase };
