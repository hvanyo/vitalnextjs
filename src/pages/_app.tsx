import type { AppProps } from 'next/app'
import '../components/widgets';
import '../styles/index.css'

import { builder } from '@builder.io/react'

builder.init(process.env.BUILDER_API_KEY || 'waiting');

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}