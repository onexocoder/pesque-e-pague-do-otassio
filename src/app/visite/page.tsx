import { PageIntro, FAQs } from "@/components/shared";
import { business } from "@/content/business";
import { mapsUrl, whatsappUrl, phoneUrl, safeExternal } from "@/lib/links";
import { Icon } from "@/components/icon";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Planeje sua visita",
  "Informações de localização, horários e contato do pesqueiro em Nova Fátima, Paraná. Planeje seu passeio em família.",
  "/visite",
);
export default function Page() {
  const map = mapsUrl(),
    wa = whatsappUrl(),
    tel = phoneUrl(),
    social = safeExternal(business.instagram);
  return (
    <>
      <PageIntro
        eyebrow="ESPERAMOS O SEU PRÓXIMO BOM MOMENTO"
        title="O encontro é por aqui."
        description="Dentro de Nova Fátima, no Paraná. As informações confirmadas para planejar o seu dia ficam reunidas nesta página."
      />
      <section className="section visit-details">
        <div className="location-art">
          <Icon name="pin" />
          <h2>Nova Fátima</h2>
          <p>PARANÁ · BRASIL</p>
          <div className="location-lines" aria-hidden="true" />
          <small>Representação gráfica · não é um mapa</small>
        </div>
        <div className="practical-info">
          <article>
            <p className="eyebrow">COMO CHEGAR</p>
            <h2>Bem aqui, na cidade.</h2>
            <p>
              {business.address ||
                "Endereço completo a confirmar. A rota será disponibilizada quando a localização exata for informada."}
            </p>
            {map && (
              <a
                className="button"
                href={map}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir rota no Google Maps
              </a>
            )}
          </article>
          <article>
            <p className="eyebrow">HORÁRIOS</p>
            {business.hours?.length ? (
              <dl>
                {business.hours.map((h) => (
                  <div key={h.day}>
                    <dt>{h.day}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p>Horários de funcionamento a confirmar.</p>
            )}
          </article>
          <article id="contato">
            <p className="eyebrow">VAMOS CONVERSAR</p>
            <h2>Contato</h2>
            {wa || tel || social ? (
              <div className="contact-links">
                {wa && (
                  <a
                    className="button"
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar no WhatsApp
                  </a>
                )}
                {tel && (
                  <a className="text-link" href={tel}>
                    {business.phone}
                  </a>
                )}
                {social && (
                  <a
                    className="text-link"
                    href={social}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                )}
              </div>
            ) : (
              <p>
                WhatsApp, telefone e redes sociais ainda não foram informados.
                Os canais oficiais serão publicados aqui após confirmação.
              </p>
            )}
          </article>
        </div>
      </section>
      <section className="section">
        <FAQs />
      </section>
    </>
  );
}
