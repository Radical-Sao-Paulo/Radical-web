import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['100', '400', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'Radical SP',
  description: 'Projeto cristão Radical São Paulo',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
