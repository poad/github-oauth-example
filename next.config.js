/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})
module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
    webpack5: true,
    reactStrictMode: true,
    esmExternals: true,
    swcLoader: true,
    swcMinify: true,
})
