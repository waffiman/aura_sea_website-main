import { cn } from "@/lib/utils";
import logoPng from "@assets/logo.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src={logoPng} 
        alt="AURA SEA" 
        className="h-16 w-auto object-contain"
        style={{ maxWidth: '200px' }}
      />
    </div>
  );
}
