/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['picsum.photos', 'firebasestorage.googleapis.com']
  }
}

module.exports = nextConfig
