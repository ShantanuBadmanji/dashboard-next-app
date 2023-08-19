import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: "unauthorised user" });
  res.status(201).json({ success: "success", session });
};
export default handler;
