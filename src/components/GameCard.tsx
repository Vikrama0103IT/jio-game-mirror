import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GameCardProps {
  title: string;
  image: string;
  rank?: number;
  category: string;
  description?: string;
  rating?: number;
  players?: string;
}

const GameCard = ({ title, image, rank, category, description, rating, players }: GameCardProps) => {
  const { toast } = useToast();

  const handleGameClick = () => {
    toast({
      title: title,
      description: "Game details will be available soon!",
    });
  };

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: `${category} Games`,
      description: `Browsing all ${category.toLowerCase()} games...`,
    });
  };

  return (
    <Card 
      onClick={handleGameClick}
      className="group relative overflow-hidden bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={`${title} - ${category} game`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {rank && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground font-bold text-lg px-4 py-2 rounded-lg">
              #{rank}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 space-y-3">
        <Badge 
          variant="outline" 
          className="text-xs uppercase tracking-wider cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={handleCategoryClick}
        >
          {category}
        </Badge>
        
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between pt-2">
          {rating && (
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="font-semibold text-foreground">{rating}</span>
            </div>
          )}
          
          {players && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{players}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default GameCard;
