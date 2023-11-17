import mongoose from 'mongoose'

export interface PositionAttrs {
  name: string,
}

const positionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
})

export default positionSchema