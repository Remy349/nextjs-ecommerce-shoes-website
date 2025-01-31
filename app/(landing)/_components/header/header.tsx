import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { MobileMenu } from "./mobile-menu";
import { DesktopMenu } from "./desktop-menu";
import Link from "next/link";
import { ShoppingCart } from "./shopping-cart/shopping-cart";

export const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-background border-b">
      <nav className="px-6 mx-auto h-16 flex items-center justify-between md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <MobileMenu />
        <DesktopMenu />
        <div className="flex items-center">
          <ShoppingCart />
          <Button size="icon" variant="ghost" className="size-8" asChild>
            <Link href="/auth/sign-in">
              <User className="size-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
