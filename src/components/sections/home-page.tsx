"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  featuredProducts,
  heroChips,
  navItems,
  productCategories,
  roomHotspots,
  roomShowcase,
  studioStats,
  testimonials,
  valueProps,
  whyChooseUs,
} from "@/data/home-content";
import { motionSystem } from "@/lib/animations/motion-system";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const heroHeadlineLines = [
  "Make your interior feel",
  "collected, modern,",
  "and unforgettable.",
];

export function HomePage() {
  const pageRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [showLoader, setShowLoader] = useState(true);
  const [activeCategory, setActiveCategory] = useState("Chair");
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const filteredProducts = featuredProducts.filter(
    (product) => product.type === activeCategory,
  );
  const activeProduct = filteredProducts.find(
    (product) => product.id === activeProductId,
  );
  const spotlightProductId = activeProduct?.id ?? filteredProducts[0]?.id ?? null;
  const hookProducts = featuredProducts.filter((product) =>
    ["atelier-sofa", "forma-chair", "mori-lamp"].includes(product.id),
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeout = window.setTimeout(
      () => setShowLoader(false),
      reduceMotion ? 120 : 820,
    );

    return () => window.clearTimeout(timeout);
  }, []);

  useGSAP(
    () => {
      const cleanups: Array<() => void> = [];
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
            ".scrub-heading",
            ".scrub-copy",
            ".scrub-media",
            ".value-prop",
            ".value-prop-icon",
            ".product-card",
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
          duration: motionSystem.pageLoad.fast,
        })
        .from(
          ".hero-line-inner",
          {
            yPercent: 110,
            rotate: 2,
            stagger: 0.12,
            duration: motionSystem.pageLoad.base,
          },
          "-=0.2",
        )
        .from(
          ".hero-copy",
          {
            opacity: 0,
            y: 26,
            duration: motionSystem.pageLoad.fast,
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
            duration: motionSystem.sectionReveal.fast,
          },
          "-=0.3",
        )
        .from(
          ".hero-stat",
          {
            opacity: 0,
            y: 18,
            stagger: 0.08,
            duration: motionSystem.sectionReveal.fast,
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
            duration: motionSystem.pageLoad.long,
          },
          "-=0.58",
        )
        .from(
          ".hero-sofa",
          {
            scale: 1.08,
            duration: motionSystem.pageLoad.long,
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
            duration: motionSystem.pageLoad.fast,
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

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const heroPin = gsap.timeline({
            scrollTrigger: {
              trigger: ".hero-stage",
              start: "top top",
              end: "+=140%",
              scrub: motionSystem.scrub.smooth,
              pin: true,
            },
          });

          heroPin
            .to(".hero-mockup", {
              y: -32,
              rotate: -12,
            })
            .to(
              ".hero-backdrop-card",
              {
                y: -64,
                rotate: 8,
              },
              0,
            )
            .to(
              ".hero-sofa",
              {
                scale: 1.12,
                yPercent: -4,
              },
              0,
            )
            .to(
              ".hero-plant",
              {
                y: -110,
                x: 24,
              },
              0,
            )
            .to(
              ".hero-shape-left",
              {
                y: -70,
                x: -18,
              },
              0,
            )
            .to(
              ".hero-shape-right",
              {
                y: -95,
                x: 22,
              },
              0,
            )
            .to(
              ".hero-float-card-right",
              {
                y: -56,
                x: 40,
              },
              0,
            )
            .to(
              ".hero-float-card-left",
              {
                y: 48,
                x: -18,
              },
              0,
            )
            .to(
              ".hero-float-pill",
              {
                y: -42,
                x: 14,
              },
              0,
            );

          const categoryPanels = gsap.utils.toArray<HTMLElement>(".category-panel");
          if (categoryPanels.length > 1) {
            gsap.to(categoryPanels, {
              xPercent: -100 * (categoryPanels.length - 1),
              ease: "none",
              scrollTrigger: {
                trigger: ".categories-pin",
                start: "top top",
                end: () => `+=${window.innerWidth * (categoryPanels.length - 1)}`,
                pin: true,
                scrub: motionSystem.scrub.slow,
                snap: 1 / (categoryPanels.length - 1),
                invalidateOnRefresh: true,
              },
            });
          }
        },
      });

      if (!reduceMotion && window.innerWidth >= 1024) {
        gsap.to(".parallax-slow", {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-stage",
            start: "top bottom",
            end: "bottom top",
            scrub: motionSystem.scrub.smooth,
          },
        });

        gsap.to(".parallax-fast", {
          yPercent: -24,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-stage",
            start: "top bottom",
            end: "bottom top",
            scrub: motionSystem.scrub.slow,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>(".scrub-section").forEach((section) => {
        const heading = section.querySelector(".scrub-heading");
        const copy = section.querySelector(".scrub-copy");
        const media = section.querySelector(".scrub-media");

        if (heading) {
          gsap.fromTo(
            heading,
            { y: 36, opacity: 0.18 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                end: "top 22%",
                scrub: motionSystem.scrub.smooth,
              },
            },
          );
        }

        if (copy) {
          gsap.fromTo(
            copy,
            { y: 28, opacity: 0.15 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "top 28%",
                scrub: motionSystem.scrub.smooth,
              },
            },
          );
        }

        if (media) {
          gsap.fromTo(
            media,
            { y: 42, scale: 0.94, opacity: 0.28 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 18%",
                scrub: motionSystem.scrub.slow,
              },
            },
          );
        }
      });

      gsap.utils.toArray<HTMLElement>(".product-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 56,
            scale: 0.92,
            opacity: 0.22,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: motionSystem.sectionReveal.long,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.04,
          },
        );
      });

      gsap.fromTo(
        ".value-prop",
        {
          y: 22,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: motionSystem.sectionReveal.base,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".value-strip",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".value-prop-icon",
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: motionSystem.sectionReveal.fast,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".value-strip",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.to(".hotspot-ring", {
        scale: 1.6,
        opacity: 0,
        duration: 1.8,
        repeat: -1,
        ease: "power1.out",
        stagger: 0.28,
      });

      gsap.to(".hotspot-anchor", {
        y: -6,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.22,
      });

      if (!reduceMotion) {
        gsap.utils.toArray<HTMLElement>(".count-up").forEach((counter) => {
          const end = Number(counter.dataset.target ?? "0");
          const decimals = Number(counter.dataset.decimals ?? "0");
          const suffix = counter.dataset.suffix ?? "";
          const value = { current: 0 };

          gsap.to(value, {
            current: end,
            duration: motionSystem.pageLoad.long,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              counter.textContent = `${value.current.toFixed(decimals)}${suffix}`;
            },
          });
        });
      }

      const magneticButtons = gsap.utils.toArray<HTMLElement>(".magnetic-btn");
      magneticButtons.forEach((button) => {
        const inner = button.querySelector<HTMLElement>(".magnetic-inner") ?? button;

        const handleMove = (event: MouseEvent) => {
          if (window.innerWidth < 768 || reduceMotion) return;
          const bounds = button.getBoundingClientRect();
          const x = event.clientX - bounds.left - bounds.width / 2;
          const y = event.clientY - bounds.top - bounds.height / 2;

          gsap.to(inner, {
            x: x * 0.18,
            y: y * 0.22,
            duration: motionSystem.hover.base,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(inner, {
            x: 0,
            y: 0,
            duration: motionSystem.hover.slow,
            ease: "power3.out",
          });
        };

        button.addEventListener("mousemove", handleMove);
        button.addEventListener("mouseleave", handleLeave);
        cleanups.push(() => {
          button.removeEventListener("mousemove", handleMove);
          button.removeEventListener("mouseleave", handleLeave);
        });
      });

      const tiltCards = gsap.utils.toArray<HTMLElement>(".tilt-card");
      tiltCards.forEach((card) => {
        const media = card.querySelector<HTMLElement>(".tilt-media") ?? card;

        const handleMove = (event: MouseEvent) => {
          if (window.innerWidth < 768 || reduceMotion) return;
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width;
          const y = (event.clientY - bounds.top) / bounds.height;
          const rotateY = (x - 0.5) * 10;
          const rotateX = (0.5 - y) * 10;

          gsap.to(card, {
            rotateY,
            rotateX,
            y: -6,
            transformPerspective: 1000,
            transformOrigin: "center",
            duration: motionSystem.hover.base,
            ease: "power2.out",
          });

          gsap.to(media, {
            x: (x - 0.5) * -12,
            y: (y - 0.5) * -12,
            scale: 1.06,
            duration: motionSystem.hover.slow,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            duration: motionSystem.sectionReveal.fast,
            ease: "power3.out",
          });
          gsap.to(media, {
            x: 0,
            y: 0,
            scale: 1,
            duration: motionSystem.hover.slow,
            ease: "power3.out",
          });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseleave", handleLeave);
        });
      });

      const premiumSections = gsap.utils.toArray<HTMLElement>(".premium-glow");
      premiumSections.forEach((section) => {
        const handleMove = (event: MouseEvent) => {
          const bounds = section.getBoundingClientRect();
          section.style.setProperty("--glow-x", `${event.clientX - bounds.left}px`);
          section.style.setProperty("--glow-y", `${event.clientY - bounds.top}px`);
        };

        const handleLeave = () => {
          section.style.setProperty("--glow-x", "50%");
          section.style.setProperty("--glow-y", "50%");
        };

        section.addEventListener("mousemove", handleMove);
        section.addEventListener("mouseleave", handleLeave);
        cleanups.push(() => {
          section.removeEventListener("mousemove", handleMove);
          section.removeEventListener("mouseleave", handleLeave);
        });
      });

      return () => {
        cleanups.forEach((cleanup) => cleanup());
      };
    },
    { scope: pageRef },
  );

  const valuePropIcons: Record<string, ReactNode> = {
    armchair: <Armchair className="h-5 w-5" />,
    lamp: <LampFloor className="h-5 w-5" />,
    badge: <BadgeCheck className="h-5 w-5" />,
    sparkles: <Sparkles className="h-5 w-5" />,
  };

  return (
    <main ref={pageRef} className="relative overflow-clip pb-24">
      <a
        href="#main-content"
        className="skip-link absolute left-4 top-4 z-[70] rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white"
      >
        Skip to content
      </a>
      <div
        className={`pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(221,188,147,0.5),_rgba(248,244,238,0.98)_52%,_rgba(248,244,238,1)_100%)] transition-opacity duration-500 ${
          showLoader ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div className="loader-shell relative overflow-hidden rounded-[32px] border border-white/80 bg-white/72 px-8 py-7 shadow-[0_22px_64px_rgba(41,27,14,0.12)] backdrop-blur-md">
          <div className="loader-shimmer absolute inset-0 rounded-[32px]" />
          <div className="relative flex items-center gap-4">
            <span className="brand-mark flex h-14 w-14 items-center justify-center rounded-full bg-ink text-xl font-black text-white">
              T
            </span>
            <div>
              <div className="font-display text-2xl font-semibold tracking-[-0.05em] text-ink">
                Timber
              </div>
              <div className="text-xs uppercase tracking-[0.24em] text-soft-ink">
                Curated interiors loading
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="section-shell relative z-20 flex items-center justify-between py-6">
        <a href="#" className="hero-brand flex items-center gap-3">
          <span className="brand-mark flex h-12 w-12 items-center justify-center rounded-full bg-ink text-lg font-black text-white shadow-[0_14px_34px_rgba(23,21,20,0.18)]">
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

        <nav
          aria-label="Primary"
          className="hero-nav hidden items-center gap-8 rounded-full border border-white/60 bg-white/70 px-6 py-3 text-sm text-soft-ink shadow-[0_10px_28px_rgba(44,31,19,0.06)] backdrop-blur md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link hover:-translate-y-0.5 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#products"
          className="hero-cta magnetic-btn hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(23,21,20,0.16)] hover:-translate-y-0.5 hover:bg-[#2a2827] md:inline-flex"
        >
          <span className="magnetic-inner inline-flex items-center gap-2">
            Shop now
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </header>

      <section
        id="main-content"
        ref={heroRef}
        className="hero-stage section-transition section-shell relative grid items-center gap-14 pb-20 pt-6 lg:grid-cols-[0.92fr_1.08fr] lg:pb-28 lg:pt-10"
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
              className="magnetic-btn inline-flex items-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(23,21,20,0.15)] hover:-translate-y-1 hover:bg-[#2a2827]"
            >
              <span className="magnetic-inner inline-flex items-center gap-2">
                Explore categories
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#about"
              className="magnetic-btn inline-flex items-center rounded-full border border-white/70 bg-white/72 px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_14px_30px_rgba(42,28,13,0.08)] backdrop-blur hover:-translate-y-1 hover:bg-white"
            >
              <span className="magnetic-inner inline-flex items-center gap-2">
                <CirclePlay className="h-4 w-4 text-brand" />
                Watch the showroom
              </span>
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
                  <span
                    className="count-up"
                    data-target={stat.value.replace(/[^0-9.]/g, "")}
                    data-decimals={stat.value.includes(".") ? "1" : "0"}
                    data-suffix={stat.value.replace(/[0-9.]/g, "")}
                  >
                    {stat.value}
                  </span>
                </div>
                <p className="mt-2 text-sm text-soft-ink">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[700px] lg:h-[760px]">
          <div className="hero-shape-left parallax-slow absolute left-10 top-6 hidden h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(201,133,67,0.26)_0%,rgba(201,133,67,0)_72%)] lg:block" />
          <div className="hero-shape-right parallax-fast absolute bottom-24 right-4 hidden h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.7)_0%,rgba(255,255,255,0)_72%)] lg:block" />
          <div className="hero-backdrop-card glass-panel absolute inset-y-14 left-0 hidden w-[72%] rounded-[40px] rotate-6 lg:block" />

          <div className="hero-mockup absolute right-0 top-10 w-full max-w-[640px] origin-bottom-left rounded-[42px] border border-white/65 bg-[#17181b] p-5 text-white shadow-[0_40px_110px_rgba(26,18,10,0.22)] sm:p-6 lg:[transform:rotate(-8deg)]">
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
              <div className="hero-plant parallax-fast absolute bottom-6 right-4 hidden h-44 w-28 overflow-hidden rounded-[28px] border border-white/12 bg-[#1f211f] shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:block">
                <Image
                  src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80"
                  alt="Indoor plant in a warm styled space"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
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

          <article className="hero-float hero-float-card hero-float-card-right parallax-fast glass-panel absolute right-6 top-0 hidden w-48 rounded-[30px] p-4 lg:block">
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

          <article className="hero-float hero-float-card hero-float-card-left parallax-slow glass-panel absolute -left-2 bottom-16 hidden max-w-[220px] rounded-[30px] p-5 lg:block">
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

          <div className="hero-float hero-float-pill absolute bottom-2 right-10 hidden items-center gap-3 rounded-full border border-white/70 bg-white/76 px-5 py-3 text-sm font-medium text-ink shadow-[0_14px_30px_rgba(44,31,19,0.08)] backdrop-blur lg:flex">
            <LampFloor className="h-4 w-4 text-brand" />
            Ambient lighting kits
          </div>
        </div>
      </section>

      <section className="value-strip section-transition section-shell pb-10">
        <div className="grid gap-4 lg:grid-cols-4">
          {valueProps.map((item) => (
            <article
              key={item.title}
              className="value-prop rounded-[28px] border border-white/70 bg-white/70 px-5 py-5 shadow-[0_14px_34px_rgba(42,28,13,0.06)] backdrop-blur"
            >
              <span className="value-prop-icon flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-ink shadow-[0_10px_24px_rgba(201,133,67,0.18)]">
                {valuePropIcons[item.icon]}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-soft-ink">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="scrub-section section-transition section-shell pb-8"
      >
        <div className="glass-panel rounded-[40px] px-7 py-8 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow">Why Timber Works</span>
              <h2 className="scrub-heading mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                A premium landing page needs contrast, calm, and one strong idea
                per scroll moment.
              </h2>
            </div>
            <p className="scrub-copy max-w-lg text-base leading-7 text-soft-ink">
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

      <section className="scrub-section premium-glow section-transition section-shell py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Room Inspiration</span>
            <h2 className="scrub-heading mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              Shop the room.
            </h2>
          </div>
          <p className="scrub-copy max-w-sm text-sm leading-7 text-soft-ink">
            One interior, three hotspots, fast product discovery.
          </p>
        </div>

        <div className="scrub-media glass-panel mt-10 overflow-hidden rounded-[40px] p-4 lg:p-6">
          <div className="relative h-[34rem] overflow-hidden rounded-[32px]">
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
              alt="Warm premium room inspiration interior"
              fill
              sizes="(min-width: 1024px) 84rem, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.16)_44%,rgba(0,0,0,0.28)_100%)]" />

            {roomHotspots.map((hotspot) => (
              <div
                key={hotspot.name}
                className="hotspot-anchor absolute"
                style={{ top: hotspot.top, left: hotspot.left }}
              >
                <span className="hotspot-ring absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/55 bg-white/12" />
                <button
                  type="button"
                  className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border border-white/60 bg-brand shadow-[0_12px_28px_rgba(201,133,67,0.35)]"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </button>
                <div className="mt-3 rounded-[22px] bg-white/78 px-4 py-3 text-sm shadow-[0_16px_34px_rgba(23,21,20,0.12)] backdrop-blur">
                  <div className="font-semibold text-ink">{hotspot.name}</div>
                  <div className="mt-1 text-soft-ink">{hotspot.price}</div>
                </div>
              </div>
            ))}

            <div className="absolute left-6 top-6 max-w-sm rounded-[28px] bg-white/16 px-5 py-5 text-white backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/72">
                Editor&apos;s Room
              </div>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em]">
                Soft architecture, warm materials, and intentional negative space.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="scrub-section premium-glow section-transition section-shell py-14">
        <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <article className="scrub-media group relative overflow-hidden rounded-[40px] bg-[#1d1916] text-white shadow-[0_28px_80px_rgba(32,21,11,0.18)]">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1600&q=80"
                alt="Signature furniture campaign room"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,14,12,0.78)_0%,rgba(17,14,12,0.32)_48%,rgba(17,14,12,0.12)_100%)]" />
            </div>
            <div className="relative z-10 flex min-h-[32rem] flex-col justify-between p-7 lg:p-10">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/84 backdrop-blur-sm">
                  Most Wanted
                </span>
                <span className="rounded-full bg-brand px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
                  New Season Drop
                </span>
              </div>
              <div className="max-w-xl">
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white/58">
                  Signature Edit
                </span>
                <h2 className="scrub-heading mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.4rem]">
                  Pieces customers stop on.
                </h2>
                <p className="scrub-copy mt-5 max-w-md text-base leading-7 text-white/70">
                  Sofas, chairs, and lighting styled like a premium drop.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#products"
                    className="magnetic-btn inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_36px_rgba(255,255,255,0.12)]"
                  >
                    <span className="magnetic-inner inline-flex items-center gap-2">
                      Shop best sellers
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                  <a
                    href="#shop"
                    className="inline-flex items-center rounded-full border border-white/18 px-6 py-3.5 text-sm font-semibold text-white/84 backdrop-blur-sm"
                  >
                    View showroom
                  </a>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {hookProducts.map((product) => (
              <article
                key={product.id}
                className="scrub-media group tilt-card glass-panel overflow-hidden rounded-[32px]"
              >
                <div className="grid min-h-[10.5rem] grid-cols-[0.92fr_1.08fr]">
                  <div className="tilt-media relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      className="hover-pan object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between px-5 py-5">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-soft-ink">
                        {product.category}
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-brand-soft px-3 py-2 text-sm font-semibold text-ink">
                        {product.price}
                      </span>
                      <a
                        href="#products"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
                      >
                        Shop now
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="scrub-section premium-glow section-transition section-shell py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Best Selling Products</span>
            <h2 className="scrub-heading mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              More product, less copy.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {productCategories.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveCategory(tab);
                  setActiveProductId(null);
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === tab
                    ? "bg-ink text-white shadow-[0_14px_34px_rgba(23,21,20,0.14)]"
                    : "border border-white/70 bg-white/72 text-soft-ink hover:-translate-y-0.5 hover:bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="scrub-media mt-8 grid gap-4 md:grid-cols-3">
          {filteredProducts.slice(0, 3).map((product) => (
            <article
              key={`${product.id}-feature`}
              className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/70 shadow-[0_18px_42px_rgba(42,28,13,0.08)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="hover-pan object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_20%,rgba(0,0,0,0.38)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                      {product.category}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em]">
                      {product.name}
                    </h3>
                  </div>
                  <div className="rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                    {product.price}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => {
            const isSpotlight = product.id === spotlightProductId;

            return (
            <article
              key={product.id}
              className={`product-card tilt-card group relative overflow-hidden rounded-[32px] border border-white/70 bg-[rgba(255,250,244,0.82)] transition-all duration-300 ${
                isSpotlight
                  ? "scale-[1.02] shadow-[0_28px_70px_rgba(42,28,13,0.16)]"
                  : "shadow-[0_18px_42px_rgba(42,28,13,0.08)]"
              }`}
              tabIndex={0}
              onMouseEnter={() => setActiveProductId(product.id)}
              onMouseLeave={() => setActiveProductId(null)}
              onFocus={() => setActiveProductId(product.id)}
              onBlur={() => setActiveProductId(null)}
            >
              <div className="scrub-media tilt-media relative h-72 overflow-hidden bg-[#f3eadf]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 46vw, 100vw"
                  className={`hover-pan object-cover transition-transform duration-700 ${
                    isSpotlight ? "scale-110" : "group-hover:scale-105"
                  }`}
                />
                <div
                  className={`absolute left-4 top-4 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur transition-all duration-300 ${
                    isSpotlight
                      ? "bg-brand text-ink shadow-[0_10px_26px_rgba(201,133,67,0.28)]"
                      : "bg-white/82 text-soft-ink"
                  }`}
                >
                  {product.category}
                </div>
                <button
                  type="button"
                  className={`absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 ${
                    isSpotlight
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  }`}
                >
                  Quick add
                  <ShoppingBag className="h-4 w-4" />
                </button>
              </div>
              <div className="px-5 py-5">
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                      isSpotlight
                        ? "bg-ink text-white shadow-[0_10px_28px_rgba(23,21,20,0.18)]"
                        : "bg-white text-brand shadow-[0_10px_24px_rgba(42,28,13,0.06)]"
                    }`}
                  >
                    <Star
                      className={`h-4 w-4 ${isSpotlight ? "fill-white text-white" : "fill-brand text-brand"}`}
                    />
                    {product.rating}
                  </div>
                  <div
                    className={`inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                      isSpotlight
                        ? "bg-brand text-ink shadow-[0_10px_24px_rgba(201,133,67,0.28)]"
                        : "bg-white text-ink shadow-[0_10px_24px_rgba(42,28,13,0.06)]"
                    }`}
                  >
                    {product.price}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={`${product.id}-${starIndex}`}
                      className="h-4 w-4 fill-brand text-brand"
                    />
                  ))}
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                  {product.name}
                </h3>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-soft-ink">
                    In stock
                  </span>
                  <button className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-[0_12px_28px_rgba(23,21,20,0.14)] hover:-translate-y-0.5 hover:bg-[#2a2827]">
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section id="shop" className="scrub-section premium-glow section-transition section-shell py-14">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div
            className="scrub-media glass-panel overflow-hidden rounded-[36px] p-6"
          >
            <div className="relative h-[420px] overflow-hidden rounded-[30px]">
              <Image
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
                alt="Premium interior lounge composition"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="hover-pan object-cover"
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
            <h2 className="scrub-heading mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              The next layer is scroll-driven storytelling.
            </h2>
            <p className="scrub-copy mt-5 text-base leading-8 text-soft-ink">
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

      <section className="section-transition section-shell py-14">
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
        className="premium-glow section-transition section-shell pt-12"
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
                <button className="magnetic-btn inline-flex h-14 items-center justify-center rounded-[20px] bg-brand px-6 text-sm font-semibold text-ink hover:bg-[#d99655]">
                  <span className="magnetic-inner inline-flex items-center gap-2">
                    Join newsletter
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#categories"
                  className="magnetic-btn inline-flex items-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-ink hover:-translate-y-1 hover:bg-[#d99655]"
                >
                  <span className="magnetic-inner inline-flex items-center gap-2">
                    Browse categories
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
                <a
                  href="#products"
                  className="magnetic-btn inline-flex items-center rounded-full border border-white/12 px-6 py-3.5 text-sm font-semibold text-white/82 hover:-translate-y-1 hover:bg-white/6"
                >
                  <span className="magnetic-inner inline-flex items-center gap-2">
                    Shop best sellers
                    <ShoppingBag className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-transition section-shell py-10">
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
