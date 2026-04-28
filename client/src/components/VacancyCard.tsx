import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ship, Calendar, DollarSign } from "lucide-react";

interface VacancyCardProps {
  title: string;
  vesselType: string;
  salary: string;
  contractLength: string;
  description: string;
  onApply: () => void;
}

export default function VacancyCard({
  title,
  vesselType,
  salary,
  contractLength,
  description,
  onApply,
}: VacancyCardProps) {
  return (
    <Card
      className="glass-card h-full flex flex-col border-cyan-500/20 shadow-md shadow-cyan-950/5 dark:shadow-cyan-950/20 group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/40"
      data-testid={`vacancy-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardHeader>
        <CardTitle className="font-headline text-xl text-foreground">{title}</CardTitle>
        <Badge
          variant="outline"
          className="w-fit mt-2 border-teal-500/35 bg-teal-500/10 font-medium text-teal-900 dark:border-teal-400/30 dark:bg-teal-500/15 dark:text-teal-100"
        >
          <Ship className="w-3 h-3 mr-1 text-teal-600 dark:text-teal-300" />
          {vesselType}
        </Badge>
      </CardHeader>
      <CardContent className="flex-1 space-y-3">
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 shrink-0 text-cyan-600 dark:text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-foreground">{salary}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 shrink-0 text-cyan-600 dark:text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-foreground">{contractLength}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-md hover:shadow-primary/20"
          onClick={onApply}
          data-testid={`button-apply-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Apply for this vacancy
        </Button>
      </CardFooter>
    </Card>
  );
}
