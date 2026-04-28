import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, DollarSign, TrendingUp, Shield, Users, FileText, Anchor, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";
const MotionCard = motion.create(Card);
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import seafarerCrew from "@assets/stock_images/stormy_sea_3.png";
import heroPhoto from "@assets/stock_images/seafarer_crew_workin_81b3ed0a.jpg";

export default function Seafarers() {
  useScrollAnimation();

  const applicationSteps = [
    { number: "01", title: "Register Interest", description: "Check our Hot Vacancies at Instagram page and Telegram Group Chanel for current openings and submit your application through our online form.", icon: FileText },
    { number: "02", title: "Interview & Assessment", description: "We'll review your qualifications and conduct an interview to understand your experience and career goals.", icon: Users },
    { number: "03", title: "Documentation", description: "Submit required certificates, medical examinations, and complete necessary paperwork with our support.", icon: Shield },
    { number: "04", title: "Joining Vessel", description: "We coordinate all travel arrangements, briefings, and ensure smooth joining process to your assigned vessel.", icon: Anchor },
  ];

  return (
    <div className="min-h-screen pb-16 relative">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: `url(${seafarerCrew})` }} />
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
            <div className="absolute inset-0 bg-teal-900/20 mix-blend-color" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_40%)]" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl text-center lg:text-left mx-auto lg:mx-0">

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg tracking-tight" data-testid="heading-seafarers">
                For Seafarers
              </h1>
              <p className="text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 text-white/90 drop-shadow-md">
                Join AURA SEA and work with reputable operators across Container ships, Bulk carriers, General Cargo, Tankers, Yachts, and Passenger Vessels - while building a career supported by fair processes and wellbeing-focused Crew Management.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="relative z-10">
        {/* ═══════════ WHAT WE OFFER — accent bg ═══════════ */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-what-we-offer-you">
              What We Offer You
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* What We Offer Cards */}
              {[
                {
                  icon: FileText,
                  title: "Fair Contracts",
                  desc: "Clear contract terms with no hidden clauses. We ensure you understand every detail before signing.",
                  iconBg: "bg-cyan-500/10",
                  iconClass: "text-cyan-400",
                  testId: "card-offer-fair-contracts",
                },
                {
                  icon: DollarSign,
                  title: "Timely Payment",
                  desc: "Reliable, on-time salary payments every month. Your financial security is our priority.",
                  iconBg: "bg-teal-500/10",
                  iconClass: "text-teal-400",
                  testId: "card-offer-timely-payment",
                },
                {
                  icon: Shield,
                  title: "Safe & Reputable Fleets",
                  desc: "We partner only with established ship-owners who maintain high safety and operational standards.",
                  iconBg: "bg-blue-500/10",
                  iconClass: "text-blue-400",
                  testId: "card-offer-safe-fleets",
                },
                {
                  icon: CheckCircle,
                  title: "Long-Term Cooperation",
                  desc: "Opportunities for repeated contracts and career continuity with the same fleet.",
                  iconBg: "bg-cyan-500/10",
                  iconClass: "text-cyan-400",
                  testId: "card-offer-long-term",
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
                    <CardHeader className="text-center">
                      <div className={`w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center mx-auto mb-2`}>
                        <Icon className={`w-6 h-6 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 ${item.iconClass}`} />
                      </div>
                      <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed text-center">{item.desc}</p>
                    </CardContent>
                  </MotionCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ WELLBEING & FAMILY SUPPORT ═══════════ */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionCard
  initial={{ opacity: 0, y: 40, x: 0, scale: 1 }}
  whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
  className="glass-card group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 border-teal-500/20 shadow-md shadow-teal-950/5 dark:shadow-teal-950/15">
              <CardHeader className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-teal-400 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3" />
                </div>
                <div className="space-y-1 flex-1">
                  <CardTitle
                    className="font-headline text-2xl sm:text-3xl font-semibold"
                    data-testid="heading-seafarers-wellbeing"
                  >
                    Wellbeing &amp; family support
                  </CardTitle>
                  <CardDescription className="text-base font-light leading-relaxed pt-1">
                    Aura Sea Crewing is the first Ukrainian crewing agency integrating psychological support for seafarers and
                    their families. Mental stability and emotional balance matter for safe, effective work at sea - and we build
                    that into how we work with you.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground mb-3">Through certified psychological partners we offer:</p>
                <ul className="space-y-2 text-sm text-muted-foreground font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Support and consultations for seafarers' spouses and relatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Stress-resilience sessions for seafarers before and after contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Continuous mental health awareness integrated into our HR process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span>Supporting the mental health of a sailor's wife and improving the quality of long-distance relationships and a comfortable stay together</span>
                  </li>
                </ul>
              </CardContent>
            </MotionCard>
          </div>
        </section>

        {/* ═══════════ CAREER PATH ═══════════ */}
        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-career-path">
              Your Career Path with AURA SEA
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MotionCard
  initial={{ opacity: 0, y: 40, x: 0, scale: 1 }}
  whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
  className="glass-card h-full group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 border-cyan-500/20 shadow-md shadow-cyan-950/5 dark:shadow-cyan-950/15">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-cyan-400 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-lg font-medium">Career Progression</CardTitle>
                    <CardDescription className="font-light pt-2 text-sm">
                      We support your professional advancement through:
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Opportunities to advance from junior to senior positions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Regular performance assessments and career guidance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Priority consideration for matching openings</span>
                    </li>
                  </ul>
                </CardContent>
              </MotionCard>

              <MotionCard
  initial={{ opacity: 0, y: 40, x: 0, scale: 1 }}
  whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
  className="glass-card h-full group cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 scroll-animate-delay-1 border-teal-500/20 shadow-md shadow-teal-950/5 dark:shadow-teal-950/15"
              >
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-teal-400 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-lg font-medium">Training &amp; Development</CardTitle>
                    <CardDescription className="font-light pt-2 text-sm">
                      Invest in your skills with our support:
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground font-light">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>Information about training courses and certifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>Guidance on required qualifications for advancement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>Connections to approved training institutions</span>
                    </li>
                  </ul>
                </CardContent>
              </MotionCard>
            </div>
          </div>
        </section>

        {/* ═══════════ PROCESS STEPS — dark with timeline ═══════════ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12 scroll-animate" data-testid="heading-how-process-works">
              How the Process Works
            </h2>

            <div className="timeline-line space-y-6">
              {applicationSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={step.number} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (i * 0.15).toFixed(2) }}
                    className={`flex gap-5 group cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/10`}>
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center z-10 shadow-lg shadow-cyan-900/30">
                      <Icon className="w-7 h-7 text-foreground" />
                    </div>
                    <div className="flex-1 glass-card rounded-xl p-5 ml-1 transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="font-light text-xs">{step.number}</Badge>
                        <h3 className="font-headline text-lg font-medium text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Note box */}
            <div className="mt-12 scroll-animate">
              <div className="feature-row">
                <CheckCircle className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-headline text-base font-medium text-foreground mb-1">Important Note</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Active vacancies are regularly posted on our Socials (<a href="https://t.me/AURASEA_crew" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Telegram</a>, <a href="https://www.instagram.com/_aura_sea/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Instagram</a>, <a href="https://www.linkedin.com/company/110849089" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">LinkedIn</a>). When you find a matching position, submit your application and our team will review your profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA — accent ═══════════ */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] opacity-50" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="glass-premium rounded-3xl p-8 sm:p-12 text-center group transition-all duration-500 hover:border-teal-500/40 hover:shadow-2xl hover:shadow-teal-500/20 scroll-animate-scale">
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                <Anchor className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground" data-testid="heading-cta-check-vacancies">
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 font-light max-w-2xl mx-auto leading-relaxed">
                Check our current vacancies or get in touch to learn more about opportunities with AURA SEA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/vacancies"
                  className={cn(buttonVariants({ size: "lg" }), "inline-flex font-normal px-8 h-12 text-base")}
                  data-testid="button-view-vacancies"
                >
                  View Vacancies
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "secondary" }),
                    "inline-flex font-normal px-8 h-12 text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg hover:shadow-white/10",
                  )}
                  data-testid="button-contact-seafarers"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
