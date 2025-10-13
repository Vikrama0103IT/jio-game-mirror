import { Card } from "@/components/ui/card";

interface GameCardProps {
  title: string;
  image: string;
  rank?: number;
  category: string;
}

const GameCard = ({ title, image, rank, category }: GameCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow cursor-pointer">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
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
      <div className="p-4">
        <div className="text-xs text-primary uppercase tracking-wider mb-2">
          {category}
        </div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </Card>
  );
};

export default GameCard;
