import schedule from 'node-schedule';
import EngineerModel from '../models/engineer';

const scheduleJob = () => {
  // Schedule the job to run every minute for demonstration purposes
  const job = schedule.scheduleJob('* * * * *', async () => {
    try {
      // Find a 'pending' engineer to process
      const engineerToProcess = await EngineerModel.findOneAndUpdate(
        { status: 'pending' },
        { status: 'processing' },
        { sort: { createdAt: 1 } } // Process the oldest 'pending' engineer first
      );

      if (engineerToProcess) {
        // Simulate some processing time (you can replace this with your actual processing logic)
        await new Promise((resolve) => setTimeout(resolve, 5000)); // 5 seconds

        // Update the engineer's status and processed time
        await EngineerModel.findByIdAndUpdate(
          engineerToProcess._id,
          { status: 'completed', processedTime: new Date() },
          { new: true }
        );

        console.log(`Engineer processed: ${engineerToProcess._id}`);
      } else {
        console.log('No pending engineers to process.');
      }
    } catch (error) {
      console.error('Error processing engineer:', error);
    }
  });

  console.log('Scheduler job started.');
};

export default scheduleJob;
