# Pesqueiro · Nova Fátima, PR

Site funcional em português brasileiro, implementado em Next.js App Router, TypeScript, Tailwind CSS 4 e GSAP/ScrollTrigger. Cinco rotas, layout responsivo, conteúdo tipado, fontes locais e mídias de demonstração identificadas.

## Rodar localmente

Requisitos: Node.js 22+ e pnpm 10+.

```sh
pnpm install
pnpm dev
```

Abra http://localhost:3000. Para gerar a versão estática de produção:

```sh
pnpm lint
pnpm typecheck
pnpm build
```

Os arquivos prontos para hospedagem são gerados em `out/`.

Se `node`/`pnpm` não estiverem no PATH deste computador, o runtime disponibilizado pelo Codex foi usado com:

```sh
export PATH="/Users/kessilycarmelita/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/kessilycarmelita/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH"
```

## Onde editar

| Conteúdo                                                                                                                   | Arquivo                   |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Nome, logo, cidade, endereço, coordenadas, Maps, horários, telefone, WhatsApp, Instagram, hero, história e foto da família | `src/content/business.ts` |
| Categorias e itens do cardápio                                                                                             | `src/content/menu.ts`     |
| Modalidades, regras, valores, espécies, equipamentos, antes de vir                                                         | `src/content/fishing.ts`  |
| Fotografias de manifesto, pesca e gastronomia                                                                              | `src/content/media.ts`    |
| Fotos e legendas da galeria                                                                                                | `src/content/gallery.ts`  |
| Perguntas e respostas publicadas                                                                                           | `src/content/faq.ts`      |
| Textos editoriais, navegação e espaços                                                                                     | `src/content/site.ts`     |
| Cores e fontes                                                                                                             | `src/styles/tokens.css`   |
| Arquivos de imagem/vídeo                                                                                                   | `public/media/`           |

Tudo que não foi confirmado permanece ausente ou explicitamente pendente. `NOME_DO_PESQUEIRO` é um identificador provisório, não uma marca inventada. Nenhum preço, item do cardápio, horário, telefone, endereço exato, espécie ou regra foi criado como fato.

### Contatos e localização

Telefones devem incluir país e DDD, apenas dígitos. WhatsApp e telefone só viram links quando há formato plausível. A existência/posse do número deve ser confirmada pelo proprietário. Maps prioriza `mapUrl` HTTPS, depois coordenadas válidas, depois endereço completo; não gera rota apenas a partir da cidade. Redes sociais aceitam HTTPS. Sem contatos, o CTA leva à informação de pendência.

`hours` é uma lista de `{ day, time }` com textos reais. `familyStory` contém a narrativa aprovada; enquanto ausente há uma copy identificada como provisória.

### Cardápio

`menuItems` começa vazio. Cadastre somente produtos reais, com `id`, `categoryId` correspondente e `name`. Campos opcionais: `description`, `price` (número em reais), `image` (caminho local), `available`, `featured`. Não há valor de exemplo fictício. Campos ausentes não são mostrados. `available: false` exibe indisponibilidade. Categorias respeitam `enabled` e `order`. Tabs têm setas, Home/End e seleção ARIA. A busca aparece a partir de 12 itens e ignora acentos.

### Fotos e vídeos

Veja `public/media/README.md` para a organização das imagens. As fotos reais do estabelecimento estão otimizadas para uso na web. As fontes Cormorant Garamond e Manrope são distribuídas via Fontsource com suas licenças nos respectivos pacotes; não dependem de chamadas ao Google Fonts.

## Rotas e comportamento

- `/`: oito momentos — hero, apresentação, pesca, gastronomia, lazer, galeria, história da família e visita/FAQ.
- `/pesca`: informações condicionais, orientações pendentes, galeria e contato.
- `/cardapio`: categorias, itens opcionais, busca e estados vazios.
- `/estrutura`: espaços confirmados, âncoras e galeria.
- `/visite`: localização, horários e contatos condicionais, FAQs.

Motion: reveal de linhas no hero, paralaxe do fundo, máscaras de imagem, pin editorial na pesca em desktop, linha SVG desenhada ao rolar e galeria com movimento sutil. GSAP é importado dinamicamente; matchMedia reverte os efeitos ao mudar a preferência ou breakpoint e na desmontagem. Mobile usa menos efeitos e não tem pin. `prefers-reduced-motion` desliga movimentos não essenciais. O conteúdo é renderizado no servidor e não depende das animações para aparecer.

A galeria usa `dialog` nativo, bloqueia fundo, permite setas e Escape e devolve foco ao botão de origem. Menu móvel controla foco, Escape, rolagem e torna o fundo inerte. Links, tabs e botões têm foco visível. A barra de ações móvel tem espaço reservado no rodapé.

## SEO e publicação

Copie `.env.example` para `.env.local` e preencha `NEXT_PUBLIC_SITE_URL` com a URL pública real quando houver domínio. Sem URL, o site fica `noindex`, robots bloqueia indexação e o sitemap fica vazio para não divulgar domínio fictício. Com a URL, são habilitados canonicals por página, sitemap e indexação. Reinicie/recompile ao mudar a variável.

Após confirmar o nome comercial, defina `nameConfirmed: true`; isso habilita JSON-LD LocalBusiness com os dados efetivamente informados. `ogImage` é opcional e deve apontar para uma imagem real aprovada para compartilhamento. O site não contém avaliações nem métricas inventadas.

O site usa a exportação estática do Next.js e pode ser hospedado diretamente no Cloudflare Pages. A URL pública deve ser informada em `NEXT_PUBLIC_SITE_URL` durante o build para habilitar canonicals, sitemap e indexação.

## Validação

Consulte `VALIDATION.md` para verificações executadas e limites. As metas de Core Web Vitals devem ser medidas novamente com fotografias reais, domínio, cache/CDN e rede de produção; não há alegação de pontuação Lighthouse sem medição.
