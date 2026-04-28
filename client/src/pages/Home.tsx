import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Users, Shield, Clock, Database, Award, TrendingUp, Ship, CheckCircle, Headphones, ChevronDown, Heart, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const MotionCard = motion.create(Card);

import backgroundPhoto from "@assets/stock_images/Gemini_Generated_Image_x18mj0x18mj0x18m.png";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundPhoto})` }}
      />
      <div className="fixed inset-0 bg-black/40 z-0" />

      <div className="relative z-10 w-full">
        {/* ═══════════ HERO ═══════════ */}
        <section className="py-24 pt-32 relative flex flex-col items-center justify-center min-h-[90vh] z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <h1
                  className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)]"
                  data-testid="text-hero-tagline"
                >
                  Crewing with Care
                  <span className="block mt-4 text-2xl sm:text-4xl lg:text-5xl text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                    FROM SEAFARERS TO SEAFARERS
                  </span>
                </h1>
                <p
                  className="mt-6 text-lg sm:text-2xl max-w-4xl font-medium leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] mx-auto"
                  data-testid="text-hero-subtitle"
                >
                  Ukrainian Crew Management for Container Vessels, Bulk-Carriers, Tankers, Passenger Ship's and Yachts worldwide with modern HR system and Psychological support for seafarer's family.
                </p>

                <div className="mt-8 flex w-full max-w-md flex-col gap-4 sm:max-w-xl sm:flex-row mx-auto">
                  <Link
                    href="/ship-owners"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full min-w-0 text-center !text-white sm:flex-1 sm:inline-flex sm:items-center sm:justify-center transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg hover:shadow-primary/20",
                    )}
                    data-testid="link-hero-ship-owners"
                  >
                    For Ship-Owners
                  </Link>
                  <Link
                    href="/seafarers"
                    className={cn(
                      buttonVariants({ size: "lg", variant: "secondary" }),
                      "w-full min-w-0 text-center !text-white sm:flex-1 sm:inline-flex sm:items-center sm:justify-center transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg hover:shadow-white/10",
                    )}
                    data-testid="link-hero-seafarers"
                  >
                    For Seafarers
                  </Link>
                </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 text-center relative z-10">
              <ChevronDown className="inline-block w-8 h-8 text-white/70 hover:text-white transition-colors animate-bounce" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════ FRESH VISION ═══════════ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4" data-testid="heading-fresh-vision">
                Fresh Vision
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto">
                Combining strong maritime experience with modern recruitment system, transparent communication, and care for seafarer wellbeing at every stage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <MotionCard 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card text-center group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30" data-testid="card-fresh-vision-psychological">
                <CardHeader>
                  <Heart className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3" />
                  <CardTitle className="font-headline">Psychological Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-white/80">
                    Psychological support for both the seafarer and their spouse helps maintain emotional stability, trust, and resilience during long contracts.
                  </CardDescription>
                </CardContent>
              </MotionCard>

              <MotionCard 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card text-center group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30" data-testid="card-fresh-vision-processing">
                <CardHeader>
                  <FileCheck className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3" />
                  <CardTitle className="font-headline">Modern Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-white/80">
                    Every ongoing candidate processing throughout our selection system with verified stages and inspected by our specialists.
                  </CardDescription>
                </CardContent>
              </MotionCard>

              <MotionCard 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-card text-center group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30" data-testid="card-fresh-vision-partnerships">
                <CardHeader>
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3" />
                  <CardTitle className="font-headline">Long-Term Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-white/80">
                    Building lasting relationships based on trust, reliability, and mutual growth with both ship-owners and seafarers
                  </CardDescription>
                </CardContent>
              </MotionCard>
            </div>
          </div>
        </section>

        {/* ═══════════ SHIP OWNERS BENEFITS ═══════════ */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4" data-testid="heading-ship-owners-benefits">
                For Ship-Owners - Key Benefits
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto">
                Your reliable partner for comprehensive crew management solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <MotionCard 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30" data-testid="card-compliance">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="w-10 h-10 text-primary flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" />
                  <CardTitle className="font-headline text-lg text-white">Compliance & Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    Full compliance with international maritime standards, comprehensive vetting, medical checks, and certification management
                  </p>
                </CardContent>
              </MotionCard>

              <MotionCard 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30" data-testid="card-database">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Database className="w-10 h-10 text-primary flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" />
                  <CardTitle className="font-headline text-lg text-white">Experienced Crew Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    Access to 500+ verified professionals across ranks and vessel types - including containers, bulk, tankers, and more
                  </p>
                </CardContent>
              </MotionCard>
            </div>

            <div className="text-center">
              <Link
                href="/ship-owners"
                className={cn(buttonVariants({ size: "lg" }), "inline-flex transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg hover:shadow-primary/20")}
                data-testid="button-learn-more-owners"
              >
                Learn More About Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ SEAFARERS WHY ═══════════ */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[0px] mb-[0px] pt-[24px] pb-[24px]">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4" data-testid="heading-seafarers-why">
                For Seafarers - Why AURA SEA?
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Transparent contracts, timely payments, and real career growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <MotionCard 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30" data-testid="card-fair-contracts">
                <CardHeader>
                  <CheckCircle className="w-10 h-10 text-primary mb-4 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" />
                  <CardTitle className="font-headline text-white">Fair Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    Clear contract terms with no hidden clauses. We ensure you understand every detail before signing
                  </p>
                </CardContent>
              </MotionCard>

              <MotionCard 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30" data-testid="card-timely-payment">
                <CardHeader>
                  <Clock className="w-10 h-10 text-primary mb-4 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" />
                  <CardTitle className="font-headline text-white">Timely Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    Reliable, on-time salary payments. Your financial security is our priority
                  </p>
                </CardContent>
              </MotionCard>

              <MotionCard 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30" data-testid="card-career-support">
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-4 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" />
                  <CardTitle className="font-headline text-white">Career Support & Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    Access to training opportunities and career advancement pathways. We invest in your professional growth
                  </p>
                </CardContent>
              </MotionCard>

              <MotionCard 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30" data-testid="card-family-support">
                <CardHeader>
                  <Headphones className="w-10 h-10 text-primary mb-4 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" />
                  <CardTitle className="font-headline text-white">Family/ Seaman's Psychological Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/70">
                    When families are supported, seafarers perform better, return home healthier, and long-term careers at sea become sustainable.
                  </p>
                </CardContent>
              </MotionCard>
            </div>

            <div className="text-center">
              <Link
                href="/seafarers"
                className={cn(buttonVariants({ size: "lg" }), "inline-flex transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg hover:shadow-primary/20")}
                data-testid="button-learn-more-seafarers"
              >
                Learn More About Opportunities
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <MotionCard 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-premium p-12 border-2 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 group">
              <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-6 text-white" data-testid="heading-cta">
                Ready to Partner with AURA SEA?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Let's discuss how we can support your crewing needs or advance your maritime career
              </p>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "inline-flex text-lg px-10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl hover:shadow-primary/20")}
                data-testid="button-contact-aura-sea"
              >
                Contact AURA SEA
              </Link>
            </MotionCard>
          </div>
        </section>
      </div>
    </div>
  );
}
