import mongoose from 'mongoose'

export interface ExperienceAttrs {
  name: string,
}

const experienceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
})

export default experienceSchema