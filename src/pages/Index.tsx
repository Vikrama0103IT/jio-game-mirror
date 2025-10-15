import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import GameCard from "@/components/GameCard";
import game1 from "@/assets/game1.jpg";
import game2 from "@/assets/game2.jpg";
import game3 from "@/assets/game3.jpg";
import game4 from "@/assets/game4.jpg";
import game5 from "@/assets/game5.jpg";
import game6 from "@/assets/game6.jpg";

const trendingGames = [
  {
    id: 1,
    title: "Urban Warfare",
    image: game1,
    rank: 1,
    category: "Action",
    description: "Intense tactical shooter with realistic combat mechanics",
    rating: 4.8,
    players: "2.4M",
  },
  {
    id: 2,
    title: "Neon Racers",
    image: game2,
    rank: 2,
    category: "Racing",
    description: "High-speed futuristic racing with stunning neon visuals",
    rating: 4.7,
    players: "1.8M",
  },
  {
    id: 3,
    title: "Mystic Chronicles",
    image: game3,
    rank: 3,
    category: "RPG",
    description: "Epic fantasy adventure with deep character progression",
    rating: 4.9,
    players: "3.2M",
  },
  {
    id: 4,
    title: "Tactical Command",
    image: game4,
    category: "Strategy",
    description: "Strategic warfare game with complex battle systems",
    rating: 4.6,
    players: "980K",
  },
  {
    id: 5,
    title: "Court Champions",
    image: game5,
    category: "Sports",
    description: "Fast-paced basketball action with realistic physics",
    rating: 4.5,
    players: "1.5M",
  },
  {
    id: 6,
    title: "Ancient Expedition",
    image: game6,
    category: "Adventure",
    description: "Explore ancient ruins and uncover hidden treasures",
    rating: 4.7,
    players: "1.2M",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation />
      <HeroCarousel />
      
      <section id="cloud" className="py-20 container mx-auto px-6">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Cloud Gaming
          </h2>
          <p className="text-muted-foreground text-lg">
            Play AAA games instantly without downloads. Stream high-quality games directly to any device.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {trendingGames.slice(0, 3).map((game, index) => (
            <div key={game.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </section>

      <section id="instant" className="py-20 container mx-auto px-6 bg-muted/30">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Instant Play
          </h2>
          <p className="text-muted-foreground text-lg">
            No installation required. Click and play instantly in your browser.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {trendingGames.slice(3, 6).map((game, index) => (
            <div key={game.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </section>
      
      <section id="trending" className="py-20 container mx-auto px-6">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Trending Cloud Games
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the most popular games streaming directly to your device
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {trendingGames.map((game, index) => (
            <div
              key={game.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </section>

      <section id="compete" className="py-20 container mx-auto px-6 bg-muted/30">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Compete & Win
          </h2>
          <p className="text-muted-foreground text-lg">
            Join tournaments and compete with players worldwide for exciting prizes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {trendingGames.slice(0, 3).map((game, index) => (
            <div key={`compete-${game.id}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </section>

      <section id="store" className="py-20 container mx-auto px-6">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Game Store
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover and access our complete library of premium games.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {trendingGames.map((game, index) => (
            <div key={`store-${game.id}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-muted-foreground">
              © 2025 GameVerse. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
