"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-blue-700">About SmartCampus</h2>
          <p className="text-gray-700 text-lg">
            Smart Campus Navigation is a system that helps students and visitors navigate easily on and off campus.
            We provide real-time routing, building-level maps, and facility information (toilets, library, cafeteria).
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Search Buildings:</strong> Quickly find buildings by name or code.</li>
            <li><strong>Indoor Routing:</strong> Navigate rooms inside buildings easily.</li>
            <li><strong>Accessibility:</strong> Wheelchair-friendly routes and elevator/street directions.</li>
            <li><strong>Favorites:</strong> Save your favorite places for quick access.</li>
          </ul>
        </div>

        {/* Image / Placeholder */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/campus-building.png"
            alt="Campus Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
