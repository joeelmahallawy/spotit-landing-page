import { NextApiRequest, NextApiResponse } from "next";
import { Collection, MongoClient } from "mongodb";
import { User } from "../../interfaces/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = `mongodb://mongo:${process.env.NEXT_PUBLIC_MONGODB_CONNECTION_URL}@containers-us-west-4.railway.app:7886`;
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db("users");

    const drivers = db.collection("drivers");
    const hosts = db.collection("hosts");
    const { data } = JSON.parse(req.body);

    if (req.method === "POST" && data.Status == "host")
      await hosts.insertOne(data);

    if (req.method === "POST" && data.Status == "driver")
      await drivers.insertOne(data);

    res.json({});
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

export default handler;
// const postHostToDB=(req:NextApiRequest,res:NextApiResponse,data:User,DB:Collection)=>{
//   try {

//   } catch (err) {
//     res.status(400).json({err:err.message})
//   }
// }
