"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = payload;

  // Validations
  if (!email || !password)
    return { acknowledged: false, error: "Missing fields" };

  try {
    const isExist = await dbConnect(collections.USERS).findOne({ email });

    if (isExist) {
      return { acknowledged: false, error: "User already exists" };
    }

    // . New user object create
    const newUser = {
      providerId: "credentials",
      name,
      email,
      password: await bcrypt.hash(password, 14),
      role: "user",
    };

    const result = await dbConnect(collections.USERS).insertOne(newUser);

    if (result.acknowledged) {
      return {
        acknowledged: true,
        insertedId: result.insertedId.toString(),
      };
    }

    return { acknowledged: false };
  } catch (error) {
    console.error("Database Error:", error);
    return { acknowledged: false, error: "Internal server error" };
  }
};

export const loginUser = async (payload) => {
    const {email, password} = payload
  if (!email || !password) return null;
  const user = await dbConnect(collections.USERS).findOne({ email });

  if (!user) return null;
  const isMatched = await bcrypt.compare(password, user.password)
  if(isMatched){
    return user;
  }
  else{
    return null;
  }
};
