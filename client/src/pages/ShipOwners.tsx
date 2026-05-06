import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Shield,
  FileCheck,
  CheckCircle,
  Ship,
  TrendingUp,
  Database,
  Cpu,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
const MotionCard = motion.create(Card);
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import portShips from "@assets/stock_images/stormy_sea_2.png";
import heroPhoto from "@assets/stock_images/maritime_shipping_po_c83c1900.jpg";

export default function ShipOwners() {
  useScrollAnimation();

  const processSteps = [
    { number: "01", title: "Requirements", description: "We discuss your fleet needs, vessel types, and specific crew requirements in detail." },
    { number: "02", title: "Shortlist", description: "Our team identifies qualified candidates from our extensive database of 500+ seafarers." },
    { number: "03", title: "Vetting", description: "Comprehensive background checks, certification verification, and qualification assessment." },
    { number: "04", title: "Deployment", description: "Complete documentation preparation, travel arrangements, and vessel joining coordination." },
    { number: "05", title: "Ongoing Support", description: "24/7 communication, contract management, and crew change coordination throughout the assignment." },
  ];

  return (
    <div className="min-h-screen pb-16 relative">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: `url(${portShips})` }} />
      <div className="fixed inset-0 bg-black/40 z-0" />

      {/* ═══════════ HERO ═══════════ */}
      <section className="py-24 pt-32 relative flex items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[400px] flex items-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroPhoto})` }}
            />
            {/* Elegant Gradient Overlays for Text Legibility and Aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20 backdrop-blur-none" />
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-color" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_40%)]" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg tracking-tight" data-testid="heading-ship-owners">
                For Ship-Owners
              </h1>
              <p className="text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 text-white/90 drop-shadow-md">
                Comprehensive crew management solutions that reduce your operational complexity while ensuring you have qualified, reliable crew members.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="relative z-10">
        {/* ═══════════ WHAT WE OFFER — accent ═══════════ */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-what-we-offer">
              What We Offer
            </h2>

            <div className="scroll-animate">
              <div className="glass-premium rounded-xl p-6 sm:p-8 group cursor-default transition-all duration-300 hover:shadow-2xl hover:border-primary/30 hover:shadow-primary/10">
                <p className="text-muted-foreground font-light text-lg mb-6">
                  Aura Sea Crewing provides crew management for a wide range of vessel types - including Container ships, Bulk carriers, General Cargo, Tankers, Yachts, and Passenger Vessels - handling the entire lifecycle from selection through deployment and ongoing support.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: "Crew Selection & Recruitment", desc: "Access to experienced, verified Ukrainian officers and ratings matched to your vessel type and operational requirements." },
                    { title: "Documentation & Compliance", desc: "Complete handling of certifications, visas, medical examinations, and regulatory requirements." },
                    { title: "Travel & Logistics", desc: "End-to-end coordination of crew changes, flights, and vessel joining arrangements." },
                    { title: "Contract Management", desc: "Transparent contract administration, payroll processing, and crew welfare monitoring." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1 text-sm">{item.title}</h4>
                        <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ═══════════ WHY SHIPOWNERS CHOOSE — accent ═══════════ */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-why-aura-sea">
              Why Shipowners Choose Aura Sea Crewing
            </h2>

            <div className="scroll-animate">
              <div className="glass-premium rounded-3xl p-8 sm:p-12 transition-all duration-300 hover:shadow-2xl hover:border-primary/30 hover:shadow-primary/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                  {[
                    { icon: Database, title: "Continuously updated verified database", desc: "A living pool of qualified seafarers with profiles kept current through structured evaluation and ongoing updates.", color: "cyan" },
                    { icon: Cpu, title: "Advanced HR automation and analytics", desc: "Data-driven recruitment workflows, digital tracking, and analytics that shorten time-to-hire and reduce administrative load.", color: "teal" },
                    { icon: Heart, title: "Integrated psychological support for families", desc: "Certified partners supporting seafarers and their relatives - an approach that strengthens resilience and stability across the crew lifecycle.", color: "blue" },
                    { icon: MessageCircle, title: "Fast communication and professional reliability", desc: "Responsive coordination, clear updates, and dependable execution from shortlist through joining and beyond.", color: "cyan" },
                    { icon: Ship, title: "Real maritime experience - managed by active seafarers", desc: "An agency run by people who understand life at sea, so requirements, risks, and expectations are interpreted accurately.", color: "teal" },
                    { icon: TrendingUp, title: "Proven performance - 200+ successful placements", desc: "Over three years of placing Ukrainian seafarers across vessel types, with long-term operator relationships built on results.", color: "blue" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className={`scroll-animate scroll-animate-delay-${Math.min(i + 1, 4)}`}>
                        <div className="flex items-start gap-4 group cursor-default transition-all duration-300 hover:-translate-y-1">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center border border-${item.color}-500/20`}>
                            <Icon className={`w-6 h-6 text-${item.color}-400 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6`} />
                          </div>
                          <div>
                            <h3 className="font-headline text-lg font-medium text-foreground mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ═══════════ COMPLIANCE — dark ═══════════ */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-compliance-safety">
              Compliance & Safety
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Compliance & Safety Cards */}
              {[
                {
                  icon: Shield,
                  title: "International Standards",
                  desc: "Full compliance with STCW, MLC 2006, ISM Code, and all relevant international maritime regulations.",
                  iconBg: "bg-cyan-500/10",
                  iconClass: "text-cyan-400",
                  testId: "card-compliance-standards",
                },
                {
                  icon: FileCheck,
                  title: "Rigorous Vetting",
                  desc: "Comprehensive background checks, certificate verification, and competency assessments.",
                  iconBg: "bg-teal-500/10",
                  iconClass: "text-teal-400",
                  testId: "card-compliance-vetting",
                },
                {
                  icon: CheckCircle,
                  title: "Medical Fitness",
                  desc: "Current medical certificates from approved clinics, ensuring crew fitness for sea service.",
                  iconBg: "bg-blue-500/10",
                  iconClass: "text-blue-400",
                  testId: "card-compliance-medical",
                },
                {
                  icon: Users,
                  title: "Examination & Interview",
                  desc: "Our specialists conduct online evaluation, examination and interviewing before send candidates to shipowner company.",
                  iconBg: "bg-teal-500/10",
                  iconClass: "text-teal-400",
                  testId: "card-compliance-exam",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <MotionCard
                    key={item.title}
                    initial={{ opacity: 0, y: 40, x: 0, scale: 1 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: (0.1 + (i * 0.2)).toFixed(1), ease: "easeOut" }}
                    className={`glass-card h-full group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30`}
                    data-testid={item.testId}
                  >
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center mb-2`}>
                        <Icon className={`w-6 h-6 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 ${item.iconClass}`} />
                      </div>
                      <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </MotionCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ PROCESS — ocean alt with timeline ═══════════ */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-process">
              Process Overview
            </h2>

            <div className="timeline-line space-y-6">
              {processSteps.map((step, i) => (
                <div key={step.number} className={`flex gap-5 group cursor-default transition-all duration-300 hover:-translate-y-1 scroll-animate scroll-animate-delay-${Math.min(i + 1, 4)}`}>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center z-10 shadow-lg shadow-cyan-900/30">
                    <span className="text-xl font-bold text-foreground font-headline">{step.number}</span>
                  </div>
                  <div className="flex-1 glass-card rounded-xl p-5 ml-1 transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/20">
                    <h3 className="font-headline text-lg font-medium text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] opacity-50" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="glass-premium rounded-3xl p-8 sm:p-12 text-center group transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20 scroll-animate-scale">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                <Ship className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground" data-testid="heading-cta-discuss">
                Let's Discuss Your Crewing Needs
              </h3>
              <p className="text-lg text-muted-foreground mb-8 font-light max-w-2xl mx-auto leading-relaxed">
                Contact us today to learn how AURA SEA can become your reliable crewing partner.
              </p>
              <a
                href="mailto:partner@aurasea.org"
                className={cn(buttonVariants({ size: "lg" }), "inline-flex font-normal px-8 h-12 text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg hover:shadow-cyan-500/20")}
                data-testid="button-contact-ship-owners"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
