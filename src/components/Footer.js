// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-white/80 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h1 className="text-xl font-bold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                Sprunki
              </h1>
              <p className="text-sm text-gray-600">Create your own music world, let creativity bloom freely.</p>
            </div>
            {/* 在这里添加其他页脚内容 */}
          </div>
          <div className="pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-600">2024 Sprunki. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }