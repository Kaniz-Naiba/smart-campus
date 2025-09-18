"use client";

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import MapPreviewSection from "./components/MapPreviewSection";

export default function Home() {
  const [currentUser, setCurrentUser] = useState<{ name: string; role: string } | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (user) setCurrentUser(user);
  }, []);

  return (
    <div>
      

      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <MapPreviewSection />
    </div>
  );
}
