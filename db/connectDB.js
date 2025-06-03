
import mongoose from "mongoose";

const connectDb = async () => {
        try {
            const conn = await mongoose.connect("mongodb://localhost:27017/patreon",{serverSelectionTimeoutMS: 30000});
           console.log(`MongoDB Connected: ${conn.connection.host}`);
            return conn;
            
        } catch (error) {
           
            console.error("MongoDB Connection Error:", error);
        }
    }

  export default connectDb;










  