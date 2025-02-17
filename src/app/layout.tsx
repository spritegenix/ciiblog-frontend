import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ApolloWrapper } from '@/lib/apollo-wrapper';
const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Confederation of Indian Industy(CII)',
    default: 'Confederation of Indian Industy',
  },
  description:
    'Trending Topics Industry Business Startup Unicorn Corporate Governance Technology Automation Design Innovation AI Artificial Intelligence IOT Robotics Machine Learning Digitalisation MSME Marketing Most Read GDP data has to be Comprehensive and include Productivity &#038; Quality 04 Mar 2024 Read More Empowering Women Entrepreneurs: Driving Business Success with Digital Tools 09&hellip;',
  metadataBase: new URL(process.env.BASE_URL),

  twitter: {
    card: 'summary_large_image',
    site: 'CII Blog',
    title: 'CII Blog | Confederation of Indian Industy(CII)',
    description:
      'Trending Topics Industry Business Startup Unicorn Corporate Governance Technology Automation Design Innovation AI Artificial Intelligence IOT Robotics Machine Learning Digitalisation MSME Marketing Most Read GDP data has to be Comprehensive and include Productivity &#038; Quality 04 Mar 2024 Read More Empowering Women Entrepreneurs: Driving Business Success with Digital Tools 09&hellip;',
    images: ['screenshots/homePage.png'],
  },
  openGraph: {
    title: 'CII Blog | Confederation of Indian Industy(CII)',
    type: 'website',
    locale: 'en_US',
    siteName: 'CII Blog',
    description:
      'Trending Topics Industry Business Startup Unicorn Corporate Governance Technology Automation Design Innovation AI Artificial Intelligence IOT Robotics Machine Learning Digitalisation MSME Marketing Most Read GDP data has to be Comprehensive and include Productivity &#038; Quality 04 Mar 2024 Read More Empowering Women Entrepreneurs: Driving Business Success with Digital Tools 09&hellip;',
    images: [
      {
        url: 'screenshots/homePage.png',
        width: 1200,
        height: 600,
        alt: 'CII Blog | Confederation of Indian Industy(CII)',
      },
    ],
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  antialiased`}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
