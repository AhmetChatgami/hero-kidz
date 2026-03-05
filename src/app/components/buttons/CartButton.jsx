"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartButton = ({ product }) => {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();

  const addtoCart = () => {
    if (isLogin) alert(product._id);
    else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };
  return (
    <div>
      <button
        onClick={addtoCart}
        className="flex-1 bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
      >
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
