import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentCircleIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

export default function Header() {
  return (
    <Card className="flex items-center justify-between p-5">
      <Sheet>
        <SheetTrigger>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} /> Home
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <LogInIcon size={16} /> Sign In
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16} /> Offers
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} /> Catalog
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-justify text-xl font-semibold text-primary">
        Drive <span className="text-xs text-white">EMPORIUM</span>
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
}
