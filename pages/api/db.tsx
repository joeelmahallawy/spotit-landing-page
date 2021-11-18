import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const url = `mongodb://mongo:${process.env.NEXT_PUBLIC_MONGO_URL}@containers-us-west-2.railway.app:5624`;
    //     const client = new MongoClient(url);

    //     await client.connect();
    //     // Database name 'mydb'
    //     const db = client.db("test");
    // const drivers = db.collection('drivers');
    // const hosts = db.collection('hosts');
    if (req.method === "POST") res.status(200).json({ name: "John Doe" });
  } catch (err) {
    res.status(404).json({ err });
  }
}
