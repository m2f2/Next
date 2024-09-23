"use client"; 

import { signIn } from 'next-auth/react';

const LoginPage = () => {
  

  const handleLogin = async () => {
     await signIn("google", { callbackUrl: "http://localhost:3000/users" });
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {
          <button 
            onClick={handleLogin} 
            className="hover:bg-red-800  font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            aria-label="Sign in with Google"
          >
            Sign in with Google
          </button>
      }
    </div>
  );
};

export default LoginPage;