"use client";
import CountUp from "react-countup";
import { useRef, useState, useEffect } from "react";

const StatsSection = () => {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">
              {statsInView ? <CountUp end={50} duration={2} suffix="+" /> : "0+"}
            </h3>
            <p className="text-muted-foreground">Industries Covered</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">
              {statsInView ? <CountUp end={1000} duration={2} suffix="+" /> : "0+"}
            </h3>
            <p className="text-muted-foreground">Interview Questions</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">
              {statsInView ? <CountUp end={95} duration={2} suffix="%" /> : "0%"}
            </h3>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl font-bold">
              {statsInView ? <CountUp end={24} duration={2} suffix="/7" /> : "0/7"}
            </h3>
            <p className="text-muted-foreground">AI Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;