import { Banner } from "./_components/home/banner";
import { CategoryImageCard } from "./_components/home/category-image-card";

export default function Page() {
  return (
    <>
      <section className="pt-[3rem] pb-[2.5rem]">
        <div className="px-6 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <Banner />
        </div>
      </section>
      <section className="pt-[3rem] pb-[2.5rem]">
        <div className="px-6 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <h1 className="text-center font-bold text-2xl mb-2">
            Top Picks: Explore Our Best Categories
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Explore our most popular categories and find the perfect pair to
            match your style.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CategoryImageCard
              src="/category1.jpg"
              categoryName="Category name here!"
              className="row-span-2"
            />
            <CategoryImageCard
              src="/category2.jpg"
              categoryName="Category name here!"
            />
            <CategoryImageCard
              src="/category3.jpg"
              categoryName="Category name here!"
              className="row-span-2"
            />
            <CategoryImageCard
              src="/category4.jpg"
              categoryName="Category name here!"
            />
          </div>
        </div>
      </section>
    </>
  );
}
