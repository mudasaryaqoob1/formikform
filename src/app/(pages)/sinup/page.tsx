"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

// Validation Schema
const SignupSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .required("Password is required"),
});

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Signup</h2>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
  localStorage.setItem("user", JSON.stringify(values));
  console.log("Signup Data:", values);
  alert("Signup successful! Now you can login.");

  // ✅ Form reset karne ke liye
  resetForm();
}}
        >
          <Form className="space-y-4 text-black">
            {/* Name */}
            <div>
              <label className="block text-black mb-1">Name</label>
              <Field
                name="name"
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1">Password</label>
              <Field
                name="password"
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Signup
            </button>

            {/* Login Link */}
            <Link
              href="/login"
              className="block w-full text-center text-black mt-3 hover:text-green-600 transition"
            >
              Already have an account? Login
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
