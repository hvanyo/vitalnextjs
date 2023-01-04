# Next.js TailwindCSS Typescript Starter

This is a [Next.js](https://nextjs.org/) 12.x, [TailwindCSS](https://tailwindcss.com/) 3.x, and [TypeScript](https://www.typescriptlang.org/docs/home.html) 4.x starter template

For more details, see my blog post. [Nextjs TailwindCSS Typescript Starter](https://dev.to/vuongddang/nextjs-tailwindcss-typescript-starter-1c2m)

## Getting Started

### Clone & install

```bash
git clone https://github.com/hvanyo/vitalnextjs
cd vitalnextjs
```

Install dependencies:

```bash
npm install
```

### Add Env File

Add .env file with

```bash
CONTENTFUL_SPACE_ID=XXX
CONTENTFUL_DELIVERY_TOKEN=XXX
CONTENTFUL_PREVIEW_TOKEN=XXX
```

### Start Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Running Local StackBit

In another terminal

```bash
npm install -g @stackbit/cli
cd vitalnextjs

stackbit dev -c contentful --contentful-space-id XXX --contentful-preview-token XXX --contentful-management-token XXX
```

Visit the link provided in the output from stackbit.

On edit tab: You should be able inline edit the  Hero title & description.
on Content Tab: you can edit content (have to close to get it update)
Presets -- I didn't get that working with vigtal ds components
