/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.gyazo.com"]
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "https://scrapbox.io/niboshi/niboshi",
        permanent: true
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/mpppk",
        permanent: true
      },
      {
        source: "/github",
        destination: "https://github.com/mpppk",
        permanent: true
      },
      {
        source: "/pay",
        destination: "https://scrapbox.io/niboshi/pay",
        permanent: true
      },
      {
        source: "/dot",
        destination:
          "https://raw.githubusercontent.com/mpppk/dotfiles/master/debian/entrypoint.sh",
        permanent: true
      }
    ];
  }
};
