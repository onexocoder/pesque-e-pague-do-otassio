import { PageIntro, ContactLink, VisitBlock } from "@/components/shared";
import { Media } from "@/components/media";
import { Gallery } from "@/components/gallery";
import { editorialMedia } from "@/content/media";
import { fishing } from "@/content/fishing";
import { currency } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "A experiência da pesca",
  "Conheça a experiência da pesca em Nova Fátima – PR e confira as informações confirmadas para planejar sua visita.",
  "/pesca",
);
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="PESCA EM NOVA FÁTIMA"
        title="O tempo tem outro ritmo."
        description={fishing.introduction}
      />
      <div className="wide-photo">
        <Media
          src={editorialMedia.fishing.src}
          alt={editorialMedia.fishing.alt}
          demo={editorialMedia.fishing.isDemo}
          priority
          sizes="100vw"
        />
      </div>
      <section className="section fishing-details">
        <div>
          <p className="eyebrow">A EXPERIÊNCIA</p>
          <h2>
            Antes da primeira
            <br />
            <em>pescaria.</em>
          </h2>
        </div>
        <div>
          {fishing.modalities.length ? (
            fishing.modalities.map((m) => (
              <article key={m.name}>
                <h3>{m.name}</h3>
                <p>{m.description}</p>
              </article>
            ))
          ) : (
            <article>
              <h3>Modalidades e funcionamento</h3>
              <p>
                Os formatos de pesca esportiva e pesque-pague, as regras, os
                valores e as espécies ainda aguardam confirmação. As informações
                serão publicadas aqui.
              </p>
            </article>
          )}
          {fishing.rules.length > 0 && (
            <article>
              <h3>Regras da pesca</h3>
              <ul>
                {fishing.rules.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </article>
          )}
          {fishing.prices.length > 0 && (
            <article>
              <h3>Valores</h3>
              {fishing.prices.map((p) => (
                <p key={p.label}>
                  {p.label}: {currency(p.price)}
                </p>
              ))}
            </article>
          )}
          {fishing.species.length > 0 && (
            <article>
              <h3>Espécies</h3>
              <p>{fishing.species.join(", ")}</p>
            </article>
          )}
          <article>
            <h3>Equipamentos</h3>
            <p>
              {fishing.equipment ||
                "Informações sobre equipamentos e disponibilidade a confirmar."}
            </p>
          </article>
          <article>
            <h3>Antes de vir</h3>
            {fishing.beforeYouCome.length ? (
              <ul>
                {fishing.beforeYouCome.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : (
              <p>
                Condições de acesso e orientações para a pesca ainda
                não foram publicadas. Confira os dados atualizados antes de se
                deslocar.
              </p>
            )}
          </article>
          <ContactLink />
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">INSPIRAÇÃO PARA O PASSEIO</p>
            <h2>Perto da água.</h2>
          </div>
          <p>Galeria de referência · fotos reais em breve.</p>
        </div>
        <Gallery />
      </section>
      <VisitBlock />
    </>
  );
}
