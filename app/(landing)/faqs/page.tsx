import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQs",
};

export default function Page() {
  return (
    <section className="pt-[3rem] pb-[2.5rem]">
      <div className="px-6 mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <h1 className="text-center font-bold text-2xl mb-2 lg:text-3xl">
          Everything You Need to Know
        </h1>
        <p className="text-center text-sm text-muted-foreground mb-8 md:max-w-lg md:mx-auto">
          Discover answers to popular questions about orders, payments, and
          policies. Your go-to resource for hassle-free shopping insights.
        </p>
        <div className="md:max-w-3xl md:mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I find my shoe size?</AccordionTrigger>
              <AccordionContent>
                We provide a detailed size guide on each product page. You can
                also measure your foot length and compare it to our size chart.
                If you are between sizes, we recommend going for the larger
                size.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We offer a 30-day return policy for unworn shoes in their
                original condition and packaging. Please refer to our Returns
                page for more detailed information on the process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you offer international shipping?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we ship to many countries worldwide. Shipping costs and
                delivery times vary depending on the destination. You can check
                the available shipping options at checkout.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                Once your order is shipped, you will receive a confirmation
                email with a tracking number. You can use this number on our
                website or the carrier website to track your package.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Are your shoes true to size?</AccordionTrigger>
              <AccordionContent>
                Most of our shoes fit true to size. However, we recommend
                checking the product description for any specific sizing notes.
                Customer reviews can also be helpful for understanding how a
                particular style fits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How do I care for my shoes?</AccordionTrigger>
              <AccordionContent>
                Care instructions vary depending on the material of the shoes.
                Generally, we recommend using a soft brush to remove dirt,
                avoiding machine washing, and storing shoes in a cool, dry
                place. Specific care instructions are included with each pair of
                shoes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
