import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              GameVerse
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#cloud" className="text-foreground hover:text-primary transition-colors">
              Cloud
            </a>
            <a href="#instant" className="text-foreground hover:text-primary transition-colors">
              Instant
            </a>
            <a href="#trending" className="text-foreground hover:text-primary transition-colors">
              Trending
            </a>
            <a href="#compete" className="text-foreground hover:text-primary transition-colors">
              Compete
            </a>
            <a href="#store" className="text-foreground hover:text-primary transition-colors">
              Store
            </a>
          </div>
          
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
