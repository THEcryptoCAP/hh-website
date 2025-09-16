﻿/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  turbopack: { root: __dirname }
};

module.exports = nextConfig;