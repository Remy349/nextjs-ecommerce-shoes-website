import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <section className="pt-[3rem] pb-[2.5rem]">
      <div className="px-6 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <h1 className="text-center font-bold text-2xl mb-2 lg:text-3xl">
          Our Journey, Your Trust
        </h1>
        <p className="text-center text-muted-foreground mb-8 text-sm md:max-w-lg md:mx-auto">
          Discover the story behind our ecommerce shoe store. From our passion
          for quality footwear to our commitment to exceptional service, we’re
          here to bring style and comfort to every step you take.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-t-4 border-t-primary lg:row-span-2 lg:self-center">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Teamwork</CardTitle>
              <CardDescription>
                We believe in the power of collaboration. Together, we create a
                seamless shopping experience and ensure every detail is handled
                with care.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-t-4 border-t-primary">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Innovation</CardTitle>
              <CardDescription>
                Pushing boundaries is our mantra. We embrace fresh ideas to
                offer cutting-edge solutions and stay ahead in the world of
                ecommerce.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-t-4 border-t-primary lg:row-span-2 lg:self-center">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Customer Commitment</CardTitle>
              <CardDescription>
                Your satisfaction drives us. We are dedicated to delivering
                high-quality products and outstanding service every time.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-t-4 border-t-primary lg:col-start-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">Vision</CardTitle>
              <CardDescription>
                We aim to redefine shoe shopping. Our vision is to connect
                style, comfort, and convenience for customers everywhere.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
