import mongoose from 'mongoose';
import positionSchema,{ PositionAttrs } from '../schemas/position'

const TechLanguage = mongoose.model<PositionAttrs>('TechLanguage', positionSchema);
export { TechLanguage }