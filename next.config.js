/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(withMDX({
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
        webpack5: true,
        reactStrictMode: true,
        esmExternals: true,
        swcLoader: true,
        swcMinify: true,
        experimental: {
            modern: true,
        }
    }
));
