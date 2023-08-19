// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "@/lib/connect_db";
import User from "@/models/user_model";

export default async function handler(req, res) {
  try {
    await connectDb();
  } catch (error) {
    console.log("Cannot connect to db", error);
    return res.status(500).json({ error: error.message });
  }
  const { method } = req;
  switch (method) {
    case "GET":
      const users = User.find({}, { userName: 1, role: 1 }).exec();
      console.log(users);
      break;

    default:
      break;
  }
  res.status(200).json({ name: "John Doe" });
}
