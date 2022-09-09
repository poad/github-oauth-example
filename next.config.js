/** @type {import('next').NextConfig} */
import mdx from '@next/mdx';
import analyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = analyzer({
    enabled: process.env.ANALYZE === 'true',
});
const withMDX = mdx({ extension: /\.mdx?$/, });

export default withBundleAnalyzer(withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
    reactStrictMode: true,
    swcMinify: true,
}));
