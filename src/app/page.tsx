import Link from "next/link";
import { editorialMedia } from "@/content/media";
import { business } from "@/content/business";
import { home, experiences } from "@/content/site";
import { Media } from "@/components/media";
import { HeroVideo } from "@/components/hero-video";
import { Icon } from "@/components/icon";
import { Gallery } from "@/components/gallery";
import { FAQs, VisitBlock } from "@/components/shared";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Pesca, sabores e encontros em Nova Fátima – PR",
  "Conheça um espaço de pesca, restaurante e lazer para família e amigos dentro de Nova Fátima, Paraná.",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Media
            src={business.heroPoster || "/media/lake-demo.jpg"}
            alt={business.heroAlt}
            priority
            sizes="100vw"
          />
          <HeroVideo />
        </div>
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-line" />
            {home.hero.eyebrow}
          </p>
          <h1 className="hero-title">
            <span className="line">{home.hero.title[0]}</span>
            <span className="line italic">{home.hero.title[1]}</span>
          </h1>
          <p className="hero-description">{home.hero.description}</p>
          <div className="button-row">
            <Link href="#explorar" className="button light">
              Conhecer o espaço
            </Link>
            <Link href="/visite" className="hero-secondary">
              Como chegar
            </Link>
          </div>
        </div>
        <div className="hero-foot">
          <span>PESCA, SABORES & ENCONTROS</span>
          <a href="#explorar" className="scroll-indicator">
            Sinta o ritmo daqui <span aria-hidden="true">↓</span>
          </a>
          {business.heroIsDemo && (
            <span className="demo-tag">
              Imagem de referência · não retrata o local
            </span>
          )}
        </div>
      </section>
      <section className="manifesto section" id="explorar">
        <div className="manifesto-heading" data-reveal>
          <p className="eyebrow">{home.manifesto.eyebrow}</p>
          <h2>{home.manifesto.title}</h2>
        </div>
        <div className="manifesto-body">
          <div className="manifesto-photo" data-image-reveal>
            <Media
              src={editorialMedia.manifesto.src}
              alt={editorialMedia.manifesto.alt}
              demo={editorialMedia.manifesto.isDemo}
            />
          </div>
          <div className="manifesto-text" data-reveal>
            <Icon name="sun" />
            <p>{home.manifesto.text}</p>
            <p className="serif-note">O melhor do dia é estar presente.</p>
            <Link className="text-link" href="/estrutura">
              Encontre o seu jeito de aproveitar
            </Link>
          </div>
        </div>
      </section>
      <section className="fishing-scene">
        <div className="fishing-copy">
          <p className="eyebrow">{home.fishing.eyebrow}</p>
          <h2>{home.fishing.title}</h2>
          <p>{home.fishing.text}</p>
          <Link href="/pesca" className="button outline">
            Entenda como funciona
          </Link>
          <svg
            className="fishing-line"
            viewBox="0 0 360 180"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 30C100 10 110 150 215 80S360 80 310 140C280 180 245 130 275 115"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="fishing-visual" data-image-reveal>
          <Media
            src={editorialMedia.fishing.src}
            alt={editorialMedia.fishing.alt}
            demo={editorialMedia.fishing.isDemo}
          />
          <span className="fishing-word" aria-hidden="true">
            respire.
          </span>
        </div>
      </section>
      <section className="food-section section">
        <div className="food-heading" data-reveal>
          <p className="eyebrow">{home.food.eyebrow}</p>
          <h2>{home.food.title}</h2>
          <p>{home.food.text}</p>
        </div>
        {editorialMedia.food ? (
          <div className="food-real">
            <Media
              src={editorialMedia.food.src}
              alt={editorialMedia.food.alt}
              demo={editorialMedia.food.isDemo}
            />
          </div>
        ) : (
          <div
            className="food-art"
            aria-label="Ilustração editorial de uma mesa posta; espaço preparado para fotografia real"
          >
            <div className="table-ring ring-one" />
            <div className="table-ring ring-two" />
            <div className="plate-art">
              <Icon name="plate" />
              <span>à mesa.</span>
            </div>
            <span className="art-caption">
              Composição ilustrativa · fotografia real em breve
            </span>
          </div>
        )}
        <Link href="/cardapio" className="food-menu-card">
          <div>
            <p className="eyebrow">SABORES PARA TODO O DIA</p>
            <h3>Cardápio completo</h3>
            <p>
              Consulte todas as opções de restaurante, lanchonete, bar e
              sorvetes em uma única página.
            </p>
          </div>
          <div className="food-menu-action">
            <Icon name="plate" />
            <span>Ver o cardápio</span>
          </div>
        </Link>
      </section>
      <section className="experiences-section section">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">MUITO ALÉM DA PESCA</p>
            <h2>
              Cada um no seu ritmo.
              <br />
              <em>Todos no mesmo lugar.</em>
            </h2>
          </div>
          <Link href="/estrutura" className="text-link">
            Conhecer toda a estrutura
          </Link>
        </div>
        <div className="experience-preview">
          {experiences
            .filter((e) => ["churrasco", "sinuca", "sorvetes"].includes(e.id))
            .map((e) => (
              <Link
                href={`/estrutura#${e.id}`}
                className={`experience-tile tile-${e.id}`}
                key={e.id}
              >
                <Icon name={e.icon} />
                <div>
                  <p className="eyebrow">{e.category}</p>
                  <h3>{e.name}</h3>
                </div>
                <span className="tile-link">Conhecer o espaço</span>
              </Link>
            ))}
        </div>
        <p className="amenity-note">
          Restaurante · Lanchonete · Bar · Churrasqueira · Sinuca · Sorvetes ·
          Estacionamento
        </p>
      </section>
      <section className="gallery-section section">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">UM CONVITE PARA DESACELERAR</p>
            <h2>
              Pequenas pausas.
              <br />
              <em>Boas lembranças.</em>
            </h2>
          </div>
          <p>Um pouco do espaço que espera por você.</p>
        </div>
        <Gallery />
      </section>
      <section className="family-section section">
        <div className="family-photo">
          {business.familyPhoto ? (
            <Media src={business.familyPhoto} alt="Família do pesqueiro" />
          ) : (
            <>
              <Icon name="sun" />
              <span>
                Um espaço reservado
                <br />
                <em>para a nossa história.</em>
              </span>
              <small>Foto real da família em breve</small>
            </>
          )}
        </div>
        <div data-reveal>
          <p className="eyebrow">{home.family.eyebrow}</p>
          <h2>{home.family.title}</h2>
          <p>{business.familyStory || home.family.placeholder}</p>
          {!business.familyStory && (
            <small className="pending-label">
              Texto provisório · história a confirmar com a família
            </small>
          )}
          <Icon />
        </div>
      </section>
      <VisitBlock />
      <div className="section">
        <FAQs />
      </div>
    </>
  );
}
