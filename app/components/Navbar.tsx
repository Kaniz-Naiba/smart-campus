"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    setUser(loggedInUser);
  }, [pathname]); // update when route changes

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    router.push("/"); // redirect to home
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    {/* Clickable Brand */}
    <div className="text-2xl font-bold text-blue-600">
      <Link href="/" className="hover:text-blue-500">
        SmartCampus
      </Link>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-6">
      <Link href="#about" className="hover:text-blue-500 text-blue-500">About</Link>
      <Link href="#features" className="hover:text-blue-500 text-blue-500">Features</Link>

      {!user ? (
        <>
          <Link href="/auth/login" className="hover:text-blue-500 text-blue-500">Login</Link>
          <Link href="/auth/register" className="hover:text-blue-500 text-blue-500">Register</Link>
        </>
      ) : (
        <>
          <span className="text-gray-700">Hi, {user.name}</span>
          <button
            onClick={handleLogout}
            className="bg-blue-600 text-blue-500 px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Logout
          </button>
        </>
      )}
    </div>

    {/* Hamburger Menu */}
    <div className="md:hidden text-blue-500">
      <button onClick={() => setOpen(!open)}>☰</button>
    </div>
  </div>

  {/* Mobile Menu */}
  {open && (
    <div className="md:hidden bg-white px-4 py-4 space-y-2 shadow-md">
      <Link href="#about" className="block text-blue-500">About</Link>
      <Link href="#features" className="block text-blue-500">Features</Link>
      <Link href="/buildings" className="block text-blue-500">Buildings</Link>

      {!user ? (
        <>
          <Link href="/auth/login" className="block text-blue-500">Login</Link>
          <Link href="/auth/register" className="block text-blue-500">Register</Link>
        </>
      ) : (
        <>
          <span className="block text-blue-500">Hi, {user.name}</span>
          <button
            onClick={handleLogout}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Logout
          </button>
        </>
      )}
    </div>
  )}
</nav>

  );
}
