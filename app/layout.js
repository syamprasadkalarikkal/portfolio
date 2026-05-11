import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Syam Prasad - Full Stack Developer',
  description: 'Portfolio of Syam Prasad, full stack developer building AI powered web applications.',
  keywords: 'Syam Prasad, React developer, Next.js developer, AI web apps, Full Stack Developer, Web Developer, Portfolio',
  authors: [{ name: 'Syam Prasad' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Syam Prasad Portfolio',
    description: 'Full Stack Developer building AI powered web applications.',
    type: 'website',
    url: 'https://syamprasad.xyz',
    images: [
      {
        url: 'https://syamprasad.xyz/preview.png',
        width: 1200,
        height: 630,
        alt: 'Syam Prasad Portfolio Preview',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
