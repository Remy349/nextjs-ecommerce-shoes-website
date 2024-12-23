import { Metadata } from "next";
import { SignInForm } from "./_components/form";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl mb-2">
        Dashboard Command Login
      </h1>
      <p className="text-center text-muted-foreground text-sm mb-8 md:max-w-lg md:mx-auto">
        Access the admin panel to manage your ecommerce shoe store. Sign in
        securely to add products, track orders, and customize your store
        settings with ease.
      </p>
      <div className="md:mx-auto md:max-w-lg">
        <SignInForm />
      </div>
    </div>
  );
}
