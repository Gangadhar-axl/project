import { MongoClient } from 'mongodb'
import { Preahvihear } from 'next/font/google'

const URI=process.env.MONGO_URI
const options={}

if(!URI) throw new Error('Please add your Mongo URI to .env.local')

let client=new MongoClient(URI,options)
let clientPromise

if(process.env.NODE_ENV !=='production'){
    if(!global._mongoClientPromise){
        global._mongoClientPromise = client.connect()
    }
    clientPromise=global._mongoClientPromise 
}else{
    clientPromise=client.connect()
}
export default clientPromise