import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-background border-b">
      <nav className="px-6 mx-auto h-16 flex items-center justify-between md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <Link href="/" className="font-bold text-xl">
          Shoooes
        </Link>
      </nav>
    </header>
  );
};
