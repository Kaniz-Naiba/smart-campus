"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BuildingsList from "../components/BuildingsList";

export default function BuildingsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      router.push("/auth/login"); // redirect to login if not logged in
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Campus Buildings</h1>
      <BuildingsList />
    </div>
  );
}
