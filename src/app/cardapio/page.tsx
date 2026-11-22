import { PageIntro, ContactLink } from "@/components/shared";
import { Menu } from "@/components/menu";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Cardápio",
  "Restaurante, lanchonete, bar e sorvetes: consulte as categorias do cardápio do pesqueiro em Nova Fátima – PR.",
  "/cardapio",
);
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="SABORES & BOAS COMPANHIAS"
        title="Uma pausa à mesa."
        description="Restaurante, lanchonete, bar e sorvetes. Escolha uma categoria e descubra o que acompanha o seu passeio."
      />
      <section className="section menu-section">
        <Menu />
        <div className="contact-strip">
          <p>
            Dúvidas sobre o cardápio?
            <span>Fale com a gente pelo WhatsApp.</span>
          </p>
          <ContactLink />
        </div>
      </section>
    </>
  );
}
