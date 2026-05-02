import { Link } from "wouter";
import { Send, Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import marineOfficer from "@assets/stock_images/stormy_sea_2.png";
import heroPhoto from "@assets/stock_images/marine_engineer_offi_4366b328.jpg";

export default function Vacancies() {
  const socialLinks = [
    {
      id: "telegram",
      name: "Telegram",
      icon: Send,
      url: "https://t.me/AURASEA_crew",
      description: "Get instant notifications about hot vacancies directly on your phone.",
      color: "text-[#0088cc]",
      hoverShadow: "hover:shadow-blue-500/20"
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/_aura_sea/",
      description: "Follow our daily updates, life at sea, and new career opportunities.",
      color: "text-[#E1306C]",
      hoverShadow: "hover:shadow-pink-500/20"
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61581552804551",
      description: "Stay connected with our maritime community and professional network.",
      color: "text-[#1877F2]",
      hoverShadow: "hover:shadow-blue-600/20"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/110849089",
      description: "Professional networking and official corporate announcements.",
      color: "text-[#0A66C2]",
      hoverShadow: "hover:shadow-blue-700/20"
    }
  ];

  return (
    <div className="min-h-screen pb-16 relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${marineOfficer})` }}
      />
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
            {/* Elegant Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20 backdrop-blur-none" />
            <div className="absolute inset-0 bg-emerald-900/20 mix-blend-color" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_40%)]" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-medium text-emerald-50 tracking-wider uppercase">Live Updates</span>
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg tracking-tight" data-testid="heading-vacancies">
                Current Vacancies
              </h1>
              <p className="text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 text-white/90 drop-shadow-md">
                We publish all current hot vacancies in our social media channels. Subscribe to stay updated and never miss an opportunity.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════ SOCIAL LINKS SECTION ═══════════ */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`glass-card h-full flex flex-col transition-all duration-500 hover:-translate-y-2 border-white/10 ${social.hoverShadow} group`}>
                  <CardHeader className="text-center pb-2">
                    <div className="mb-4 flex justify-center">
                      <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${social.color}`}>
                        <social.icon className="w-10 h-10" />
                      </div>
                    </div>
                    <CardTitle className="font-headline text-2xl text-white group-hover:text-primary transition-colors">
                      {social.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between text-center">
                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                      {social.description}
                    </p>
                    <Button 
                      asChild
                      className="w-full bg-white/10 hover:bg-primary text-white hover:text-white border border-white/20 transition-all duration-300"
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        View Vacancies <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
