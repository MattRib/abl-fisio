import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático para hospedagem tradicional
  output: 'export',

  // Otimizações de Performance
  reactStrictMode: true,

  // Otimizações de Imagem (unoptimized necessário para export estático)
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compressão
  compress: true,

  // Nota: Headers de segurança estão configurados no arquivo .htaccess
  // para hospedagem Apache/Hostinger (não funcionam com output: export)
};

export default nextConfig;
