import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Gerador de Senhas Seguras | Ferramentas de Segurança Online",
    template: "%s | Gerador de Senhas Seguras",
  },
  description:
    "Gere senhas seguras, analise a força de suas senhas, crie senhas WiFi, PINs e passphrases. Glossário completo de segurança. Ferramentas gratuitas e profissionais para proteger suas contas online.",
  keywords: [
    "gerador de senhas",
    "senha segura",
    "gerador de senha",
    "criar senha",
    "senha forte",
    "analisador de senha",
    "senha wifi",
    "gerador pin",
    "passphrase",
    "glossário segurança",
    "cybersecurity",
    "segurança online",
    "proteção de dados",
    "autenticação",
    "criptografia",
  ],
  authors: [{ name: "Gerador de Senhas" }],
  creator: "Gerador de Senhas",
  publisher: "Gerador de Senhas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://geracaodesenhas.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Gerador de Senhas Seguras",
    title: "Gerador de Senhas Seguras | Ferramentas de Segurança Online",
    description:
      "Gere senhas seguras, analise a força de suas senhas, crie senhas WiFi, PINs e passphrases. Glossário completo de segurança. Ferramentas gratuitas e profissionais.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gerador de Senhas Seguras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de Senhas Seguras | Ferramentas de Segurança Online",
    description:
      "Gere senhas seguras, analise a força de suas senhas, crie senhas WiFi, PINs e passphrases. Glossário completo de segurança.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione seus códigos de verificação aqui quando disponíveis
    // google: "seu-codigo-google",
    // yandex: "seu-codigo-yandex",
    // yahoo: "seu-codigo-yahoo",
  },
  category: "Segurança",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
