"use client";
import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";

const CheckOut = ({ cartItems = [] }) => {
  const session = useSession();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     deliveryInfo: "",
//     specialInstruction: "",
//     contact: "",
//   });
  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  const delivery = cartItems.length ? 80 : 0;
  const total = subtotal + delivery;

  const handleCheckout = async (e) => {
    e.preventDefault();
    toast.success("Order placed successfully!");
    const result = await createOrder(form);
  };

  if (session.status == "loading") {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold mb-6">Checkout</h1> */}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleCheckout}
            className="card bg-base-100 border shadow-md p-6 space-y-4"
          >
            <h2 className="text-lg font-semibold mb-2">Delivery Information</h2>

            {/* Name */}
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                value={session?.data?.user?.name}
                required
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                value={session?.data?.user?.email}
                required
                placeholder="Email Address"
                className="input input-bordered w-full"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="label">Contact Number</label>
              <input
                type="tel"
                required
                placeholder="01XXXXXXXXX"
                className="input input-bordered w-full"
              />
            </div>

            {/* Delivery Instruction */}
            <div>
              <label className="label">Delivery Address</label>
              <textarea
                required
                className="textarea textarea-bordered w-full"
                placeholder="Enter delivery address"
              ></textarea>
            </div>

            {/* Special Instruction */}
            <div>
              <label className="label">Special Instruction</label>
              <textarea
              
                className="textarea textarea-bordered w-full"
                placeholder="Optional notes for delivery"
              ></textarea>
            </div>

            {/* Checkout Button */}
            <button className="btn btn-primary w-full mt-4">Place Order</button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="sticky top-24 h-fit">
          <div className="card bg-base-100 border shadow-md">
            <div className="card-body">
              <h2 className="card-title">Order Summary</h2>

              {/* Products */}
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between text-sm border-b pb-2"
                  >
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold">
                      ৳ {item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              <div className="divider"></div>

              {/* Price Details */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Items ({totalItems})</span>
                  <span>৳ {subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>৳ {delivery}</span>
                </div>
              </div>

              <div className="divider my-2"></div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>৳ {total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
