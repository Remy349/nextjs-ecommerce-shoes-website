import { cn } from "@/lib/utils";

interface IProps {
  src: string;
  categoryName: string;
  className?: string;
}

export const CategoryImageCard = ({ src, categoryName, className }: IProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden transition-transform duration-300 ease-in-out group",
        className,
      )}
    >
      <picture>
        <img
          src={src}
          alt="Category"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-center text-lg font-semibold px-4">
          {categoryName}
        </p>
      </div>
    </div>
  );
};
