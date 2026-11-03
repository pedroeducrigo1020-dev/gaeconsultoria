# Ethos e Terra — projeto organizado

Reorganização dos arquivos enviados, com nomes claros seguindo o
sitemap (`SITEMAP.txt`) e os bugs abaixo corrigidos.

## Estrutura

```
index.html                 Home ← gerado agora
gestao-ambiental.html      Hub central (página-mãe)
seguranca-trabalho.html    Pilar 01
marketing.html             Pilar 02  ← gerado
qualidade.html             Pilar 03  ← gerado
filosofia-empresa.html     Pilar 04  ← gerado
rh.html                    Pilar 05  ← gerado
ti.html                    Pilar 06  ← gerado
nr-01.html, nr-35.html, pgr-pcmso.html                              (sub-sub, Segurança)
branding-esg.html, marketing-digital.html, comunicacao-interna.html (sub-sub, Marketing)
iso-9001.html, iso-14001.html, auditorias.html                      (sub-sub, Qualidade)
missao-visao-valores.html, codigo-conduta.html, governanca.html     (sub-sub, Filosofia)
recrutamento.html, clima-psicossocial.html, treinamento-lideranca.html (sub-sub, RH)
infraestrutura.html, seguranca-informacao.html, lgpd-dados.html     (sub-sub, TI)

assets/
├── hub.css       (corrigido + ampliado)
├── app.js        (corrigido)
└── subpages.js   (corrigido)
```

Somente `nr-35.html`, `seguranca-trabalho.html` e `gestao-ambiental.html`
vieram prontos. Os outros 17 sub-sub e 5 pilares foram **gerados a
partir do mesmo template**, já que os dados (título, lead, bullets, FAQ)
já existiam em `subpages.js` ou nos `<p>` dos cards do hub — só faltava
o HTML/CSS de cada arquivo.

## Bugs corrigidos

1. **CSS ausente para `.card-servico`** — as páginas de pilar (ex.
   `seguranca-trabalho.html`) usam as classes `.card-servico`,
   `.card__num`, `.card__icone`, `.card__link` para o grid das
   sub-sub-páginas, mas o `hub.css` original só estilizava
   `.pilar-card` (usado no hub). Isso deixava esses cards sem nenhum
   visual. Adicionei o bloco `.card-servico` em `hub.css`, espelhando
   o comportamento do `.pilar-card`.
2. **Rótulo inconsistente "NR-1" vs "NR-01"** — em `subpages.js`, os
   blocos de estatística de `nr-01` e `clima-psicossocial` usavam
   "NR-1", enquanto o título da própria página e o resto do site usam
   "NR-01". Padronizado para "NR-01".
3. **`app.js` fora de uma IIFE** — o comentário original pedia para
   colar o trecho "dentro do IIFE existente", mas o arquivo declarava
   `initReveal`, `initFAQ`, `initCounters` e `initAll` no escopo
   global. Agora está todo dentro de uma IIFE própria.
4. **Sem proteção contra religação duplicada de listeners/observers**
   — como `initAll()` roda de novo a cada `ethos:subpage-rendered`,
   adicionei guardas (`data-reveal-bound`, `data-faq-bound`,
   `data-counter-bound`) para nunca observar/ligar o mesmo elemento
   duas vezes, e um guard equivalente (`main.dataset.rendered`) em
   `subpages.js` para não renderizar a mesma `<main>` duas vezes.
5. **Render de subpage sem tratamento de erro** — se qualquer campo
   de uma entrada em `SUBPAGES` estivesse ausente, `main.innerHTML`
   quebraria silenciosamente ou lançaria erro não tratado. Agora o
   template está isolado em `renderTemplate()` e envolto em
   `try/catch`, com fallback visível em caso de falha.

## Correção: "o site não estava funcionando"

**Causa raiz:** `assets/styles.css` **nunca existiu** no projeto. As 26 páginas
o carregavam (404 silencioso), então não havia layout nem cores — e o `hub.css`
e os estilos inline usam variáveis (`--kombu-green`, `--bone`, `--ff-display`...)
que só essa folha definia. Resultado: página crua, com texto claro sobre fundo claro.

**O que foi feito:**

- **`assets/styles.css` (novo)** — tokens de cor/tipografia, reset, layout
  (`.container`, `.secao`, `.grid`), hero, breadcrumbs, `.prose`, `.card`, botões,
  FAQ, timeline, CTA, header, footer, formulário, animação de entrada e
  `prefers-reduced-motion`. Deve carregar **antes** do `hub.css`.
- **Header e footer** — `app.js` agora preenche `#site-header` / `#site-footer`
  (menu com dropdown de pilares, menu mobile, item ativo, "pular para o conteúdo").
