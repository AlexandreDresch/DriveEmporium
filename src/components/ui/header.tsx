"use client";

import { useContext } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingCartIcon,
  User,
} from "lucide-react";

import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Cart from "./cart";
import NavigationMenuCard from "./navigation-menu-card";

import { CartContext } from "@/providers/cart";

export default function Header() {
  const { status, data } = useSession();
  const { products } = useContext(CartContext);
  const cartQuantityItems = products.length;

  const categories = [
    { name: "Off-Road", slug: "off-road" },
    { name: "Multi Piece", slug: "multi-piece-category" },
    { name: "Directional", slug: "directional-category" },
    { name: "Vintage", slug: "vintage-wheels" },
    { name: "Modern", slug: "modern-wheels" },
    { name: "Performance", slug: "performance-category" },
  ];

  async function handleSignIn() {
    await signIn();
  }

  async function handleSignOut() {
    await signOut();
  }

  return (
    <Card className="flex items-center justify-between p-5 md:px-16 lg:px-24">
      <div className="md:hidden">
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
              {status === "unauthenticated" && (
                <Button
                  onClick={handleSignIn}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon size={16} /> Sign In
                </Button>
              )}

              {status === "authenticated" && data.user && (
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 py-4">
                    <Avatar>
                      <AvatarFallback>
                        {data.user.name?.[0].toUpperCase()}
                      </AvatarFallback>

                      {data.user.image && <AvatarImage src={data.user.image} />}
                    </Avatar>

                    <div className="flex flex-col">
                      <p className="font-medium">{data.user.name}</p>
                      <p className="text-sm opacity-75">Happy shopping!</p>
                    </div>
                  </div>

                  <Separator />
                </div>
              )}

              {status === "authenticated" && (
                <Button
                  onClick={handleSignOut}
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <LogInIcon size={16} /> Sign Out
                </Button>
              )}

              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} /> Home
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/offers">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PercentIcon size={16} /> Offers
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href={"/catalog"}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ListOrderedIcon size={16} /> Catalog
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/orders">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PackageSearchIcon size={16} /> Orders
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Link href="/">
        <h1 className="text-justify text-xl font-semibold text-primary">
          Drive{" "}
          <span className="bg-gradient-to-r from-white to-gray-600 bg-clip-text text-xs text-transparent">
            EMPORIUM
          </span>
        </h1>
      </Link>

      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-2 md:w-[265px] md:grid-cols-2">
                  {categories.map((category) => (
                    <NavigationMenuCard
                      key={category.name}
                      name={category.name}
                      slug={category.slug}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/offers" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Offers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex md:gap-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="relative">
              {cartQuantityItems > 0 && (
                <span className="absolute right-[calc(-1.25rem/2)] top-[calc(-1.25rem/2)] flex h-6 w-6 items-center justify-center rounded-lg bg-primary text-sm font-bold">
                  {cartQuantityItems}
                </span>
              )}
              <ShoppingCartIcon />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <Cart />
          </SheetContent>
        </Sheet>

        <div className="hidden md:block">
          <Sheet>
            <SheetTrigger>
              <Button size="icon" variant="outline">
                <User />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader className="text-left text-lg font-semibold">
                Account Menu
              </SheetHeader>

              <div className="mt-2 flex flex-col gap-2">
                {status === "unauthenticated" && (
                  <Button
                    onClick={handleSignIn}
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <LogInIcon size={16} /> Sign In
                  </Button>
                )}

                {status === "authenticated" && data.user && (
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 py-4">
                      <Avatar>
                        <AvatarFallback>
                          {data.user.name?.[0].toUpperCase()}
                        </AvatarFallback>

                        {data.user.image && (
                          <AvatarImage src={data.user.image} />
                        )}
                      </Avatar>

                      <div className="flex flex-col">
                        <p className="font-medium">{data.user.name}</p>
                        <p className="text-sm opacity-75">Happy shopping!</p>
                      </div>
                    </div>

                    <Separator />
                  </div>
                )}

                {status === "authenticated" && (
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <LogInIcon size={16} /> Sign Out
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </Card>
  );
}
