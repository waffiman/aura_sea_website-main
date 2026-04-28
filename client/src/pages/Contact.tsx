import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
const MotionCard = motion.create(Card);
import { Link } from "wouter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import contactHero from "@assets/stock_images/stormy_sea_contact.png";

export default function Contact() {
  useScrollAnimation();

  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    gdprConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", gdprConsent: false });
    }, 5000);
  };

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${contactHero})` }}
      />
      <div className="fixed inset-0 bg-black/40 z-0" />

      {/* ═══════════ HERO ═══════════ */}
      <section className="py-24 pt-32 relative flex items-center z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-6 text-white drop-shadow-md" data-testid="heading-contact">
            Contact AURA SEA
          </h1>
          <p className="text-lg text-white drop-shadow-md font-light max-w-2xl mx-auto">
            Whether you're a ship-owner looking for reliable crew management or a seafarer interested in opportunities, we're here to help.
          </p>
        </div>
      </section>

      {/* ═══════════ FORM + INFO ═══════════ */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Contact Form (wider) ── */}
            <div className="lg:col-span-3 scroll-animate">
              <div className="glass-card rounded-xl p-6 sm:p-8 h-full flex flex-col group transition-all duration-300 hover:shadow-2xl hover:border-cyan-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-5 h-5 text-cyan-400 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  <h2 className="font-headline text-xl font-medium text-foreground">Send us a message</h2>
                </div>

                {showSuccess ? (
                  <div className="text-center py-12" data-testid="success-message">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4 text-emerald-400" />
                    <h3 className="font-headline text-2xl font-semibold mb-2 text-foreground">Thank you!</h3>
                    <p className="text-muted-foreground font-light">We've received your message and will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground font-light text-sm">Name *</Label>
                        <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1 bg-background/60 border-border text-foreground placeholder:text-muted-foreground" data-testid="input-name" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-foreground font-light text-sm">Email *</Label>
                        <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-1 bg-background/60 border-border text-foreground placeholder:text-muted-foreground" data-testid="input-email" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-foreground font-light text-sm">Phone</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-1 bg-background/60 border-border text-foreground placeholder:text-muted-foreground" data-testid="input-phone" />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-foreground font-light text-sm">Subject *</Label>
                        <Input id="subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="mt-1 bg-background/60 border-border text-foreground placeholder:text-muted-foreground" data-testid="input-subject" />
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col">
                      <Label htmlFor="message" className="text-foreground font-light text-sm">Message *</Label>
                      <Textarea id="message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="mt-1 flex-grow bg-background/60 border-border text-foreground placeholder:text-muted-foreground min-h-[150px]" data-testid="textarea-message" />
                    </div>

                    <div className="flex items-start gap-2">
                      <Checkbox id="gdpr" required checked={formData.gdprConsent} onCheckedChange={(checked) => setFormData({ ...formData, gdprConsent: checked as boolean })}
                        className="border-white/20 data-[state=checked]:bg-cyan-600 data-[state=checked]:border-cyan-600" data-testid="checkbox-gdpr" />
                      <Label htmlFor="gdpr" className="text-sm leading-tight cursor-pointer text-muted-foreground font-light">
                        I consent to AURA SEA storing and processing my personal data in accordance with the{" "}
                        <Link href="/privacy"><span className="text-cyan-400 hover:underline">Privacy Policy</span></Link>
                      </Label>
                    </div>

                    <Button type="submit" className="w-full font-normal transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] hover:shadow-lg hover:shadow-cyan-500/20" data-testid="button-submit-contact">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* ── Contact Info (narrower) ── */}
            <div className="lg:col-span-2 space-y-6 scroll-animate-right">
              {/* Contact details */}
              <div className="glass-card rounded-xl p-6 group transition-all duration-300 hover:shadow-2xl hover:border-cyan-500/30">
                <h3 className="font-headline text-lg font-medium text-foreground mb-5">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email", value: "c2vseajobs@gmail.com", href: "mailto:c2vseajobs@gmail.com", testId: "contact-email" },
                    { icon: Phone, label: "Phone", value: "+380978458147 (Whatsapp, Telegram)", href: "tel:+380978458147", testId: "contact-phone" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-foreground">{item.label}</h4>
                          <a href={item.href} className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors font-light" data-testid={item.testId}>
                            {item.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">Address</h4>
                      <p className="text-sm text-muted-foreground font-light" data-testid="contact-address">
                        Ukraine, Odesa City<br />
                        Prokhorovska 77
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">Working Hours</h4>
                      <p className="text-sm text-muted-foreground font-light">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass-card rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-cyan-500/30">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-950/50 to-teal-950/50 flex items-center justify-center" data-testid="map-placeholder">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 mx-auto mb-2 text-cyan-400/50" />
                    <p className="text-xs text-gray-500 font-light">Interactive map will be added here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
