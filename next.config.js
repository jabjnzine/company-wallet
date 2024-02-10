/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.amazonaws.com",
            },
        ],
        unoptimized: true,
        domains: ['via.placeholder.com', 'profile.line-scdn.net', 'media.discordapp.net']// Add the hostname(s) of your API server
    },
    transpilePackages: [
        'rc-util',
        '@ant-design',
        'kitchen-flow-editor',
        '@ant-design/pro-editor',
        'zustand', 'leva', 'antd',
        'rc-pagination',
        'rc-picker'
    ],
}
module.exports = nextConfig
