import nextConnect from "next-connect";
import middleware from "../../../middleware/database";

const handler=nextConnect();

handler.use(middleware);

handler.get((req,res,next)=>{

})