"use server"

import { authOptions } from "@/lib/authOption"
import { getServerSession } from "next-auth"

const { dbConnect, collections } = require("@/lib/dbConnect")

const cartCollection = dbConnect(collections.CART)

export const handleCart = async ({product, inc = true})=>{
    const user = await getServerSession(authOptions);
    console.log(user)
    return {success: true}
}