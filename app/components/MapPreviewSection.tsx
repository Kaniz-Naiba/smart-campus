"use client";

export default function MapPreviewSection() {
  return (
    <section id="map-preview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Campus Map Preview
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-700 text-lg">
              Interactive route guidance • Indoor maps • Points of interest
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Building search:</strong> Find buildings by name or code.</li>
              <li><strong>Shortest route:</strong> Get directions to your destination.</li>
              <li><strong>Accessibility options:</strong> Wheelchair-friendly routes and elevators.</li>
            </ul>
          </div>

          
        </div>
      </div>
    </section>
  );
}
