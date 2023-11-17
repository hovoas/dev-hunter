import mongoose  from 'mongoose';

export interface engineerAttrs {
  name: string,
  techLanguages: string[],
  experience: string,
  salaryRange : {
    min: number,
    max : number
  }
  position: string
}

const engineerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  techLanguages: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TechLanguage' }],
    required: true,
  },
  experience: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Experience',
    required: true,
  },
  salaryRange: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  position: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Position',
    required: true,
  },
});

export default engineerSchema