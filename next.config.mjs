/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16 usa Turbopack por padrão
  // Se precisar desabilitar, use: turbo: false
  
  // Otimizações de performance
  compress: true,
  
  // Otimizar imagens (quando adicionadas)
  images: {
    formats: ["image/avif", "image/webp"],
  },
  
  // Otimizar bundle
  experimental: {
    optimizePackageImports: ["qrcode.react"],
  },
};

export default nextConfig;
