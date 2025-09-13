import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Loja de Pá - Consultoria AWS Brasil | Migração Cloud & Serverless",
    template: "%s | Loja de Pá - Consultoria AWS Brasil"
  },
  description: "Consultoria especializada em AWS no Brasil. Seu crescimento começa com a ferramenta certa. Soluções serverless personalizadas, migração para cloud e otimização de custos. Consulta gratuita disponível.",
  keywords: "consultoria aws brasil, migração aws, serverless, cloud computing, arquitetura aws, consultoria cloud, aws especialista",
  authors: [{ name: "Loja de Pá" }],
  creator: "Loja de Pá",
  publisher: "Loja de Pá",
  applicationName: "Loja de Pá",
  generator: "Next.js",
  category: "Technology",
  classification: "Business",
  metadataBase: new URL('https://lojadepa.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Loja de Pá - Consultoria AWS Brasil",
    description: "Seu crescimento começa com a ferramenta certa. Consultoria AWS especializada para empresas brasileiras. Soluções serverless, migração cloud e otimização de custos.",
    url: "https://lojadepa.com.br",
    siteName: "Loja de Pá",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Loja de Pá - Consultoria AWS Brasil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loja de Pá - Consultoria AWS Brasil",
    description: "Consultoria especializada em AWS. Soluções serverless personalizadas para empresas brasileiras.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF9900" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//vercel.live" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
