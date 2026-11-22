import Link from "next/link";
import { PageIntro, VisitBlock } from "@/components/shared";
import { experiences } from "@/content/site";
import { Icon } from "@/components/icon";
import { Gallery } from "@/components/gallery";
import { Media } from "@/components/media";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Espaços e lazer",
  "Conheça a estrutura: restaurante, lanchonete, bar, sorvetes, sinuca, churrasqueira e estacionamento em Nova Fátima – PR.",
  "/estrutura",
);
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="UM LUGAR, MUITOS JEITOS DE APROVEITAR"
        title="O dia é de vocês."
        description="Da pescaria à mesa, da partida de sinuca à conversa ao redor da churrasqueira. Encontre seu jeito de aproveitar com família e amigos."
      />
      <nav className="anchor-nav" aria-label="Espaços">
        {experiences.map((e) => (
          <a key={e.id} href={`#${e.id}`}>
            {e.category}
          </a>
        ))}
      </nav>
      <section className="section structure-grid">
        {experiences.map((e) => (
          <article
            id={e.id}
            className={`structure-card${e.image ? " has-image" : ""}`}
            key={e.id}
          >
            {e.image && e.imageAlt && (
              <Media
                className="structure-card-media"
                src={e.image}
                alt={e.imageAlt}
                sizes="(max-width: 767px) 100vw, (max-width: 1000px) 50vw, 33vw"
              />
            )}
            <div className="structure-card-content">
              <Icon name={e.icon} />
              <p className="eyebrow">{e.category}</p>
              <h2>{e.name}</h2>
              <p>{e.description}</p>
              {["restaurante", "lanchonete", "bar", "sorvetes"].includes(
                e.id,
              ) && (
                <Link className="text-link" href="/cardapio">
                  Ver cardápio
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CONHEÇA O ESPAÇO</p>
            <h2>Um convite ao encontro.</h2>
          </div>
          <p>Fotos reais do Pesque e Pague do Otássio.</p>
        </div>
        <Gallery />
      </section>
      <VisitBlock />
    </>
  );
}
