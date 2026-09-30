"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const router = useRouter();

  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const password = watch("password");

  const handleRegister = async (data) => {
    setServerError("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim().toLowerCase(),
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setServerError(result.message || "Registration failed.");
        return;
      }

      setSuccessMessage("Account created successfully!");

      // Redirect to login after successful registration
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      console.error("Registration error:", error);

      setServerError(
        "Something went wrong. Please check your internet connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-700 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-slate-900">
            Create Account
          </h1>

          <p className="text-sm text-slate-500">
            Create your account to get started.
          </p>
        </div>

        {/* Server Error */}
        {serverError && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {serverError}
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {successMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required.",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters.",
                },
                maxLength: {
                  value: 50,
                  message: "Name cannot exceed 50 characters.",
                },
              })}
              className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition ${
                errors.name
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
              })}
              className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition ${
                errors.email
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="Create a password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters.",
                },
                maxLength: {
                  value: 100,
                  message: "Password cannot exceed 100 characters.",
                },
              })}
              className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition ${
                errors.password
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password.",
                validate: (value) =>
                  value === password || "Passwords do not match.",
              })}
              className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition ${
                errors.confirmPassword
                  ? "border-red-500 focus:ring-2 focus:ring-red-200"
                  : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
