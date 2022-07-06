import mongoose from "mongoose";

const db={};
async function dbConnect(){
  
   if(db.isConnected)
   return ;


   try{
    mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    
    console.log("Database connected"); 
   }
   catch(err){

   }

   db.isConnected=mongoose.connections[0].readyState;

}

return dbConnect();