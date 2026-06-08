import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/raw-fitness-logo.png.asset.json";
import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Dumbbell,
  Flame,
  Bike,
  Activity,
  Apple,
  UserCheck,
  Waves,
  HeartPulse,
  Music,
  Clock,
  CheckCircle2,
  Thermometer,
  Shield,
  Sparkles,
  Users,
  Menu,
  X,
} from "lucide-react";

const PHONE = "+919739340008";
const PHONE_DISPLAY = "+91 97393 40008";
const TEL = `tel:${PHONE}`;
const WA = `https://wa.me/919739340008`;
const MAPS = "https://www.google.com/maps/search/?api=1&query=Raw+Fitness+Rajajinagar+Bengaluru";
const ADDRESS =
  "Raw Fitness, 26/1, 1st Main Rd, Dr Rajkumar Rd, Above Triumph Bike Showroom, E Block, Subramanyanagar, Rajajinagar, Bengaluru, Karnataka 560010";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RAW FITNESS Rajajinagar | Best Gym in Rajajinagar Bengaluru" },
      {
        name: "description",
        content:
          "RAW FITNESS is a top-rated fitness center in Rajajinagar, Bengaluru offering personal training, CrossFit, HIIT workouts, yoga, Zumba, nutrition consulting, sauna facilities, and more.",
      },
      { property: "og:title", content: "RAW FITNESS Rajajinagar | Best Gym in Rajajinagar" },
      {
        property: "og:description",
        content:
          "Top-rated gym in Rajajinagar. Expert trainers, premium equipment, sauna, CrossFit, HIIT, Yoga & more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logoAsset.url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: "RAW FITNESS",
          image: logoAsset.url,
          telephone: PHONE,
          address: {
            "@type": "PostalAddress",
            streetAddress: "26/1, 1st Main Rd, Dr Rajkumar Rd, Above Triumph Bike Showroom, E Block, Subramanyanagar",
            addressLocality: "Rajajinagar, Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560010",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "35" },
          openingHours: "Mo-Su 05:00-22:30",
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Dumbbell, title: "Personal Training", desc: "1-on-1 coaching tailored to your goals." },
  { icon: Flame, title: "CrossFit", desc: "High-intensity functional training." },
  { icon: Activity, title: "HIIT Classes", desc: "Burn fat fast with explosive workouts." },
  { icon: HeartPulse, title: "Aerobics", desc: "Cardio sessions to boost endurance." },
  { icon: Bike, title: "Cycling", desc: "Indoor cycling for power and stamina." },
  { icon: Music, title: "Zumba", desc: "Dance your way to fitness." },
  { icon: Sparkles, title: "Yoga Classes", desc: "Flexibility, balance & mindfulness." },
  { icon: Apple, title: "Nutrition Consulting", desc: "Custom diet plans for real results." },
  { icon: Waves, title: "Sauna", desc: "Recover & detox in our premium sauna." },
];

const whyUs = [
  { icon: Dumbbell, title: "State-of-the-Art Equipment" },
  { icon: Shield, title: "Clean & Maintained Facility" },
  { icon: Flame, title: "High-Energy Atmosphere" },
  { icon: Users, title: "Friendly Environment" },
  { icon: UserCheck, title: "Knowledgeable Trainers" },
  { icon: HeartPulse, title: "Supportive Coaching" },
  { icon: Waves, title: "Sauna Facility" },
  { icon: MapPin, title: "Convenient Rajajinagar Location" },
];

const reviews = [
  { text: "Wide variety of equipment and always well-maintained.", name: "Member Review" },
  { text: "Clean environment with a positive, motivating atmosphere.", name: "Member Review" },
  { text: "Trainers are super helpful and management is very friendly.", name: "Member Review" },
];

const goals = ["Weight Loss", "Muscle Gain", "Strength Training", "General Fitness", "Athletic Performance", "Other"];

function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="RAW FITNESS - Best Gym in Rajajinagar logo"
      className={className}
      loading="eager"
    />
  );
}

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <Logo className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-[0_0_12px_oklch(0.78_0.22_145/0.4)]" />
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl sm:text-2xl md:text-3xl tracking-wider">
          <span className="text-primary">RAW</span> <span className="text-foreground">FITNESS</span>
        </span>
        <span className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase">
          Best Gym in Rajajinagar
        </span>
      </div>
    </a>
  );
}

