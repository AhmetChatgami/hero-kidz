import { getCart } from "@/actions/server/cart";
import React from "react";
import CartItem from "../components/cards/CartItem";
import Cart from "../components/home/Cart";

const CartPage = async () => {
  const cartItems = await getCart();
  //   console.log(cartItems[0]);
  const formattedItem = cartItems.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
  return (
    <div>
      <div>
        <h2 className="text-4xl py-4 font-bold border-l-8 border-primary pl-8">
          My Cart
        </h2>
      </div>

      <Cart cartItem={formattedItem}></Cart>
    </div>
  );
};
export default CartPage;
