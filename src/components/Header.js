// src/components/Header.js
export default function Header() {
    return (
      <header className="bg-white/50 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Sprunki
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-fuchsia-500">Home</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-fuchsia-500">Features</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-fuchsia-500">Community</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-fuchsia-500">Download</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }