"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // default role

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u: { email: string }) => u.email === email)) {
      alert("Email already registered");
      return;
    }

    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Save current user
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert(`Account created for ${name} as ${role}`);
    router.push("/"); // redirect to homepage
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 bg-white"
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 bg-white"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 bg-white"
              placeholder="Choose a password"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-gray-800"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="visitor">Visitor</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-700">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
