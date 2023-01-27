import { ProgressBar, trpc } from '@common';
import { Manrope } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '../styles/globals.css';

// import lexend font with @next/font
const manrope = Manrope({
  subsets: ['latin'],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-manrope: ${manrope.style.fontFamily};
        }
      `}</style>
      <ProgressBar />

      <ThemeProvider forcedTheme={(Component as any).theme || undefined} attribute="class">
        <SessionProvider>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default trpc.withTRPC(appWithTranslation(App));
