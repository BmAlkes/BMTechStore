import {
  MenuIcon,
  ShoppingCartIcon,
  LogIn,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

export const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className=" text-left text-lg font-semibold">
            Menu
          </SheetHeader>
          <div className="mt-2 flex flex-col gap-4">
            <Button className="w-full justify-start gap-2">
              <LogIn size={16} />
              Login
            </Button>
            <Button className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Home
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <PercentIcon size={16} />
              Offers
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <ListOrderedIcon size={16} />
              Catalog
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold ">
        <span className="text-primary">BM Tech</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};
