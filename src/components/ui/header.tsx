"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PackageSearchIcon,
  PercentIcon,
  ShoppingCartIcon,
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
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

export default function Header() {
  const { status, data } = useSession();
  const { products } = useContext(CartContext);
  const cartQuantityItems = products.length;

  async function handleSignIn() {
    await signIn();
  }

  async function handleSignOut() {
    await signOut();
  }

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

      <Link href="/">
        <h1 className="text-justify text-xl font-semibold text-primary">
          Drive <span className="text-xs text-white">EMPORIUM</span>
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="relative">
            {cartQuantityItems > 0 && (
                <span className="bg-primary rounded-lg w-6 h-6 flex items-center justify-center text-sm font-bold absolute top-[calc(-1.25rem/2)] right-[calc(-1.25rem/2)]">
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
    </Card>
  );
}
