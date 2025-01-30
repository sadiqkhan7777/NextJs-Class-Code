// "use client "
// import { signOut } from "next-auth/react"

// export default function signOutPage(){
//     return (
//         <div>
//         <h1>Sign Out</h1>
//         <button onClick={() => signOut()}></button>
//         </div>
//     )
// }

"use client";

import { signOut } from "next-auth/react";

export default function SignOutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Sign Out</h1>
        <button
          onClick={() => signOut()}
          className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-500 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

