import { User } from "@/modals/User";
import mongoose from "mongoose";

export async function GET() {
  mongoose.connect(process.env.MONGODB_URL);
  const users = await User.find();
  return Response.json(users);
}
