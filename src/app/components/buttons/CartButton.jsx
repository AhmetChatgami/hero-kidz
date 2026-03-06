"use client";

import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const isLogin = session?.status == "authenticated";
  const router = useRouter();
  const path = usePathname();

  const addtoCart = async () => {
    setIsLoading(true);
    if (isLogin) {
      const result = await handleCart({ product, inc: true });
      if (result.success) {
        Swal.fire("Added to Cart", product.title, "success");
      } else {
        Swal.fire("Oops!", "Something Went Wrong", "error");
      }
      setIsLoading(false);
    } else {
      router.push(`/login?callbackUrl=${path}`);
      setIsLoading(false)
    }
  };
  return (
    <div>
      <button 
      disabled = {session.status == "loading" || isLoading}
      onClick={addtoCart} className="btn btn-primary gap-2">
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
