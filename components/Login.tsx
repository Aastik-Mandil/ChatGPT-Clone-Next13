"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-green-background-png.png"
        width={300}
        height={300}
        alt="logo"
      />

      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={() => {
          signIn("google");
        }}
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
