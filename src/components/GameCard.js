import React from 'react';
import GameCard from './GameCard';

const games = [
  {
    image: "https://spunky.games/image/sprunki-retake.jpg",
    title: "Sprunki Retake",
    description: "An innovative music game, combining reimagined gameplay with new sound effects and presenting a refreshing character design.",
  },
  {
    image: "https://spunky.games/image/sprunki.webp",
    title: "Spunky Incredibox",
    description: "A classic music creation experience, combining original sound effects with iconic characters, bringing unique gaming fun.",
  },
  {
    image: "https://spunky.games/image/sprunki-infected.png",
    title: "Sprunki Infected",
    description: "A unique infection-themed gaming experience, combining dark atmosphere and unique sound effects, creating an unforgettable gaming world.",
  },
  {
    image: "https://spunky.games/image/colorbox-mustard.png",
    title: "Colorbox Mustard",
    description: "A game featuring a vibrant color scheme, combining mustard-themed sound effects, creating a creative gameplay mechanism.",
  },
  // 添加更多游戏...
];

const GameCollection = () => {
  return (
    <section className="py-8 pt-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/90 to-white/60">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold h-12 mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Spunky Hot Games Collection
        </h2>

        {/* 游戏卡片网格布局 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {games.map((game, index) => (
            <GameCard
              key={index}
              image={game.image}
              title={game.title}
              description={game.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCollection;