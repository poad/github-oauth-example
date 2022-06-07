/** @type {import('next').NextConfig} */
import * as mdx from '@next/mdx';
import * as analyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = analyzer.default({
    enabled: process.env.ANALYZE === 'true',
});
const withMDX = mdx.default({ extension: /\.mdx?$/, });

export default withBundleAnalyzer(withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
    webpack5: true,
    reactStrictMode: true,
    esmExternals: true,
    swcLoader: true,
    swcMinify: true,
    experimental: {
        modern: true,
    }
}));
