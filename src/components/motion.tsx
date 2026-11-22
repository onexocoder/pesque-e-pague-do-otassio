"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    async function initialize() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 1024px)",
          mobile: "(max-width: 767px)",
        },
        (context) => {
          if (!context.conditions?.motion) return;
          const mobile = context.conditions.mobile;
          if (document.querySelector(".hero-title")) {
            const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
            heroTimeline
              .from(".hero-title .line", {
                yPercent: mobile ? 32 : 45,
                opacity: 0,
                duration: mobile ? 0.8 : 1.1,
                stagger: 0.14,
              })
              .from(
                ".hero-description, .hero .button-row",
                {
                  y: 18,
                  opacity: 0,
                  duration: 0.65,
                  stagger: 0.1,
                },
                "-=0.45",
              );
          }
          gsap.utils
            .toArray<HTMLElement>("[data-reveal]")
            .forEach((el) =>
              gsap.from(el, {
                y: mobile ? 24 : 30,
                opacity: 0,
                duration: mobile ? 0.72 : 0.85,
                ease: "power2.out",
                clearProps: "transform,opacity",
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              }),
            );
          if (mobile) {
            const mobileReveals = [
              ".manifesto-photo",
              ".fishing-copy",
              ".fishing-visual",
              ".food-art, .food-real",
              ".food-menu-card",
              ".experience-tile",
              ".gallery-item",
              ".family-photo",
              ".family-section > div:last-child",
              ".visit-location",
              ".faq-section details",
            ].join(",");
            gsap.utils.toArray<HTMLElement>(mobileReveals).forEach((el, index) =>
              gsap.from(el, {
                y: index % 3 === 0 ? 34 : 24,
                opacity: 0,
                scale: el.matches(".gallery-item, .experience-tile") ? 0.985 : 1,
                duration: 0.7,
                delay: (index % 3) * 0.035,
                ease: "power2.out",
                clearProps: "transform,opacity",
                scrollTrigger: {
                  trigger: el,
                  start: "top 92%",
                  once: true,
                },
              }),
            );
            gsap.to(".fishing-word", {
              x: -22,
              ease: "none",
              scrollTrigger: {
                trigger: ".fishing-visual",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.7,
              },
            });
            gsap.to(".plate-art", {
              rotate: 7,
              y: -16,
              ease: "none",
              scrollTrigger: {
                trigger: ".food-art",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          }
          const desktop = context.conditions.desktop;
          if (desktop) {
            if (document.querySelector(".hero-media"))
              gsap.to(".hero-media", {
                yPercent: 15,
                scale: 1.05,
                ease: "none",
                scrollTrigger: {
                  trigger: ".hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              });
            gsap.utils
              .toArray<HTMLElement>("[data-image-reveal]")
              .forEach((el) =>
                gsap.from(el, {
                  clipPath: "inset(10% 10% 10% 10%)",
                  ease: "none",
                  scrollTrigger: {
                    trigger: el,
                    start: "top 95%",
                    end: "top 25%",
                    scrub: 1,
                  },
                }),
              );
            const pin = document.querySelector(".fishing-copy");
            if (pin)
              ScrollTrigger.create({
                trigger: ".fishing-scene",
                start: "top 100px",
                end: "bottom 75%",
                pin,
                pinSpacing: false,
              });
            gsap.utils
              .toArray<HTMLElement>(".gallery-grid .media")
              .forEach((el, i) =>
                gsap.fromTo(
                  el,
                  { y: i % 2 ? 30 : 0 },
                  {
                    y: i % 2 ? -25 : 0,
                    scrollTrigger: {
                      trigger: el,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 1,
                    },
                  },
                ),
              );
          }
          const line =
            document.querySelector<SVGPathElement>(".fishing-line path");
          if (line) {
            const length = line.getTotalLength();
            gsap.fromTo(
              line,
              { strokeDasharray: length, strokeDashoffset: length },
              {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: ".fishing-scene",
                  start: "top 80%",
                  end: "bottom 30%",
                  scrub: 1,
                },
              },
            );
          }
          requestAnimationFrame(() => ScrollTrigger.refresh());
        },
      );
      cleanup = () => mm.revert();
    }
    void initialize();
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [pathname]);
  return null;
}
