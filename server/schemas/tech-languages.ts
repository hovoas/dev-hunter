import mongoose from 'mongoose'

export interface TechLanguageAttrs {
  name: string,
}

const techLanguageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
})

export default techLanguageSchema