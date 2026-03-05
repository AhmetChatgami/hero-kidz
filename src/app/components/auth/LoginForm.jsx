"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import SocialButton from "../buttons/SocialButton";

const LoginForm = () => {
  const params = useSearchParams();
  const callBack = params.get("callbackUrl") || "/"
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // console.log("Login Data:", Object.fromEntries(formData.entries()));
    console.log("Login Attempt with:", form);
    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      // redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });
    console.log("SignIn Result:", result);
    if (!result.ok) {
      Swal.fire("Oops!", "Email or Password didn't matched", "error");
    } else {
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
        draggable: true,
      });
    }
  };

  return (
    <div className="card-body">
      <h2 className="text-3xl font-bold text-center text-neutral mb-2">
        Welcome Back
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Enter your details to sign in
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
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
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="input input-bordered w-full pl-10"
              required
            />
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-primary link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block text-white">
          Sign In
        </button>
      </form>

      <div className="divider my-6 text-xs text-gray-400 uppercase">
        Or login with
      </div>

      <SocialButton></SocialButton>

      <p className="text-center text-sm mt-8">
        Don't have an account?
        <Link
          href={`/register?callbackUrl=${callBack}`}
          // onClick={toggleForm}
          className="ml-2 font-bold text-primary hover:underline"
        >
          Register now
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
