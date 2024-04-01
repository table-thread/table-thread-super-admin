import type { AppProps } from 'next/app';
import '@/styles/globle.scss';
// import '@/styles/main.scss';


// export default function App({ Component, pageProps }: AppProps) {
export default function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
