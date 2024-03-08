/** @type {import('next').NextConfig} */

const hostnames = ["cdn.sanity.io", "dummyimage.com"]
const nextConfig = {
    images: {
        remotePatterns: hostnames.map((hostname) => ({
            protocol: "https",
            hostname,
            port: "",
        })),
    }
}

export default nextConfig;
