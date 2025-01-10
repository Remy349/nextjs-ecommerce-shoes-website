"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { links } from "./links";
import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" className="size-8 md:hidden">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="hidden">
          <SheetHeader>
            <SheetTitle>Mobile Menu</SheetTitle>
            <SheetDescription>
              This is the mobile menu for small screen devices
            </SheetDescription>
          </SheetHeader>
        </div>
        <ul className="flex items-center flex-col gap-y-6 pt-8">
          {links.map((item) => (
            <li key={item.name}>
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
