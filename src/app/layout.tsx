import '@/styles/index.scss';

import { Alegreya } from 'next/font/google';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

// import Footer from '@/components/Footer';
// import Header from '@/components/Header';

const lato = localFont({
  src: [
    {
      path: '../../public/fonts/Lato-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Lato-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-lato',
  display: 'swap',
})

import type { Metadata } from "next";

//import ReactQueryProvider from '@/providers/react-query';

const alegreya = Alegreya({
    subsets: ['cyrillic'],
    variable: '--font-alegreya',
    display: 'swap',
});

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['400', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Интернет Магазин Техники",
    description: "Проект",
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ru">
        <body>{children}</body>
      </html>
    )
  }
// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="ru" className={`${alegreya.variable} ${roboto.variable}`}>
//             <body className="wrapper">
//                 <ReactQueryProvider>
//                     <Header />
//                     <main>{children}</main>
//                     <Footer />
//                 </ReactQueryProvider>
//             </body>
//         </html>
//     );
// }
