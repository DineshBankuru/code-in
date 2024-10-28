import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectMongo() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const options = { bufferCommands: false }
    cached.promise = mongoose
      .connect(MONGODB_URI, options)
      .then(m => m.connection)
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectMongo
