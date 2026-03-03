"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
    // MongoDB theke data anlam
    const products = await dbConnect(collections.PRODUCTS).find().toArray();
    
    // Complex MongoDB data-ke plain JSON-e convert korar shohoj upay:
    const plainProducts = JSON.parse(JSON.stringify(products));
    
    return plainProducts;
};

export const getSingleProduct = async (id) => {
  if (id.length != 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };

  const product = await dbConnect(collections.PRODUCTS).findOne(query);

  return product || {};
};
