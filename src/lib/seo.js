export const generateGameSEO = (game) => ({
    title: `${game.name} - Sprunki`,
    description: game.description,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      "name": game.name,
      "description": game.description,
      "image": game.image,
      "genre": game.genre,
    },
  });