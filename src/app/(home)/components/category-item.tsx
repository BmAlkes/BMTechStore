import { Button } from "@/components/ui/button";
import { prismaClient } from "@/lib/prisma";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

export const CategorieItem = async ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  };
  return (
    <Link
      href={`/category/${category.slug}`}
      className="flex items-center justify-center gap-3"
    >
      <Button
        variant="outline"
        className="flex w-full items-center justify-center gap-2 rounded-lg py-3"
      >
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="text-xs font-bold">{category.name}</span>
      </Button>
    </Link>
  );
};
