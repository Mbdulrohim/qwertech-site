# QwerTech Global Communications

A responsive e-commerce storefront for QwerTech Global Communications, a Nigerian gadget retailer. The site showcases phones, laptops, gaming devices, daily deals, trade-in perks, buying guides, and WhatsApp ordering.

## Features

- Responsive desktop and mobile navigation
- Product categories for iPhone, Samsung, Google Pixel, laptops, gaming, and tablets
- Daily and weekly deals
- Product search, configurator, and cart drawer
- Hero slider, stories, perks, and newsletter sections
- Naira pricing and WhatsApp ordering links
- Modular TypeScript components and CSS

## Tech stack

- [Vite](https://vite.dev/)
- TypeScript
- [GSAP](https://gsap.com/) for animation
- [Lucide](https://lucide.dev/) icons

## Run locally

You need a current Node.js LTS release and npm.

```bash
git clone https://github.com/Mbdulrohim/qwertech-site.git
cd qwertech-site
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The optimized static site is generated in `dist/`.

## Deploy to Cloudflare Pages

### Recommended: GitHub integration

1. Push your latest changes to the GitHub repository.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com/), open **Workers & Pages**.
3. Select **Create application** > **Pages** > **Import an existing Git repository**.
4. Connect GitHub and select `Mbdulrohim/qwertech-site`.
5. Use these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | Leave blank (repository root) |

6. Select **Save and Deploy**.

Cloudflare will publish the site at a `*.pages.dev` URL. Every push to `main` will create a new production deployment, while other branches and pull requests can receive preview deployments.

### Add a custom domain

Open the Pages project in Cloudflare, choose **Custom domains** > **Set up a custom domain**, enter the domain or subdomain, and follow the DNS prompts. Domains already using Cloudflare DNS are configured automatically in most cases.

## Project structure

```text
public/                 Static images, logo, and favicons
src/
  assets/               Source assets
  components/           UI components and component styles
  data/                 Product, story, and navigation data
  styles/               Global styles and design tokens
  types/                Shared TypeScript types
  main.ts               Application entry point
index.html              Page markup and metadata
```

## Content configuration

- Edit products and prices in `src/data/products.ts`.
- Edit navigation items in `src/data/navigation.ts`.
- Edit buying guides and stories in `src/data/stories.ts`.
- Replace placeholder WhatsApp numbers in `index.html` and the component files before launch.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |

## License

No license has been specified for this repository.
