import mdx from '@next/mdx';
const withMDX = mdx({ extension: /\.mdx?$/, });

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withMDX(config);
