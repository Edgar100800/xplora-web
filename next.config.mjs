/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: /url/ }, // Exclude *.svg?url
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

export default nextConfig;
