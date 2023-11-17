import mongoose  from 'mongoose';
import engineerSchema, {engineerAttrs} from '../schemas/engineer'

const Engineer = mongoose.model<engineerAttrs>('Engineer', engineerSchema);
export { Engineer }