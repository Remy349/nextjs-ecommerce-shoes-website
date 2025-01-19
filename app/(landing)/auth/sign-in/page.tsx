import { Metadata } from "next";
import { SignInForm } from "./_components/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Page() {
  return (
    <section className="pt-[3rem] pb-[2.5rem]">
      <div className="px-6 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="lg:max-w-4xl lg:mx-auto">
          <Card>
            <CardContent className="p-0 grid md:grid-cols-2">
              <div className="p-6">
                <CardHeader className="p-0 pb-6">
                  <CardTitle className="text-2xl">
                    Welcome Back, Shopper!
                  </CardTitle>
                  <CardDescription>
                    Sign in to access your orders, wishlist, and personalized
                    shopping experience.
                  </CardDescription>
                </CardHeader>
                <SignInForm />
              </div>
              <div className="hidden bg-muted md:block">
                <picture>
                  <img
                    src="/bg-sign-in.jpg"
                    alt="Background image"
                    className="h-full object-cover w-full"
                    width={500}
                    height={500}
                  />
                </picture>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
