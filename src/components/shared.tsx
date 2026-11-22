import Link from "next/link";
import { business } from "@/content/business";
import { faq } from "@/content/faq";
import { home, navigation } from "@/content/site";
import { mapsUrl, whatsappUrl, phoneUrl, safeExternal } from "@/lib/links";
import { Icon } from "./icon";
export function ContactLink({ className = "button" }: { className?: string }) {
  const url = whatsappUrl();
  return url ? (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Falar no WhatsApp
    </a>
  ) : (
    <Link className={className} href="/visite#contato">
      Informações de contato
    </Link>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-description">{description}</p>
    </section>
  );
}
export function FAQs() {
  const published = faq.filter((f) => f.published);
  return (
    published.length > 0 && (
      <section className="faq-section">
        <p className="eyebrow">PARA PLANEJAR COM CALMA</p>
        <h2>Dúvidas frequentes.</h2>
        <div>
          {published.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    )
  );
}
export function VisitBlock() {
  return (
    <section className="visit-block">
      <div data-reveal>
        <p className="eyebrow">{home.visit.eyebrow}</p>
        <h2>{home.visit.title}</h2>
        <p>{home.visit.text}</p>
        <div className="button-row">
          <Link className="button light" href="/visite">
            Planejar minha visita
          </Link>
          <ContactLink className="text-link" />
        </div>
      </div>
      <div className="visit-location">
        <Icon name="pin" />
        <p>
          {business.city}
          <span>Paraná, Brasil</span>
        </p>
        <small>{business.address || "Endereço completo a confirmar"}</small>
        {business.hours?.length ? (
          <ul>
            {business.hours.map((h) => (
              <li key={h.day}>
                {h.day}: {h.time}
              </li>
            ))}
          </ul>
        ) : (
          <small>Horários a confirmar</small>
        )}
        {mapsUrl() && (
          <a
            href={mapsUrl()}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir rota no Google Maps
          </a>
        )}
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link href="/" className="footer-brand">
          <Icon />
          {business.name}
        </Link>
        <p>{business.tagline}</p>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {business.name}. Todos os direitos
          reservados.
        </span>
        <nav aria-label="Links do rodapé">
          {navigation.slice(1).map((l) => (
            <Link href={l.href} key={l.href}>
              {l.label}
            </Link>
          ))}
          {safeExternal(business.instagram) && (
            <a
              href={safeExternal(business.instagram)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
          {phoneUrl() && <a href={phoneUrl()}>Telefone</a>}
        </nav>
      </div>
      {!business.nameConfirmed && (
        <p className="draft-note">
          Versão de apresentação · Nome comercial e informações práticas
          aguardam confirmação.
        </p>
      )}
    </footer>
  );
}
