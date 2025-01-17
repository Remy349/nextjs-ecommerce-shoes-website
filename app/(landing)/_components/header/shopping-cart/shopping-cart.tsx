import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";

export const ShoppingCart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="size-8 px-6">
          <ShoppingCartIcon className="size-4" />
          <div className="size-4">0</div>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Shopping Cart</SheetTitle>
          <SheetDescription>
            Review your selected items and get ready to checkout.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <div className="border-dashed h-[12rem] border flex justify-center flex-col items-center">
            <h3 className="text-center text-lg font-semibold">
              No products added yet
            </h3>
            <p className="text-muted-foreground text-sm text-center">
              Add any product to cart to buy
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <SheetFooter>
          <Button className="font-medium">Total to pay $0</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
