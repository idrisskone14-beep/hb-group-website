import {
  Ship,
  Briefcase,
  Armchair,
  Printer,
  Truck,
  Warehouse,
  Signal,
  Drill,
  Mountain,
  Handshake,
  Beef,
  Car,
  BedDouble,
  Sparkles,
  Compass,
  Target,
  Users,
  Clock,
  Award,
  HeartHandshake,
  ThumbsUp,
  Building2,
  Newspaper,
  GraduationCap,
  HardHat,
} from "lucide-react";

type IconProps = {
  className?: string;
  strokeWidth?: number;
};

export function DynamicIcon({ name, className, strokeWidth }: { name: string } & IconProps) {
  const props = { className, strokeWidth };

  switch (name) {
    case "Ship":
      return <Ship {...props} />;
    case "Briefcase":
      return <Briefcase {...props} />;
    case "Armchair":
      return <Armchair {...props} />;
    case "Printer":
      return <Printer {...props} />;
    case "Truck":
      return <Truck {...props} />;
    case "Warehouse":
      return <Warehouse {...props} />;
    case "Signal":
      return <Signal {...props} />;
    case "Drill":
      return <Drill {...props} />;
    case "Mountain":
      return <Mountain {...props} />;
    case "Handshake":
      return <Handshake {...props} />;
    case "Beef":
      return <Beef {...props} />;
    case "Car":
      return <Car {...props} />;
    case "BedDouble":
      return <BedDouble {...props} />;
    case "Compass":
      return <Compass {...props} />;
    case "Target":
      return <Target {...props} />;
    case "Users":
      return <Users {...props} />;
    case "Clock":
      return <Clock {...props} />;
    case "Award":
      return <Award {...props} />;
    case "HeartHandshake":
      return <HeartHandshake {...props} />;
    case "ThumbsUp":
      return <ThumbsUp {...props} />;
    case "Building2":
      return <Building2 {...props} />;
    case "Newspaper":
      return <Newspaper {...props} />;
    case "GraduationCap":
      return <GraduationCap {...props} />;
    case "HardHat":
      return <HardHat {...props} />;
    case "Sparkles":
    default:
      return <Sparkles {...props} />;
  }
}
