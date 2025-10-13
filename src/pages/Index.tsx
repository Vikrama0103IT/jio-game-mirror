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
  },
  {
    id: 2,
    title: "Neon Racers",
    image: game2,
    rank: 2,
    category: "Racing",
  },
  {
    id: 3,
    title: "Mystic Chronicles",
    image: game3,
    rank: 3,
    category: "RPG",
  },
  {
    id: 4,
    title: "Tactical Command",
    image: game4,
    category: "Strategy",
  },
  {
    id: 5,
    title: "Court Champions",
    image: game5,
    category: "Sports",
  },
  {
    id: 6,
    title: "Ancient Expedition",
    image: game6,
    category: "Adventure",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroCarousel />
      
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
