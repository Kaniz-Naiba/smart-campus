"use client";

export default function FeaturesSection() {
  const features = [
    {
      title: "Building Search",
      description: "Quickly find buildings by name or code.",
      icon: "🏢",
    },
    {
      title: "Shortest Route",
      description: "Find the shortest path to your destination on campus.",
      icon: "🗺️",
    },
    {
      title: "Accessibility",
      description: "Wheelchair-friendly routes and elevator/street directions.",
      icon: "♿",
    },
    {
      title: "Favorites",
      description: "Save your favorite places and access them quickly.",
      icon: "⭐",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Icon with gradient background */}
              <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-tr from-blue-200 to-blue-400 text-4xl">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
