"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
            Navigate your campus — quickly, safely, and smartly.
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Smart Campus Navigation — Maps of buildings, rooms, routes, and facilities all in one place.
            No more wasting time getting to your classes.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="#features"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              href="#how-it-works"
              className="text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              How it works →
            </Link>
          </div>
        </div>

        {/* Right Image / Placeholder */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/campus-map-preview.png"
            alt="Campus Map Preview"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
