/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "trailique.com",
        port: "",
      },
    ],
  },

  env: {
    brevoKey: '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',
    toEmail: 'swapi8429@gmail.com',
    toName: 'Admin',
    ccEmail: 'ajay.deftsmart@gmail.com',
    ccName: 'Ajay',
    brevoEmailApiEndpoint: 'https://api.brevo.com/v3/smtp/email',
  },
};

module.exports = nextConfig;
