// HowToPlaySection.js
import React from 'react';

const HowToPlaySection = () => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/90 to-white/60">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          How to Play Sprunki Game?
        </h2>

        {/* 视频容器 */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-video rounded-xl overflow-hidden p-[5px] bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
            <div className="w-full h-full bg-white rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5fzgKPCi0b4?si=cTKeSdV_OZMHAock"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* 步骤说明 */}
        <div className="grid md:grid-cols-3 gap-6 w-full mx-auto">
          {/* 步骤 1 */}
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border-2 border-pink-500/30">
            <h3 className="flex items-center gap-2 text-lg font-bold mb-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 text-white text-sm">
                1
              </span>
              <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Start Your Musical Journey
              </span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Click "Play Sprunki" to start the game
              </li>
              {/* 其他步骤... */}
            </ul>
          </div>
          {/* 步骤 2 和 3... */}
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;