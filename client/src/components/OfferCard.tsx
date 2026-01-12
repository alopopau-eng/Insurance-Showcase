import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Percent } from "lucide-react";

interface OfferCardProps {
  title: string;
  description: string;
  discount?: string | null;
  validUntil?: string | null;
  onClick: () => void;
}

export function OfferCard({ title, description, discount, validUntil, onClick }: OfferCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-slate-900 p-1 text-white shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>

      <div className="relative h-full bg-slate-900/40 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col items-start gap-6">
        {discount && (
          <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-1.5 text-base font-bold font-arabic shadow-lg shadow-accent/20 animate-pulse">
            <Percent className="w-4 h-4 mr-1 ml-1" />
            {discount}
          </Badge>
        )}

        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold font-arabic leading-tight">
            {title}
          </h3>
          <p className="text-slate-300 font-arabic text-lg leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {validUntil && (
          <div className="flex items-center gap-2 text-sm text-slate-400 font-arabic bg-white/5 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            <span>ينتهي في: {new Date(validUntil).toLocaleDateString('ar-SA')}</span>
          </div>
        )}

        <div className="mt-auto w-full pt-4">
          <Button 
            onClick={onClick}
            size="lg" 
            className="w-full md:w-auto bg-white text-slate-900 hover:bg-slate-100 font-bold font-arabic shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            احصل على العرض الآن
          </Button>
        </div>
      </div>
    </div>
  );
}
