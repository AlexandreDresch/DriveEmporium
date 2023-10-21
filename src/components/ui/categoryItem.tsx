import { Category } from "@prisma/client";
import { Badge } from "./badge";
import {
  ArrowUpRightFromCircle,
  Car,
  Compass,
  Gauge,
  Hourglass,
  PieChart,
  Radar,
} from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  const categoryIcon = {
    "modern-wheels": <Car size={16} />,
    "vintage-wheels": <Hourglass size={16} />,
    "off-road": <Compass size={16} />,
    "multi-piece-category": <PieChart size={16} />,
    "directional-category": <ArrowUpRightFromCircle size={16} />,
    "performance-category": <Gauge size={16} />,
  };
  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
}
