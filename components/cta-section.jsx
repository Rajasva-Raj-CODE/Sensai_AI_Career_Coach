import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="w-full py-20 px-0 bg-gradient-to-br from-primary via-accent to-secondary">
      <div className="max-w-full mx-auto rounded-3xl p-10 md:px-80 flex flex-col items-center justify-center text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
          Ready to Accelerate Your Career?
        </h2>
        <p className="mx-auto max-w-[1200px] text-white/90 md:text-xl mb-2">
          Join thousands of professionals who are advancing their careers with
          AI-powered guidance.
        </p>
        <Link href="/dashboard" passHref>
          <Button
            size="lg"
            className="h-12 px-32 text-lg font-semibold rounded-full mt-4 animate-bounce border-none"
          >
            Start Your Journey Today <ArrowRight className="ml-8 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
