# Validação da implementação

Verificado em 21/11/2026 (America/Sao_Paulo), com o conteúdo provisório entregue.

## Checagens executadas

- `pnpm build`: produção compilada; todas as cinco páginas e os endpoints de sitemap/robots gerados.
- `pnpm typecheck`: sem erros TypeScript.
- `pnpm lint`: sem erros ou avisos após os ajustes.
- `pnpm test`: 7 testes aprovados para ausência de contatos/rota, protocolos de links, normalização de telefones, coordenadas válidas/inválidas, prioridade de Maps, codificação de endereço e moeda.
- Cinco rotas verificadas no navegador em 360, 390, 768, 1024 e 1440 px: `scrollWidth` igual à largura da viewport em todas as 25 combinações; um H1 por página; nenhum link WhatsApp/Maps fictício.
- Inspeção visual do hero e cardápio no celular, seção de pesca no desktop e galeria modal.
- Menu móvel: abertura, foco inicial em Explorar, fundo inerte, fechamento com Escape e devolução do foco, navegação para Cardápio e fechamento ao trocar a rota.
- Cardápio: clique na categoria Bar e navegação por seta para Sorvetes; seleção e estado vazio correspondentes.
- Galeria: abertura, botão Próxima, seta direita, fechamento com Escape e retorno do foco ao botão de origem.
- Motion em desktop: pin presente, transformação de paralaxe do hero e caminho SVG com progressão de traço observados no DOM e na rolagem.
- Mídias locais e fontes locais carregadas pela aplicação; otimização de imagem do Next habilitada.

## Limites da validação

- A preferência `prefers-reduced-motion` e a economia de dados têm implementação condicional e foram revisadas no código; o navegador de inspeção não forneceu controle de emulação dessas preferências. Não foi alterada a configuração pessoal do sistema.
- Não houve auditoria com leitor de tela real, Lighthouse em produção ou medição de Core Web Vitals em rede móvel. Não há pontuação de desempenho alegada.
- Vídeo, contatos reais, cardápio preenchido e publicação dependem dos dados/mídias do proprietário. O suporte está implementado, mas não foi validado com arquivos comerciais inexistentes.
- Imagens ilustrativas de referência não representam o pesqueiro nem Nova Fátima. As legendas deixam isso explícito.

## Conferência após inserir dados reais

1. Substituir mídias conforme `public/media/README.md`.
2. Confirmar nome, endereço, horários, WhatsApp e regras com a família.
3. Verificar os contatos e a rota real em um celular.
4. Revisar os itens/preços do cardápio e sua disponibilidade.
5. Preencher URL pública e imagem de compartilhamento; recompilar.
6. Repetir testes visuais e medir desempenho no ambiente de produção.
