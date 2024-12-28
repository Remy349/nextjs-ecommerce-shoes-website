import { Button } from "@/components/ui/button";
import Link from "next/link";
import { links } from "./links";

export const DesktopMenu = () => {
  return (
    <div className="max-md:hidden flex items-center gap-x-4">
      <Link href="/" className="font-bold text-xl">
        Shoooes
      </Link>
      <ul className="flex items-center">
        {links.map((item) => (
          <li key={item.name}>
            <Button className="font-medium" variant="link" asChild>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
