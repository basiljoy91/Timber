"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Armchair,
  ArrowRight,
  BadgeCheck,
  CirclePlay,
  LampFloor,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { FooterChipLink } from "@/components/ui/footer-chip-link";
import {
  featuredCategories,
  featuredProducts,
  heroChips,
  navItems,
  roomShowcase,
  studioStats,
  testimonials,
  whyChooseUs,
} from "@/data/home-content";

gsap.registerPlugin(useGSAP);

const heroHeadlineLines = [
  "Make your interior feel",
  "collected, modern,",
  "and unforgettable.",
];

export function HomePage() {
  const heroRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(
          [
            ".hero-brand",
            ".hero-nav",
            ".hero-cta",
            ".hero-line-inner",
            ".hero-copy",
            ".hero-pill",
            ".hero-stat",
            ".hero-mockup",
            ".hero-sofa",
            ".hero-float",
          ],
          {
            clearProps: "all",
            opacity: 1,
          },
        );
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from([".hero-brand", ".hero-nav", ".hero-cta"], {
          opacity: 0,
          y: -20,
          stagger: 0.08,
          duration: 0.7,
        })
        .from(
          ".hero-line-inner",
          {
            yPercent: 110,
            rotate: 2,
            stagger: 0.12,
            duration: 0.9,
          },
          "-=0.2",
        )
        .from(
          ".hero-copy",
          {
            opacity: 0,
            y: 26,
            duration: 0.7,
          },
          "-=0.42",
        )
        .from(
          ".hero-pill",
          {
            opacity: 0,
            scale: 0.84,
            y: 18,
            stagger: 0.08,
            duration: 0.45,
          },
          "-=0.3",
        )
        .from(
          ".hero-stat",
          {
            opacity: 0,
            y: 18,
            stagger: 0.08,
            duration: 0.5,
          },
          "-=0.18",
        )
        .from(
          ".hero-mockup",
          {
            opacity: 0,
            x: 54,
            y: 44,
            rotate: -1,
            duration: 1,
          },
          "-=0.58",
        )
        .from(
          ".hero-sofa",
          {
            scale: 1.08,
            duration: 1.15,
          },
          "-=0.75",
        )
        .from(
          ".hero-float",
          {
            opacity: 0,
            y: 28,
            x: 10,
            stagger: 0.1,
            duration: 0.7,
          },
          "-=0.55",
        );

      gsap.to(".hero-float-card", {
        y: -12,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.35,
      });

      gsap.to(".hero-float-pill", {
        y: -8,
        duration: 2.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-backdrop-card", {
        y: -14,
        rotate: 4,
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: heroRef },
  );

  return (
    <main className="relative overflow-clip pb-24">
      <header className="section-shell relative z-20 flex items-center justify-between py-6">
        <a href="#" className="hero-brand flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-lg font-black text-white shadow-[0_14px_34px_rgba(23,21,20,0.18)]">
            T
          </span>
          <div className="flex flex-col">
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              Timber
            </span>
            <span className="text-xs uppercase tracking-[0.24em] text-soft-ink">
              Furniture Studio
            </span>
          </div>
        </a>

        <nav className="hero-nav hidden items-center gap-8 rounded-full border border-white/60 bg-white/70 px-6 py-3 text-sm text-soft-ink shadow-[0_10px_28px_rgba(44,31,19,0.06)] backdrop-blur md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:-translate-y-0.5 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#products"
          className="hero-cta hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(23,21,20,0.16)] hover:-translate-y-0.5 hover:bg-[#2a2827] md:inline-flex"
        >
          Shop now
          <ArrowRight className="h-4 w-4" />
        </a>
      </header>

      <section
        ref={heroRef}
        className="section-shell relative grid items-center gap-14 pb-20 pt-6 lg:grid-cols-[0.92fr_1.08fr] lg:pb-28 lg:pt-10"
      >
        <div className="max-w-2xl">
          <div>
            <span className="eyebrow">
              <Sparkles className="h-4 w-4 text-brand" />
              Free Design Direction
            </span>
          </div>

          <h1 className="mt-8 max-w-xl font-display text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl lg:text-[5.6rem]">
            {heroHeadlineLines.map((line) => (
              <span
                key={line}
                className="block overflow-hidden leading-[0.95]"
              >
                <span className="hero-line-inner block">{line}</span>
              </span>
            ))}
          </h1>

          <p className="hero-copy mt-6 max-w-xl text-lg leading-8 text-soft-ink sm:text-xl">
            Timber is a motion-rich furniture showcase for premium pieces,
            tactile materials, and immersive shopping. The visual language stays
            minimal while every interaction feels carefully choreographed.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(23,21,20,0.15)] hover:-translate-y-1 hover:bg-[#2a2827]"
            >
              Explore categories
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/72 px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_14px_30px_rgba(42,28,13,0.08)] backdrop-blur hover:-translate-y-1 hover:bg-white"
            >
              <CirclePlay className="h-4 w-4 text-brand" />
              Watch the showroom
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroChips.map((chip) => (
              <span key={chip} className="hero-pill chip text-sm font-medium">
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {studioStats.map((stat) => (
              <div
                key={stat.label}
                className="hero-stat glass-panel rounded-[28px] px-5 py-5"
              >
                <div className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-soft-ink">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[700px] lg:h-[760px]">
          <div className="hero-backdrop-card glass-panel absolute inset-y-14 left-0 hidden w-[72%] rounded-[40px] rotate-6 lg:block" />

          <div className="hero-mockup absolute right-0 top-10 w-full max-w-[640px] origin-bottom-left rounded-[42px] border border-white/65 bg-[#17181b] p-6 text-white shadow-[0_40px_110px_rgba(26,18,10,0.22)] [transform:rotate(-8deg)]">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.26em] text-white/55">
              <span>Timber</span>
              <div className="hidden gap-4 md:flex">
                <span>Furniture</span>
                <span>Shop</span>
                <span>About</span>
                <span>Contact</span>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="max-w-lg font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                Make your interior more minimalistic and modern.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/68 md:text-base">
                Turn your room into a layered showroom with warm materials,
                intentional silhouettes, and a shopping experience that feels
                immersive from the first glance.
              </p>

              <div className="mt-6 flex items-center gap-3 rounded-full bg-white/10 p-2 pl-5 text-sm text-white/65 backdrop-blur">
                <Search className="h-4 w-4 text-brand-soft" />
                <span className="flex-1 truncate">
                  Search furniture, lighting, decor...
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-ink">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[34px] bg-[#25262a]">
              <div className="hero-sofa relative h-[340px]">
                <Image
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
                  alt="Warm luxury sofa in a styled living room"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.04)_38%,rgba(0,0,0,0.34)_100%)]" />
              <div className="absolute bottom-5 left-5 rounded-[22px] bg-white/14 px-4 py-3 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.2em] text-white/58">
                  Featured
                </div>
                <p className="mt-1 text-sm font-semibold text-white">
                  Soft suede collection
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                "Luxury facilities",
                "Affordable price",
                "Many choices",
              ].map((feature) => (
                <div
                  key={feature}
                  className="rounded-[22px] border border-white/8 bg-white/5 px-4 py-4"
                >
                  <h3 className="text-sm font-semibold text-white">{feature}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Crafted to support a premium browsing flow without visual
                    overload.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <article className="hero-float hero-float-card glass-panel absolute right-6 top-0 w-48 rounded-[30px] p-4">
            <div className="relative h-32 overflow-hidden rounded-[24px]">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                alt="Modern accent chair"
                fill
                sizes="192px"
                className="object-cover"
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-soft-ink">
                <span>Chair</span>
                <Star className="h-4 w-4 fill-brand text-brand" />
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.04em] text-ink">
                Nyantu Chair
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-ink">$921</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
                  <ShoppingBag className="h-4 w-4" />
                </span>
              </div>
            </div>
          </article>

          <article className="hero-float hero-float-card glass-panel absolute -left-2 bottom-16 max-w-[220px] rounded-[30px] p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-ink">
              <BadgeCheck className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
              Why choosing us
            </h3>
            <p className="mt-3 text-sm leading-6 text-soft-ink">
              Premium curation, warmer materials, and a layout designed to make
              every product feel considered.
            </p>
          </article>

          <div className="hero-float hero-float-pill absolute bottom-2 right-10 flex items-center gap-3 rounded-full border border-white/70 bg-white/76 px-5 py-3 text-sm font-medium text-ink shadow-[0_14px_30px_rgba(44,31,19,0.08)] backdrop-blur">
            <LampFloor className="h-4 w-4 text-brand" />
            Ambient lighting kits
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section-shell pb-8"
      >
        <div className="glass-panel rounded-[40px] px-7 py-8 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow">Why Timber Works</span>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                A premium landing page needs contrast, calm, and one strong idea
                per scroll moment.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-soft-ink">
              This foundation keeps the page airy and editorial so the future
              GSAP timelines have room to breathe instead of fighting clutter.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-white/70 bg-white/78 p-6 shadow-[0_18px_42px_rgba(42,28,13,0.06)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-ink">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-soft-ink">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="section-shell py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Featured Categories</span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              Build sections as curated rooms, not generic ecommerce rows.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-soft-ink">
            Each collection card can expand into a richer scroll scene with
            parallax products, hotspot details, and pinned storytelling.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredCategories.map((collection) => (
            <article
              key={collection.title}
              className="group glass-panel overflow-hidden rounded-[34px]"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.42)_100%)]" />
              </div>
              <div className="px-6 py-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                  Curated Scene
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
                  {collection.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-soft-ink">
                  {collection.description}
                </p>
                <a
                  href="#products"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  View category
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="section-shell py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Best Selling Products</span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              Product cards should feel tactile, quick to scan, and confident on
              hover.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Chair", "Beds", "Sofa", "Lamp"].map((tab, index) => (
              <span
                key={tab}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  index === 0
                    ? "bg-ink text-white"
                    : "border border-white/70 bg-white/72 text-soft-ink"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.name}
              className="group glass-panel overflow-hidden rounded-[32px]"
            >
              <div className="relative h-72 overflow-hidden bg-[#f3eadf]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 46vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/82 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-soft-ink backdrop-blur">
                  {product.category}
                </div>
              </div>
              <div className="px-5 py-5">
                <div className="flex items-center gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={`${product.name}-${starIndex}`}
                      className="h-4 w-4 fill-brand text-brand"
                    />
                  ))}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                  {product.name}
                </h3>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-semibold text-ink">
                    {product.price}
                  </span>
                  <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-[0_12px_28px_rgba(23,21,20,0.14)] hover:-translate-y-0.5 hover:bg-[#2a2827]">
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="shop" className="section-shell py-14">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div
            className="glass-panel overflow-hidden rounded-[36px] p-6"
          >
            <div className="relative h-[420px] overflow-hidden rounded-[30px]">
              <Image
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
                alt="Premium interior lounge composition"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.16)_48%,rgba(0,0,0,0.40)_100%)]" />
              <div className="absolute bottom-5 left-5 max-w-xs rounded-[28px] bg-white/18 p-5 backdrop-blur">
                <div className="flex items-center gap-3 text-white">
                  <Armchair className="h-5 w-5 text-brand-soft" />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
                    Signature room
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/82">
                  Use one oversized environment shot to bridge product detail and
                  emotional storytelling.
                </p>
              </div>
            </div>
          </div>

          <div
            className="glass-panel rounded-[36px] p-7 lg:p-9"
          >
            <span className="eyebrow">Room Showcase</span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              The next layer is scroll-driven storytelling.
            </h2>
            <p className="mt-5 text-base leading-8 text-soft-ink">
              With the brand direction in place, the next pass can add pinned
              transitions, GSAP timelines, and product parallax without
              reworking the layout system.
            </p>
            <div className="mt-8 space-y-4">
              {roomShowcase.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-white/70 bg-white/80 p-5"
                >
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-soft-ink">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Testimonials</span>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              Social proof should feel as curated as the furniture itself.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-soft-ink">
            This section gives the journey a trust-building pause before the
            final conversion moment.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="glass-panel rounded-[32px] p-6"
            >
              <div className="flex items-center gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={`${item.name}-${starIndex}`}
                    className="h-4 w-4 fill-brand text-brand"
                  />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-soft-ink">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-8">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-soft-ink">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="section-shell pt-10"
      >
        <div className="rounded-[40px] bg-ink px-7 py-10 text-white shadow-[0_32px_90px_rgba(23,21,20,0.18)] lg:px-12 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <span className="eyebrow border-white/10 bg-white/6 text-white/70">
                CTA / Newsletter
              </span>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Stay close to new launches, showroom drops, and design stories.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="max-w-xl text-base leading-8 text-white/68">
                This block can act as the final conversion moment for newsletter
                signup, early access drops, or interior consultation leads.
              </p>
              <div className="flex flex-col gap-3 rounded-[28px] border border-white/10 bg-white/6 p-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email for early access"
                  className="h-14 flex-1 rounded-[20px] border border-white/10 bg-white/8 px-5 text-sm text-white outline-none placeholder:text-white/38"
                />
                <button className="inline-flex h-14 items-center justify-center gap-2 rounded-[20px] bg-brand px-6 text-sm font-semibold text-ink hover:bg-[#d99655]">
                  Join newsletter
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#categories"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-ink hover:-translate-y-1 hover:bg-[#d99655]"
                >
                  Browse categories
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 px-6 py-3.5 text-sm font-semibold text-white/82 hover:-translate-y-1 hover:bg-white/6"
                >
                  Shop best sellers
                  <ShoppingBag className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-shell py-10">
        <div className="flex flex-col gap-6 rounded-[34px] border border-white/70 bg-white/72 px-6 py-6 shadow-[0_18px_42px_rgba(42,28,13,0.06)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
              Timber
            </div>
            <p className="mt-2 max-w-md text-sm leading-7 text-soft-ink">
              A premium furniture showcase built for editorial storytelling,
              curated commerce, and animation-led product discovery.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-soft-ink">
            <FooterChipLink href="#about" label="Why Choose Us" />
            <FooterChipLink href="#categories" label="Featured Categories" />
            <FooterChipLink href="#products" label="Best Sellers" />
            <FooterChipLink href="#contact" label="Newsletter" />
          </div>
        </div>
      </footer>
    </main>
  );
}
