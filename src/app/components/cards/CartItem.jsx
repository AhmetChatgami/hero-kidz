"use client";

import Image from "next/image";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import {
  decreaseItemDb,
  deleteItemsFromCart,
  increaseItemDb,
} from "@/actions/server/cart";
import { useState } from "react";

const CartItem = ({
  item,
  removeItem,
  onQuantityChange,
  onRemove,
  updateQuantity,
}) => {
  const { _id, image, title, quantity, price } = item;

  const [loading, setLoading] = useState(false);

  const handleIncrease = async () => {
    setLoading(true);
    const result = await increaseItemDb(_id, quantity);

    if (result.success) {
      Swal.fire("Updated", "Item increased", "success");
      updateQuantity(_id, quantity + 1);
    }
    setLoading(false);
  };

  const handleDecrease = async () => {
    setLoading(true);
    const result = await decreaseItemDb(_id, quantity);

    if (result.success) {
      Swal.fire("Updated", "Item decreased", "success");
      updateQuantity(_id, quantity - 1);
    }
    setLoading(false);
  };

  const handleRemove = async () => {
    setLoading(true);
    const result = await Swal.fire({
      title: "Remove item?",
      text: "This item will be removed from cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemsFromCart(_id);
        if (result.success) {
          removeItem(_id);
          Swal.fire(
            "Deleted",
            "This item successfuly removed from cart",
            "success",
          );
          //   onRemove(_id);
        } else {
          Swal.fire("Error", "Failed to delete", "error");
        }
      }
      setLoading(false)
    });
  };

  return (
    <div className="flex items-center gap-4 p-4 border rounded-xl bg-base-100 shadow-sm">
      {/* Image */}
      <div className="w-20 h-20 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="object-cover"
        />
      </div>

      {/* Title + Price */}
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-primary font-bold">৳ {price}</p>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrease}
          disabled={quantity === 1 || loading}
          className="btn btn-sm btn-circle"
        >
          <FaMinus />
        </button>

        <span className="px-2 font-semibold">{quantity}</span>

        <button
          onClick={handleIncrease}
          disabled={quantity === 10 || loading}
          className="btn btn-sm btn-circle"
        >
          <FaPlus />
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={handleRemove}
        className="btn btn-error btn-sm text-white"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
