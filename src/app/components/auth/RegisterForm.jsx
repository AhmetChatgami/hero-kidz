"use client";
import { postUser } from "@/actions/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaGoogle, FaLock, FaUser } from "react-icons/fa";


const RegisterForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "", 
    email: "",
    password: "",
  });

  // Input field change handle korar jonno:
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const result = await postUser(form);
    console.log("Server Response:", result);

    if (result && result.acknowledged) {
      alert("Registration successful!");
      
      // toggleForm();
      router.push("/login")
    } else {
      alert(result?.error || "Registration failed.");
    }
  };

  return (
    <div className="card-body">
      <h2 className="text-3xl font-bold text-center text-neutral mb-2">
        Create Account
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Join us to start your journey
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Full Name</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full pl-10"
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="example@mail.com"
              className="input input-bordered w-full pl-10"
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full pl-10"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-secondary btn-block text-white mt-4"
        >
          Create Account
        </button>
      </form>

      <div className="divider my-6 text-xs text-gray-400 uppercase">
        Or sign up with
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button type="button" className="btn btn-outline border-base-300 gap-2 hover:bg-red-500 hover:text-white">
          <FaGoogle/> Google
        </button>
        <button type="button" className="btn btn-outline border-base-300 gap-2 hover:text-black">
          <FaGithub className=""/> Github
        </button>
      </div>

      <p className="text-center text-sm mt-8">
        Already have an account?
        <Link href={"/login"}
          // onClick={toggleForm}
          className="ml-2 font-bold text-primary hover:underline"
        >
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
