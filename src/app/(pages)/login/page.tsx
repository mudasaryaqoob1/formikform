"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Signup from "../sinup/page";
// Validation Schema
const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Login</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

            if (
              savedUser.email === values.email &&
              savedUser.password === values.password
            ) {
              console.log("Login Successful:", savedUser);
              setMessage("✅ Login Successful!");
            } else {
              console.log("Login Failed");
              setMessage("❌ Invalid email or password");
            }
          }}
        >
          <Form className="space-y-4 text-black">
            {/* Email */}
            <div>
              <label className="block mb-1">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
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
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-400"
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
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Login
            </button>

            {message && (
              <p className="text-center mt-4 font-medium">{message}</p>
            )}

            <Link
              href="/sinup"
              className="block w-full text-center text-black rounded-lg hover:text-green-600 transition"
            >
              sinup
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
