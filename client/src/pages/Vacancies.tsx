import { useState } from "react";
import VacancyCard from "@/components/VacancyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import marineOfficer from "@assets/stock_images/stormy_sea_2.png";
import heroPhoto from "@assets/stock_images/marine_engineer_offi_4366b328.jpg";

export default function Vacancies() {
  const [selectedVacancy, setSelectedVacancy] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    rank: "",
    email: "",
    phone: "",
    nationality: "",
    experience: "",
    message: "",
    gdprConsent: false,
  });

  const vacancies = [
    {
      id: "chief-officer-tanker",
      title: "Chief Officer",
      vesselType: "Oil/Chemical Tanker",
      salary: "$6,000 - $8,000/month",
      contractLength: "6 months",
      description: "Experienced Chief Officer needed for modern chemical tanker fleet. Must hold valid STCW II/2 certificate, minimum 2 years experience as Chief Officer on tankers, and current ECDIS certification.",
    },
    {
      id: "second-engineer-bulk",
      title: "Second Engineer",
      vesselType: "Bulk Carrier",
      salary: "$5,500 - $7,000/month",
      contractLength: "6 months",
      description: "Second Engineer required for Handymax bulk carrier. Valid STCW III/2 certificate, experience with MAN B&W or Wartsila engines, and good knowledge of ISM/ISPS codes required.",
    },
    {
      id: "third-officer-tanker",
      title: "Third Officer",
      vesselType: "Product Tanker",
      salary: "$3,500 - $4,500/month",
      contractLength: "5-6 months",
      description: "Third Officer position on modern product tanker fleet. STCW II/1 certificate, minimum 12 months sea service as Third Officer, and tanker familiarization course completion required.",
    },
  ];

  const handleApply = (vacancyTitle: string) => {
    setSelectedVacancy(vacancyTitle);
    setFormData({ ...formData, rank: vacancyTitle });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Vacancy Application Submitted:", {
      ...formData,
      vacancy: selectedVacancy,
    });

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setSelectedVacancy(null);
      setFormData({
        fullName: "",
        rank: "",
        email: "",
        phone: "",
        nationality: "",
        experience: "",
        message: "",
        gdprConsent: false,
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen pb-16 relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${marineOfficer})` }}
      />
      <div className="fixed inset-0 bg-black/40 z-0" />

      {/* ═══════════ HERO ═══════════ */}
      <section className="py-24 pt-32 relative flex items-center z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-animate">
          <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[400px] flex items-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroPhoto})` }}
            />
            {/* Elegant Gradient Overlays for Text Legibility and Aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20 backdrop-blur-none" />
            <div className="absolute inset-0 bg-emerald-900/20 mix-blend-color" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_40%)]" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-medium text-emerald-50 tracking-wider uppercase">Now Hiring</span>
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg tracking-tight" data-testid="heading-vacancies">
                Current Vacancies
              </h1>
              <p className="text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 text-white/90 drop-shadow-md">
                Join our partner fleets on tanker and bulk carrier vessels
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vacancies.map((vacancy) => (
              <VacancyCard
                key={vacancy.id}
                title={vacancy.title}
                vesselType={vacancy.vesselType}
                salary={vacancy.salary}
                contractLength={vacancy.contractLength}
                description={vacancy.description}
                onApply={() => handleApply(vacancy.title)}
              />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedVacancy !== null && !showSuccess} onOpenChange={(open) => !open && setSelectedVacancy(null)}>
        <DialogContent
          overlayClassName="bg-slate-950/65 backdrop-blur-sm"
          className="max-w-2xl max-h-[90vh] overflow-y-auto border-cyan-500/25 maritime-gradient shadow-xl shadow-cyan-950/10 dark:border-cyan-500/20 dark:shadow-cyan-950/30 [&_label]:text-foreground/90 [&_input]:border-cyan-500/25 [&_input]:bg-white/85 [&_input]:focus-visible:ring-cyan-500/40 dark:[&_input]:border-cyan-500/35 dark:[&_input]:bg-slate-950/45 dark:[&_input]:focus-visible:ring-cyan-400/35 [&_textarea]:border-cyan-500/25 [&_textarea]:bg-white/85 [&_textarea]:focus-visible:ring-cyan-500/40 dark:[&_textarea]:border-cyan-500/35 dark:[&_textarea]:bg-slate-950/45 dark:[&_textarea]:focus-visible:ring-cyan-400/35"
          data-testid="dialog-vacancy-application"
        >
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-teal-700 dark:from-cyan-300 dark:to-teal-300">
              Apply for {selectedVacancy}
            </DialogTitle>
            <DialogDescription className="text-slate-600 dark:text-slate-300">
              Please fill out the application form below. We'll review your profile and contact you if you're a good fit.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                data-testid="input-full-name"
              />
            </div>

            <div>
              <Label htmlFor="rank">Rank Applying For *</Label>
              <Input
                id="rank"
                required
                value={formData.rank}
                onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                data-testid="input-rank"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                data-testid="input-email"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone / Messaging Contact</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                data-testid="input-phone"
              />
            </div>

            <div>
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                data-testid="input-nationality"
              />
            </div>

            <div>
              <Label htmlFor="experience">Years of Experience in Rank</Label>
              <Input
                id="experience"
                type="number"
                min="0"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                data-testid="input-experience"
              />
            </div>

            <div>
              <Label htmlFor="message">Message / Link to Online CV</Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Add any additional information or a link to your online CV/resume"
                data-testid="textarea-message"
              />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="gdpr"
                required
                checked={formData.gdprConsent}
                onCheckedChange={(checked) => setFormData({ ...formData, gdprConsent: checked as boolean })}
                data-testid="checkbox-gdpr"
              />
              <Label htmlFor="gdpr" className="text-sm leading-tight cursor-pointer text-muted-foreground">
                I consent to AURA SEA storing and processing my personal data for recruitment purposes in accordance with the{" "}
                <Link href="/privacy"><span className="text-cyan-700 underline-offset-2 hover:underline dark:text-cyan-400">Privacy Policy</span></Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] hover:shadow-lg hover:shadow-cyan-500/20"
              data-testid="button-submit-application"
            >
              Submit Application
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent
          overlayClassName="bg-slate-950/65 backdrop-blur-sm"
          className="max-w-md border-teal-500/25 bg-white/92 shadow-xl shadow-teal-950/10 backdrop-blur-xl dark:border-teal-500/20 dark:bg-slate-950/90"
          data-testid="dialog-success"
        >
          <div className="text-center py-6">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-teal-600 dark:text-teal-400" />
            <h3 className="font-headline text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-teal-700 dark:from-cyan-300 dark:to-teal-300">
              Thank you for your submission
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              We've received your application and will review it shortly. If you're a good match, we'll contact you via email.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
