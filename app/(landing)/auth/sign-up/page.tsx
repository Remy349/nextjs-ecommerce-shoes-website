import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import { SignUpForm } from "./_components/form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <section className="pt-[3rem] pb-[2.5rem]">
      <div className="px-6 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="md:max-w-xl md:mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Create Your Account</CardTitle>
              <CardDescription>
                Sign up today for a seamless and personalized shopping
                experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignUpForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
