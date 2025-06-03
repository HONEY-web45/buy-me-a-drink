
import mongoose from "mongoose";

const connectDb = async () => {
        try {
            const conn =  await mongoose.connect(process.env.MONGO_URI, {
     
      
      serverSelectionTimeoutMS: 30000, // Increased timeout
    });
           console.log(`MongoDB Connected: ${conn.connection.host}`);
            return conn;
            
        } catch (error) {
           
            console.error("MongoDB Connection Error:", error);
        }
    }

  export default connectDb;










  
