"use client";

import { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";
import toast from "react-hot-toast";
import Link from "next/link";

const Cart = ({ cartItem = [] }) => {
  const [items, setItems] = useState(cartItem);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const removeItem = (id) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item._id.toString() !== id)
    );
  };

  const updateQuantity = (id, q) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item._id == id ? { ...item, quantity: q } : item
      )
    );
  };

  const handleConfirmOrder = () => {
    if (items.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    toast.success("Order confirmed!");
  };

  return (
    <div>
      <p className="py-3">
        <span className="text-primary font-bold">{items.length}</span> Items Found in the Cart
      </p>

      <div className="flex gap-6">

        {/* Cart Items */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <CartItem
              key={item._id.toString()}
              item={{ ...item, _id: item._id.toString() }}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>

        {/* Summary Card */}
        <div className="w-96 sticky top-20">

          <div className="card bg-base-100 shadow-xl border">

            <div className="card-body">

              <h2 className="card-title">Order Summary</h2>

              {/* Product List */}
              <div className="space-y-2 max-h-60 overflow-y-auto">

                {items.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between text-sm border-b pb-1"
                  >
                    <div>
                      <p className="font-medium space-x-2">{item.title}</p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold">
                      ৳{item.price * item.quantity}
                    </p>
                  </div>
                ))}

              </div>

              {/* Totals */}
              <div className="divider"></div>

              <div className="flex justify-between text-sm">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total Price</span>
                <span>৳ {totalPrice}</span>
              </div>

              {/* Confirm Button */}
              <div className="card-actions mt-4">
                <Link href={"/checkout"}
                  onClick={handleConfirmOrder}
                  className="btn btn-primary w-full"
                  disabled={!items.length}
                >
                  Confirm Order
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;