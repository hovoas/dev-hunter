import { NextFunction } from 'express';
import express, { Request, Response } from 'express';
import { Random } from '../services/random'
import { Engineer } from '../models/engineer'
const router = express.Router();

router.post('/generate/engineer',
  async (req: Request, res: Response, next: NextFunction) => {

    // Fetch tech languages and positions from the database
    const techLanguages = [...Random.randomTimes(Random.randomTechLanguage())];
    const position = Random.randomPosition();
    const engExperience =  Random.randomExperience();

    const randomEngineer = {
      name: Random.randomName(),
      techLanguages: techLanguages.map((lang) => lang._id),
      experience:engExperience,
      salaryRange: Random.randomSallary(engExperience),
      position: position._id,
      status: "pending"
    };
    const newEngineer = new Engineer(randomEngineer);
    await newEngineer.save();
    try {
      const newEngineer = new Engineer(randomEngineer);
      await newEngineer.save();
      // Save the generated engineer to the database

      res.json({ message: 'Random Node.js engineer generated and saved to the database.' });
    } catch (error) {
      console.error('Error generating and saving engineer:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export { router as signinRouter };