"use server";

import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";
import { sendOrderEmail } from "@/lib/sendOrderEmail";

const { dbConnect, collections } = require("@/lib/dbConnect");

const orderCollection = dbConnect(collections.ORDER);

export const createOrder = async (payload) => {
  const { user } = await getServerSession(authOptions);
  if (!user) return { success: false };

  const cart = await getCart();
  if (cart.length == 0) {
    return { success: false };
  }

  const newOrder = {
    createAt: new Date().toISOString(),
    items: cart,
    email: user.email,
    ...payload,
  };

  const result = await orderCollection.insertOne(newOrder);

  if (Boolean(result.insertedId)) {
    await clearCart();

    await sendOrderEmail({
      email: user.email,
      name: user.name,
      items: cart,
    });
  }

  return { success: result.insertedId };
};
