import nextConnect from "next-connect";
import middleware from "../../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res, next) => {
    const { db } = req;
     
    let result = await db.collection("users").findOne();

  res.json({ message: result });
});

export default handler;

