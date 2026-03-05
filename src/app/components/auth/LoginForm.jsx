"use client";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from "react-icons/fa";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Login Data:", Object.fromEntries(formData.entries()));
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

      <div className="grid grid-cols-2 gap-4">
        <button type="button" className="btn btn-outline border-base-300 gap-2">
          <FaGoogle className="text-red-500" /> Google
        </button>
        <button type="button" className="btn btn-outline border-base-300 gap-2">
          <FaGithub /> Github
        </button>
      </div>

      <p className="text-center text-sm mt-8">
        Don't have an account?
        <Link href={"/register"}
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
