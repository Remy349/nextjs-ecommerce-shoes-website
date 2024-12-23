import { Metadata } from "next";
import { SignUpForm } from "./_components/form";

export const metadata: Metadata = {
  title: "Create account",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-2">
        Unlock Admin Power
      </h1>
      <p className="text-center text-muted-foreground text-sm mb-8 md:max-w-lg md:mx-auto">
        Create your admin account to unlock the full potential of your ecommerce
        store. Manage inventory, track orders, and oversee every detail with
        precision and ease.
      </p>
      <div className="md:mx-auto md:max-w-lg">
        <SignUpForm />
      </div>
    </div>
  );
}
