import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Syam Prasad K | Full Stack Developer',
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
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Syam Prasad',
              url: 'https://syamprasad.xyz',
              jobTitle: 'Full Stack Developer',
              sameAs: [
                'https://www.linkedin.com/in/syam-prasad-568849375?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BN0Nyt%2FAAS3u3sWhMeF%2FM5g%3D%3D5',
                'https://github.com/syamprasadkalarikkal'
              ],
            }),
          }}
        />
      </head>
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
