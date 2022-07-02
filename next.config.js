// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    /* config options here */
    basePath: process.env.NEXT_PUBLIC_APP_ENV === 'production' ? '/onepiece.fandom' : '',
    assetPrefix: process.env.NEXT_PUBLIC_APP_ENV === 'production' ? '/onepiece.fandom/' : '',
    reactStrictMode: true,
}

module.exports = nextConfig