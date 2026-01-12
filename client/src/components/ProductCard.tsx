import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Car, Home, Heart, ShieldAlert, ArrowLeft, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, any> = {
  car: Car,
  home: Home,
  heart: Heart,
  shield: ShieldAlert,
  briefcase: Briefcase,
};

export function ProductCard({ name, description, icon }: ProductCardProps) {
  const IconComponent = iconMap[icon.toLowerCase()] || ShieldAlert;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card overflow-hidden h-full flex flex-col hover:-translate-y-1">
      <CardHeader className="p-6">
        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
        </div>
        <CardTitle className="text-xl font-bold font-arabic mb-2">{name}</CardTitle>
        <CardDescription className="text-muted-foreground font-arabic leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 mt-auto">
        <Button variant="ghost" className="w-full justify-between group/btn font-arabic hover:bg-primary/5 hover:text-primary">
          <span>التفاصيل</span>
          <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}
