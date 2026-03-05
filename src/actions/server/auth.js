"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
    const { email, password, name } = payload;
    
    // Validations
    if (!email || !password) return { acknowledged: false, error: "Missing fields" };

    try {
        // 1. findOne-e object pathate hoy: { email }
        const isExist = await dbConnect(collections.USERS).findOne({ email });
        
        if (isExist) {
            return { acknowledged: false, error: "User already exists" };
        }

        // 2. New user object create
        const newUser = {
            providerId: "credentials",
            name,
            email,
            password: await bcrypt.hash(password, 14),
            role: "user",
        };

        // 3. Insert into Database
        const result = await dbConnect(collections.USERS).insertOne(newUser);

        if (result.acknowledged) {
            return {
                acknowledged: true,
                insertedId: result.insertedId.toString(), // Dot (.) thik kora hoyeche
            };
        }

        return { acknowledged: false };
    } catch (error) {
        console.error("Database Error:", error);
        return { acknowledged: false, error: "Internal server error" };
    }
};