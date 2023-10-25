"use client";
import {
  MenuIcon,
  ShoppingCartIcon,
  LogIn,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
  LogOut,
  LogInIcon,
  LogOutIcon,
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
import { signIn, useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";
export const Header = () => {
  const { data, status } = useSession();
  const handleClickLogin = async () => {
    await signIn();
  };

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data?.user && (
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
                  <p className="text-sm opacity-75">Good shopping!</p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                onClick={handleClickLogin}
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogout}
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            )}
            <SheetClose asChild>
              <Link href="/">
                <Button className="w-full justify-start gap-2">
                  <HomeIcon size={16} />
                  Home
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/offers">
                <Button
                  className="w-full justify-start gap-2"
                  variant="outline"
                >
                  <PercentIcon size={16} />
                  Offers
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/catalog">
                <Button
                  className="w-full justify-start gap-2"
                  variant="outline"
                >
                  <ListOrderedIcon size={16} />
                  Catalog
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold ">
        <Link href="/">
          <span className="text-primary">BM Tech</span> Store
        </Link>
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};
