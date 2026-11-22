import Link from "next/link";
import { PageIntro } from "@/components/shared";
export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="CAMINHO NÃO ENCONTRADO"
        title="Vamos voltar ao lago?"
        description="Esta página não existe. Você pode continuar explorando o espaço pela página inicial."
      />
      <div className="section">
        <Link href="/" className="button">
          Voltar ao início
        </Link>
      </div>
    </>
  );
}
