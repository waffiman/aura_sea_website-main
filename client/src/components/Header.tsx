import { Link, useLocation } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/ship-owners", label: "For Ship-Owners" },
    { href: "/seafarers", label: "For Seafarers" },
    { href: "/vacancies", label: "Vacancies" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-card border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center cursor-pointer">
              <Logo />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "header-nav-ghost text-base font-semibold border-0",
                  location === link.href
                    ? "bg-transparent text-white hover:bg-transparent hover:text-cyan-200 underline underline-offset-8 decoration-white/80 hover:decoration-cyan-200/90"
                    : "text-white/90 hover:text-cyan-200"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              data-testid="button-contact-cta"
              className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "font-medium")}
            >
              Contact Us
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="header-nav-ghost md:hidden text-white/90 hover:text-cyan-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div
            className={`md:hidden pb-4 space-y-2 rounded-xl p-2 animate-in fade-in slide-in-from-top-4 duration-300 ease-out ${
              isScrolled
                ? "glass-card border border-border shadow-md"
                : "border border-white/15 bg-slate-950/75 backdrop-blur-xl"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "header-nav-ghost w-full justify-start text-base font-semibold border-0",
                  location === link.href
                    ? "bg-transparent text-white hover:bg-transparent hover:text-cyan-200 underline underline-offset-8 decoration-white/80 hover:decoration-cyan-200/90"
                    : "text-white/90 hover:text-cyan-200"
                )}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "secondary" }), "w-full font-medium")}
              onClick={() => setMobileMenuOpen(false)}
              data-testid="mobile-button-contact"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
