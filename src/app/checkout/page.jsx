import { getCart } from "@/actions/server/cart";
import React from "react";
import CheckOut from "../components/home/CheckOut";

const chekOutPage = async () => {
  const cartItems = await getCart();

  const formattedItem = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return (
    <div>
      <div>
        <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">
          My Checkout 
        </h2>
      </div>
      <CheckOut cartItems={formattedItem}></CheckOut>
    </div>
  );
};

export default chekOutPage;
