import mongoose from 'mongoose';
import experienceSchema, { ExperienceAttrs } from '../schemas/experience'

const Experience = mongoose.model<ExperienceAttrs>('Experience', experienceSchema);
export { Experience }