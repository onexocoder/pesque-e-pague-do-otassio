# Mídias do pesqueiro

As três imagens `*-demo.jpg` são referências de natureza obtidas do Unsplash. **Não são fotos do estabelecimento nem de Nova Fátima.** Os avisos de demonstração aparecem no site. A mesa é uma composição CSS, identificada como ilustração.

Fontes das referências:

- `lake-demo.jpg`: https://images.unsplash.com/photo-1501785888041-af3ef285b470
- `trees-demo.jpg`: https://images.unsplash.com/photo-1441974231531-c6227db76b6e
- `forest-demo.jpg`: https://images.unsplash.com/photo-1472396961693-142e6e269027
- Licença das imagens: https://unsplash.com/license

## Como colocar as fotos reais

1. Copie fotos próprias/autorizadas para esta pasta. Use nomes sem espaços: `lago-real.webp`, `familia.webp`, etc.
2. No `src/content/business.ts`, ajuste `heroPoster`, `heroAlt` e `heroIsDemo: false`. Use `familyPhoto` para a família e `logo` para a marca.
3. Em `src/content/media.ts`, substitua as imagens do manifesto e da pesca; adicione `food` para substituir a ilustração da mesa por uma foto real. Atualize `alt` e `isDemo: false`.
4. Em `src/content/gallery.ts`, atualize `src`, `alt`, `caption`, `group`, `order` e `isDemo` para cada imagem real.
5. Não remova o aviso de demonstração enquanto a foto não for do local. Não use imagens de pratos que não sejam vendidos.

Prefira WebP/AVIF, entre 1600–2000 px de largura para o hero e 900–1200 px para galeria. Mantenha os originais fora do site. `next/image` gera as versões adequadas e carrega as fotos secundárias sob demanda.

## Vídeo opcional

Em `business.ts`, preencha `heroVideo: { mp4: '/media/lago.mp4', webm: '/media/lago.webm' }`. Use vídeo curto, sem áudio, com poster obrigatório. Há autoplay mudo, loop, playsInline e botão de pausa. Movimento reduzido ou economia de dados (quando detectável no navegador) mantém somente o poster. Se a reprodução falhar, o poster continua disponível. Evite arquivos grandes; teste em rede móvel antes da publicação.
