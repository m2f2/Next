"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const pages = [
  { name: "Users", link: "/users" },
  { name: "Add User", link: "/register" },
  { name: "Login", link: "/login" },
];

const Navbar = () => {
  const { data: session } = useSession();

  async function logout() {
    await signOut({ callbackUrl: "/login" });
  }

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex gap-6">
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.link}
            className="text-xl hover:text-gray-400"
          >
            {page.name}
          </Link>
        ))}
      </div>
      {session && (
        <div className="flex items-center">
          <p className="text-lg mr-4">Welcome, {session.user?.name}</p>
          <button onClick={logout} className=" hover:bg-black  font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;