- **`metodo.html` e `contato.html` (novos)** — eram linkados em todo CTA e davam 404.
  O texto do método vem só do que já estava no hub.
- **Classe `js` no `<head>`** de todas as páginas — o conteúdo só fica oculto para a
  animação de entrada se o JavaScript estiver rodando; sem JS, tudo aparece.
- **`subpages.js`** — siglas como "NR-35" não quebram mais de linha no meio ("NR-" / "35").

## Atenção

- **`contato.html`**: o formulário não tem servidor; ele abre o e-mail do visitante
  já preenchido. O destino é o placeholder `contato@ethosetterra.com.br` (constante
  `EMAIL_DESTINO` no final do arquivo) — **troque pelo e-mail real**.
- Se você tiver o `styles.css` original em algum lugar, ele pode substituir o novo;
  os nomes de classe usados nas páginas estão todos documentados no cabeçalho do arquivo.

## Modo escuro

Paleta: **Kombu Green** `#354024` (superfícies/cards) · **Moss Green** `#889063`
(destaques) · **Tan** `#CFBB99` (texto secundário, botões) · **Bone** `#E5D7C4`
(texto principal). O fundo da página é um tom mais escuro do Kombu (`#1E2719`).

- **Onde fica:** `assets/styles.css` (seções 8 e 9) e o final de `assets/hub.css`.
  Tudo é ativado por `<html data-theme="dark">`; o tema claro não foi alterado.
- **Como decide o tema:** um script inline no `<head>` de todas as páginas lê a
  escolha salva (`localStorage`, chave `ethos-tema`) ou, sem escolha, segue o tema do
  sistema (`prefers-color-scheme`). Isso evita o "flash" de tema claro ao carregar.
- **Botão de alternar:** ícone de lua/sol no header (`app.js`), com `aria-pressed`,
  e também visível no mobile ao lado do menu.
- **Ajustar cores:** edite os tokens em `:root[data-theme="dark"]` (início da seção 8).
- **Nota:** `#E5D7C` foi enviado com 5 dígitos; assumi `#E5D7C4`, que já era o Bone do projeto.

## Correção aplicada ao modo escuro

As páginas carregam `assets/styles.css`, `assets/hub.css` e `assets/app.js`, mas o modo
escuro estava só nas cópias soltas na raiz do projeto (`styles.css`, `hub.css`, `app.js`).
Essas versões foram copiadas para `assets/` e os arquivos duplicados da raiz
(`styles (1).css`, `hub (3).css`, `app (4).js`, `subpages (2).js` etc.) foram removidos.

## Atualização de conteúdo (RH, Marketing e Qualidade)

- Removidas as cópias duplicadas da raiz (`app.js`, `subpages.js`, `styles.css`, `hub.css`), que eram idênticas às de `assets/`.
- `rh.html`, `marketing.html` e `qualidade.html` e suas 3 sub-páginas cada foram reescritos com o conteúdo dos slides (os nomes dos arquivos foram mantidos para não quebrar links/menu):
  - RH: `recrutamento` (etapa 2), `clima-psicossocial` (etapas 1 e 5), `treinamento-lideranca` (etapas 3 e 4).
  - Marketing: `branding-esg` (etapas da gestão), `marketing-digital` (plano de marketing), `comunicacao-interna` (KPIs e tendências).
  - Qualidade: `iso-9001` (ISO 9001 + TQM), `iso-14001` (ISO 14001 + SGA), `auditorias` (PDCA, 5S, Ishikawa, Kaizen).
- A frase sobre Segurança do Trabalho foi movida para `seguranca-trabalho.html`.

## Matriz de riscos e conteúdo de Qualidade (imagens)

- `gestao-ambiental.html`: nova seção "Riscos e perigos ambientais" (matriz com 5 riscos, probabilidade, severidade, nível e legenda). Estilos no final de `assets/hub.css`.
- `qualidade.html`: seção "Atuação da consultoria" e lema da qualidade.
- `iso-9001`, `iso-14001` e `auditorias` (ferramentas): detalhes de PDCA (com exemplo), 5S, Ishikawa, Kaizen e das normas.
- As duas infografias de Qualidade estão em `assets/img/` e aparecem em `qualidade.html` na seção "Qualidade em duas páginas".

## Logo

Nova logo (folhas em círculo) em `assets/img/`: `logo-claro.png` (tema claro), `logo-escuro.png` (tema escuro e rodapé) e `favicon.png`, todas com fundo transparente e cores da paleta (Kombu/Bone/Moss). O header e o rodapé trocam a versão conforme o tema (`assets/styles.css`, classe `.logo__img`).
