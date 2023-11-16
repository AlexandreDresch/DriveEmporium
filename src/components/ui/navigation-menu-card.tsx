import {
  ArrowUpRightFromCircle,
  Car,
  Compass,
  Gauge,
  Hourglass,
  PieChart,
} from "lucide-react";
import Link from "next/link";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface NavigationMenuCardProps {
  name: string;
  slug: string;
}

export default function NavigationMenuCard({
  name,
  slug,
}: NavigationMenuCardProps) {
  const categoryIcon = {
    "modern-wheels": <Car size={16} />,
    "vintage-wheels": <Hourglass size={16} />,
    "off-road": <Compass size={16} />,
    "multi-piece-category": <PieChart size={16} />,
    "directional-category": <ArrowUpRightFromCircle size={16} />,
    "performance-category": <Gauge size={16} />,
  };

  return (
    <Link href={`/category/${slug}`} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <div className="flex items-center justify-center gap-2 rounded-lg py-3">
          {categoryIcon[slug as keyof typeof categoryIcon]}
          <span className="text-xs font-bold">{name}</span>
        </div>
      </NavigationMenuLink>
    </Link>
  );
}
