import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <section className="pt-[3rem] pb-[2.5rem]">
      <div className="px-6 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <h1 className="text-center font-bold text-2xl mb-2 lg:text-3xl">
          Get in Touch with Us
        </h1>
        <p className="text-center text-muted-foreground mb-8 text-sm md:max-w-lg md:mx-auto">
          We’re here to help! Reach out with any questions, feedback, or support
          needs. Our team is ready to assist you every step of the way.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Phone className="size-5 mr-2" />
                <CardTitle className="text-lg">(+123) 456 789</CardTitle>
              </div>
              <CardDescription>
                Call us directly for immediate assistance with orders,
                inquiries, or support. We’re just a ring away!
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Mail className="size-5 mr-2" />
                <CardTitle className="text-lg">
                  shoooesinfo@example.com
                </CardTitle>
              </div>
              <CardDescription>
                Send us an email for detailed questions or feedback. Our team
                will get back to you promptly.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <MapPin className="size-5 mr-2" />
                <CardTitle className="text-lg">Granada, Nicaragua</CardTitle>
              </div>
              <CardDescription>
                Visit our store or office to connect in person. We’re excited to
                meet you and help with your needs!
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
