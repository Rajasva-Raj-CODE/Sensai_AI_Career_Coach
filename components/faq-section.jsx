import React from "react";
import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 md:text-base">
            Find answers to common questions about our platform
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-black rounded-2xl border border-gray-800 px-4 md:px-6 py-2 md:py-4 mb-2 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white py-2 md:py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-2 md:pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
