import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";

export default function Header() {
  return (
    <Card className="flex justify-between p-5 items-center">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

      <h1 className="font-semibold text-lg text-primary">
        Drive <span className="text-white">Emporium</span>
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
}
