export default function GameCollection() {
    return (
      <section className="py-8 pt-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/90 to-white/60">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold h-12 mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Spunky Hot Games Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <div className="relative group overflow-hidden rounded-xl border-2 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 p-[2px]">
              <div className="relative h-full w-full rounded-xl bg-white overflow-hidden">
                <img src="/images/sprunki-retake.jpg" alt="Sprunki Retake" className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-2 transform transition-all duration-300 bg-gradient-to-t from-pink-500/90 via-purple-500/90 to-transparent">
                  <h3 className="text-base font-bold text-white truncate">Sprunki Retake</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 mt-2 opacity-0 max-h-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                    A innovative music game, combining reimagined gameplay with new sound effects and presenting a refreshing character design.
                  </p>
                </div>
              </div>
            </div>
            {/* 其他游戏卡片 */}
          </div>
        </div>
      </section>
    );
  }