"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Sign In</h1>
        <button
          onClick={() => signIn("github")}
          className="w-full py-3 mb-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          Sign in with GitHub
        </button>
        <button
          onClick={() => signIn("google")}
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
