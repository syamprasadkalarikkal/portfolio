import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Syam Prasak K - Junior Software Developer',
  description: 'Portfolio of Syam Prasak K, a Junior Software Developer specializing in React, Next.js, and modern web technologies. BCA graduate from Calicut University with internship experience at 9Commerce Technologies LLP.',
  keywords: 'Syam Prasak, Software Developer, React Developer, Next.js, Full Stack Developer, Web Developer, BCA Graduate, Portfolio',
  authors: [{ name: 'Syam Prasak K' }],
  openGraph: {
    title: 'Syam Prasak K - Junior Software Developer',
    description: 'Portfolio showcasing projects in React, Next.js, and full-stack development',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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