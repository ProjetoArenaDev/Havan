# 💙 Havan - Landing Page Comercial

Este repositório contém o código-fonte de uma **landing page inspirada
no e-commerce da Havan**, desenvolvida com foco em:

-   ⚡ Performance\
-   🧱 Organização escalável\
-   🧩 Componentização\
-   👥 Trabalho em equipe (Arena Dev)

O projeto foi construído utilizando tecnologias nativas da web ---
**HTML, CSS e JavaScript Vanilla** --- com uma arquitetura pensada para
facilitar manutenção e evolução.

------------------------------------------------------------------------

## 🌐 Acesso ao Projeto

🚀 O site é hospedado através do **GitHub Pages**, e pode ser acessado em:\
👉 https://projetoarenadev.github.io/Havan/

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

🗂️ Havan
│
├── 🗂️ assets
│   ├── 🗂️ fonts
│   └── 🗂️ images
│       ├── 🗂️ ui        → ícones pequenos, botões, elementos pequenos (ex: svg, png, webp)
│       ├── 🗂️ branding  → logos, identidade visual
│       ├── 🗂️ temp      → imagens provisórias (pode até deletar depois)
│       │
│       ├── 🗂️ components
│       │   ├── 🗂️ header
│       │   ├── 🗂️ footer
│       │   └── 🗂️ chatbot
│       │
│       └── 🗂️ pages
│           ├── 🗂️ banner
│           ├── 🗂️ ofertas
│           ├── 🗂️ descontos
│           └── 🗂️ recomendados
│
├── 🗂️ components
│   ├── 📄 header.html
│   ├── 📄 footer.html
│   ├── 📄 modal.html
│   └── 📄 chatbot.html
│
├── 🗂️ sections
│   ├── 📄 hero.html
│   ├── 📄 banner.html
│   ├── 📄 filtros.html
│   ├── 📄 oferta-imperdiveis.html
│   ├── 📄 banner-oferta.html
│   ├── 📄 descontos.html
│   ├── 📄 recomendados.html
│   └── 📄 nao-perca.html
│
├── 🗂️ css
│   ├── 📄 base.css       → reset, fontes, variáveis
│   ├── 📄 layout.css     → grid, containers, estrutura
│   ├── 📄 components.css → botões, cards, e elementos reutilizáveis
│   ├── 📄 sections.css   → blocos grandes (hero, produtos, etc.) / estilos das seções
│   ├── 📄 responsive.css → media queries(responsividade)
│   └── 📄 variables.css  → variáveis globais (cores, espaçamentos)
│
├── 🗂️ js
│   ├── 📄 main.js
│   ├── 📄 loader.js
│   └── 🗂️ modules
│       ├── 📄 header.js  → controla header
│       ├── 📄 filtros.js → lógica de filtro
│       └── 📄 chatbot.js → comportamento do chat
│
├── 📄 index.html
└── 📄 README.md


Exemplo para adicionar de fontes:
assets/
├── fonts/
│   └── Nunito/
│       ├── Nunito-Regular.woff2
│       ├── Nunito-Bold.woff2
│       └── Nunito-Light.woff2 

------------------------------------------------------------------------

## 🧠 Arquitetura do Projeto

- **O projeto segue uma abordagem modular dividida em 3 camadas principais:**

### 🔹 Estrutura (HTML)

-   Separação por sections e components\
-   Organização semântica\
-   Facilita manutenção e reutilização

### 🔹 Estilo (CSS)

-   base.css → reset + padrão global\
-   variables.css → centraliza cores e tokens\
-   layout.css → estrutura da página\
-   components.css → elementos reutilizáveis\
-   sections.css → estilos específicos\
-   responsive.css → responsividade

### 🔹 JavaScript

-   main.js → inicialização geral\
-   loader.js → carregamento de componentes\
-   modules → scripts específicos por funcionalidade

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

## Para a **Camada de Aplicação**
- 📄 **HTML5** – Estruturação e semântica  
- 🖌️ **CSS3** – Estilos, layout e responsividade 
- 🧠 **JavaScript Vanilla** – Funcionalidades dinâmicas
- 🎯 **Font Awesome** – Ícones

## Para a **Camada de Infraestrutura** 
- 🚀 **GitHub Pages** – Hospedagem 

------------------------------------------------------------------------

## 🎯 Boas Práticas

-   ✔️ Estrutura escalável para times\
-   ✔️ Organização de assets profissional\
    ✔️ CSS modular\
-   ✔️ JavaScript desacoplado\
-   ✔️ Separação por responsabilidade\
-   ✔️ Sem dependência de frameworks

------------------------------------------------------------------------

## ⚠️ Observações

Este projeto é educacional / experimental, inspirado na interface da Havan\
Não possui integração com backend ou sistema de compras\
Algumas imagens podem ser apenas ilustrativas.

------------------------------------------------------------------------

## 🔒 Segurança

Sem dados sensíveis.\
Projeto 100% front-end.\
Este projeto não armazena informações sensíveis no repositório.\
Quaisquer integrações externas utilizam boas práticas de segurança e variáveis protegidas.

------------------------------------------------------------------------

## 👨‍💻 Equipe

Projeto desenvolvido no contexto da comunidade Arena Dev, com foco em aprendizado prático e colaboração em equipe.

------------------------------------------------------------------------

## 🚀 Próximos Passos

-   🔌 Integração com API de produtos\
-   🛒 Simulação de carrinho\
-   🔍 Busca dinâmica\
-   🎯 Otimização SEO
