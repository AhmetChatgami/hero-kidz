"use client";

import Image from "next/image";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { _id, image, title, quantity, price } = item;

  const handleIncrease = () => {
    onQuantityChange(_id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(_id, quantity - 1);
    }
  };

  const handleRemove = async () => {
    const result = await Swal.fire({
      title: "Remove item?",
      text: "This item will be removed from cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
    });

    if (result.isConfirmed) {
      onRemove(_id);
      toast.success("Item removed from cart");
    }
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
          className="btn btn-sm btn-circle"
        >
          <FaMinus />
        </button>

        <span className="px-2 font-semibold">{quantity}</span>

        <button
          onClick={handleIncrease}
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