import "@/app/globals.css";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { font } from "@/lib/fonts";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { DashboardSidebar } from "./_components/sidebar/dashboard-sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Ecommerce Shoes Website",
};

export default function DashboardLayout({
  admin,
  customer,
}: Readonly<{ admin: React.ReactNode; customer: React.ReactNode }>) {
  const userRole: "ADMIN" | "CUSTOMER" = "ADMIN";

  const renderNode = {
    ADMIN: admin,
    CUSTOMER: customer,
  };

  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <SidebarProvider>
          <DashboardSidebar />
          <SidebarInset className="bg-muted/50">
            <header className="sticky top-0 bg-background z-50 border-b">
              <div className="h-12 flex items-center px-6">
                <SidebarTrigger />
              </div>
            </header>
            <main className="px-6">
              <section className="pt-[2.5rem] pb-[3rem]">
                {renderNode[userRole]}
              </section>
            </main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
