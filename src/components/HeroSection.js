export default function HeroSection() {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 使用 grid 实现左右布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="space-y-6">
            <h1 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sprunki
            </h1>
            <p className="text-xl md:text-lg text-gray-500 font-medium">
              Create your creative world with music and rhythm, make every melody a unique gaming experience.
            </p>
            <div className="pt-1">
              <button
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Play Now
              </button>
            </div>
          </div>

          {/* 右侧视频 */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-0"></div>
            <iframe
              className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl z-10"
              src="https://www.youtube.com/embed/5mpwEPR1ggg?si=oueqlPUqXqTZSF3y"
              title="Sprunki Gameplay Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}