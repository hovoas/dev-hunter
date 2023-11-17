import mongoose from 'mongoose';
import techLanguageSchema, { TechLanguageAttrs } from '../schemas/tech-languages'

const TechLanguage = mongoose.model<TechLanguageAttrs>('TechLanguage', techLanguageSchema);
export { TechLanguage }