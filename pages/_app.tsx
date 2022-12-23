import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import '../styles/globals.css';
const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
