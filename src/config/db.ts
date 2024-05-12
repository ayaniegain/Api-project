import mongoose from 'mongoose'
import {config} from './config'

import colors from "colors";


const connectDB=async ()=>{
    try {

        mongoose.connection.on('connected',()=>{
            console.log(colors.blue("connect to database succefully"))
        })
        
        mongoose.connection.on('error',(err)=>{
            console.log(colors.red("Error in  to database connection"),err)
        })
        await mongoose.connect(config.databaseURL as string);
        
    } catch (error) {
        console.log(colors.red("failed to connect to database"),error);
        process.exit(1)
        
    }
}

export default connectDB