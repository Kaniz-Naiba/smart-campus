export default function Footer() {
  return (
    <footer className="bg-blue-400 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 md:mb-0">SmartCampus</div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="/auth/login" className="hover:text-gray-300">Login</a>
          <a href="/auth/register" className="hover:text-gray-300">Register</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">🌐</a>
          <a href="#" className="hover:text-gray-300">🐦</a>
          <a href="#" className="hover:text-gray-300">📘</a>
        </div>
      </div>

      <p className="text-center text-gray-200 mt-6 text-sm">
        &copy; {new Date().getFullYear()} SmartCampus. All rights reserved.
      </p>
    </footer>
  );
}
