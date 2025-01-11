import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import GameCollection from '../components/GameCollection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
// import TestComponent from '../components/TestComponent';
// import '../styles/globals.css';

export default function Home() {
  return (
    <div>
       {/* <TestComponent /> */}
    
      <Head>
        <title>Sprunki - Music Creation Game</title>
        <meta name="description" content="Sprunki is a creative game that combines music and rhythm, allowing players to enjoy music creation through unique modules and level design." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Sprunki",
            "description": "A creative game combining music and rhythm.",
            "gamePlatform": "Web",
            "genre": "Music, Rhythm",
            "image": "https://spunky.games/image/sprunki-retake.jpg",
          })}
        </script>
      </Head>

      <Header />
      <HeroSection />
      <GameCollection />
      <FAQSection />
      <Footer />
    </div>
  );
}