module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.jpg$/,
        use: ['file-loader'],
      },
    );

    return config;
  },
  i18n: {
    locales: ['id-ID'],
    defaultLocale: 'id-ID',
  },
};