function Index() {
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", goal: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, "").replace(/^91/, "")))
      e.phone = "Enter a valid Indian mobile number";
    if (!form.goal) e.goal = "Please select a goal";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = `Hello RAW FITNESS,%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AGoal: ${encodeURIComponent(form.goal)}%0AMessage: ${encodeURIComponent(form.message || "-")}%0A%0AI would like to book a free trial session.`;
    setSuccess(true);
    window.open(`${WA}?text=${msg}`, "_blank");
  };

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Us" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div id="top" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <Brand />
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <a href={TEL} className="btn-primary-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border active:bg-secondary touch-manipulation"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
          >
            {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {menu && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenu(false)}
                  className="rounded-lg px-4 py-3.5 text-base font-medium hover:bg-secondary active:bg-secondary/80 touch-manipulation"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a href={TEL} className="btn-primary-glow inline-flex items-center justify-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold touch-manipulation">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/5 px-4 py-3.5 text-sm font-semibold text-primary touch-manipulation">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(oklch(0.78 0.22 145) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-32">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Text side */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                <Star className="h-3.5 w-3.5 fill-primary" /> 4.9 ★ Rated by 35+ members
              </div>
              <h1 className="mt-5 font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
                TRAIN HARD.
                <br />
                <span className="text-primary text-glow">TRANSFORM</span> FASTER.
              </h1>
              <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground">
                RAW FITNESS is one of Rajajinagar's top-rated gyms, offering expert trainers, premium equipment, and a motivating environment to help you achieve your fitness goals.
              </p>

              {/* Mobile: 2-col CTA grid */}
              <div className="mt-7 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
                <a href="#contact" className="btn-primary-glow col-span-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide touch-manipulation">
                  Book a Free Trial
                </a>
                <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/5 px-4 py-3.5 text-sm font-semibold text-primary hover:bg-primary/15 transition touch-manipulation">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3.5 text-sm font-semibold hover:border-primary/60 transition touch-manipulation">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href={MAPS} target="_blank" rel="noreferrer" className="col-span-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3.5 text-sm font-semibold hover:border-primary/60 transition touch-manipulation sm:col-span-1">
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5"><Thermometer className="h-4 w-4 text-primary shrink-0" /> Sauna Available</div>
                <div className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary shrink-0" /> Open · Closes 10:30 PM</div>
                <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary shrink-0" /> Rajajinagar, Bengaluru</div>
              </div>
            </div>

            {/* Logo card — hidden on small mobile, shown from sm up */}
            <div className="relative hidden sm:block">
              <div className="absolute -inset-10 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative rounded-3xl border border-border bg-card/60 p-8 md:p-10 backdrop-blur">
                <Logo className="mx-auto h-56 w-56 sm:h-72 sm:w-72 md:h-96 md:w-96 object-contain drop-shadow-[0_0_60px_oklch(0.78_0.22_145/0.45)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="section-pad mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Why RAW FITNESS</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Built For Real Results</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {whyUs.map((w) => (
            <div key={w.title} className="card-premium p-4 sm:p-6 text-center">
              <div className="mx-auto inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <w.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-xl md:text-2xl leading-tight">{w.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-pad bg-card/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Services</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Train Your Way</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">From CrossFit and HIIT to Yoga and Sauna recovery — everything you need under one roof.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card-premium p-5 sm:p-7">
                <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-lg shadow-primary/30">
                  <s.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <h3 className="mt-4 sm:mt-5 font-display text-xl sm:text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">About Us</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">A Trusted Fitness Destination In Rajajinagar</h2>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground">
              At RAW FITNESS, we believe transformation is built on consistency, discipline, and the right environment. Our gym in Rajajinagar combines premium equipment, expert coaches, and a relentlessly motivating atmosphere to help every member push past limits.
            </p>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              Whether you're starting your fitness journey or chasing peak performance, our trainers craft a path that fits your body, goals, and lifestyle — backed by nutrition guidance and recovery facilities like our premium sauna.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-border p-3 sm:p-4 text-center">
                <div className="font-display text-2xl sm:text-3xl text-primary">4.9★</div>
                <div className="text-xs text-muted-foreground">Member Rating</div>
              </div>
              <div className="rounded-xl border border-border p-3 sm:p-4 text-center">
                <div className="font-display text-2xl sm:text-3xl text-primary">35+</div>
                <div className="text-xs text-muted-foreground">Reviews</div>
              </div>
              <div className="rounded-xl border border-border p-3 sm:p-4 text-center">
                <div className="font-display text-2xl sm:text-3xl text-primary">9+</div>
                <div className="text-xs text-muted-foreground">Programs</div>
              </div>
            </div>
          </div>
          <div className="relative hidden sm:block">
            <div className="absolute -inset-6 rounded-3xl bg-primary/15 blur-3xl" />
            <div className="relative rounded-3xl border border-border bg-card p-8 sm:p-10">
              <Logo className="mx-auto h-48 sm:h-64 w-auto object-contain" />
              <p className="mt-6 text-center font-display text-lg sm:text-2xl tracking-wide">STRENGTH · DISCIPLINE · TRANSFORMATION</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section-pad bg-card/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Member Reviews</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">What Our Members Say</h2>
            <div className="mt-4 inline-flex items-center gap-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />)}
              <span className="ml-2 text-sm sm:text-base font-semibold">4.9 / 5 · 35 Reviews</span>
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="card-premium p-5 sm:p-7">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-primary text-primary" />)}
                </div>
                <p className="mt-4 text-sm sm:text-base text-foreground">"{r.text}"</p>
                <p className="mt-4 text-sm text-muted-foreground">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="section-pad mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Visit Us</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Find RAW FITNESS</h2>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground">{ADDRESS}</p>
            <div className="mt-5 space-y-3 text-sm sm:text-base">
              <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary shrink-0" /> Open · Closes 10:30 PM</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary shrink-0" /> <a href={TEL} className="hover:text-primary">{PHONE_DISPLAY}</a></div>
              <div className="flex items-center gap-3"><Waves className="h-5 w-5 text-primary shrink-0" /> Sauna Available</div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={MAPS} target="_blank" rel="noreferrer" className="btn-primary-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold touch-manipulation">
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a href={TEL} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:border-primary/60 touch-manipulation">
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border h-[280px] sm:h-[360px] lg:h-[400px]">
            <iframe
              title="RAW FITNESS Location"
              src="https://www.google.com/maps?q=Raw+Fitness+Rajajinagar+Bengaluru&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* CONTACT / TRIAL */}
      <section id="contact" className="section-pad bg-card/40">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Book A Trial</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">Start Your Transformation</h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">Fill out the form and we'll get you started with a free trial session.</p>
          </div>
          {success && (
            <div className="mt-8 rounded-xl border border-primary/40 bg-primary/10 p-5 text-center">
              <CheckCircle2 className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-2 text-sm sm:text-base font-semibold">Thank you! Your trial request has been received. Our team will contact you shortly.</p>
            </div>
          )}
          <form onSubmit={submit} className="mt-8 space-y-4">
            <div>
              <label className="text-sm font-medium">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-3.5 text-base outline-none focus:border-primary"
                placeholder="Your full name"
                autoComplete="name"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Phone Number *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-3.5 text-base outline-none focus:border-primary"
                placeholder="10-digit mobile number"
                autoComplete="tel"
                inputMode="numeric"
              />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Fitness Goal *</label>
              <select
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
                className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-3.5 text-base outline-none focus:border-primary"
              >
                <option value="">Select your goal</option>
                {goals.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
              {errors.goal && <p className="mt-1 text-xs text-destructive">{errors.goal}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="mt-2 w-full rounded-lg border border-border bg-input/40 px-4 py-3.5 text-base outline-none focus:border-primary resize-none"
                placeholder="Tell us anything else (optional)"
              />
            </div>
            <button type="submit" className="btn-red-glow w-full rounded-full px-6 py-4 text-base font-bold uppercase tracking-wide touch-manipulation">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 grid gap-7 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <Brand />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              The premium fitness destination in Rajajinagar. Train. Transform. Thrive.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href={TEL} className="hover:text-primary">{PHONE_DISPLAY}</a></li>
              <li><a href={WA} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp Us</a></li>
              <li className="text-xs leading-relaxed">{ADDRESS}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl">Hours</h4>
            <p className="mt-4 text-sm text-muted-foreground">Open Daily<br />Closes 10:30 PM</p>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} RAW FITNESS Rajajinagar. All rights reserved.
        </div>
      </footer>

      {/* Floating mobile CTAs */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 md:hidden">
        <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] touch-manipulation active:scale-95 transition-transform">
          <MessageCircle className="h-6 w-6" />
        </a>
        <a href={TEL} aria-label="Call" className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg touch-manipulation active:scale-95 transition-transform">
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
