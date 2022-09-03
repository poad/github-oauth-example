/** @type {import('next').NextConfig} */
import * as mdx from '@next/mdx';
import withPreact from 'next-plugin-preact';
import * as analyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = analyzer.default({
    enabled: process.env.ANALYZE === 'true',
});
const withMDX = mdx.default({ extension: /\.mdx?$/, });

export default withBundleAnalyzer(withMDX(withPreact({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
    reactStrictMode: true,
    swcMinify: true,
})));
