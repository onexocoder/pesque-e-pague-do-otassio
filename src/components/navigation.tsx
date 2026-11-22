"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { business } from "@/content/business";
import { navigation } from "@/content/site";
import { whatsappUrl } from "@/lib/links";
import { Icon } from "./icon";
export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = Array.from(
      document.querySelectorAll<HTMLElement>("main, footer, .mobile-actions"),
    );
    background.forEach((el) => {
      el.inert = true;
    });
    panel.current?.querySelector("a")?.focus();
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
      if (e.key === "Tab") {
        const elements = [
          button.current,
          ...Array.from(
            panel.current?.querySelectorAll<HTMLAnchorElement>("a") || [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = elements[0],
          last = elements[elements.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth > 1000) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      background.forEach((el) => {
        el.inert = false;
      });
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  return (
    <>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>
      <header
        className={`header ${pathname === "/" ? "over-hero" : ""} ${scrolled || open ? "solid" : ""}`}
      >
        <Link
          href="/"
          className="brand"
          aria-label={`${business.name} — início`}
          onClick={() => setOpen(false)}
        >
          <>
            {business.logo ? (
              <Image src={business.logo} alt="" width={38} height={38} />
            ) : (
              <Icon />
            )}
          </>
          <span>
            {business.name}
            <small>PESCA · SABORES · ENCONTROS</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          ref={button}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fechar" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </header>
      {open && (
        <div ref={panel} id="mobile-menu" className="mobile-menu">
          <nav aria-label="Navegação móvel">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p>Um dia inteiro de bons momentos.</p>
        </div>
      )}
      <div className="mobile-actions">
        <Link href="/visite">
          <Icon name="pin" />
          Como chegar
        </Link>
        {whatsappUrl() ? (
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        ) : (
          <Link href="/visite#contato">Informações de contato</Link>
        )}
      </div>
      {!open && whatsappUrl() && (
        <a
          className="whatsapp-float"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp: (43) 99901-1564 (abre em nova aba)"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
            <path d="m8.2 7.4 1.2 2.3-.9 1.1c.9 1.7 2.1 2.9 3.8 3.7l1.1-.9 2.3 1.2c.1 1.4-.8 2.2-2.1 2-4-.6-7-3.6-7.6-7.3-.2-1.3.7-2.2 2.2-2.1Z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      )}
    </>
  );
}
