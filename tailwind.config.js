module.exports = {
  prefix: "custom-",
  theme: {},
  variants: {},
  purge: {
    enabled: true,
    content: ["./../app/views/hr-dashboard/hr-login/*.html"],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
      whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
    },
  },
  plugins: [],
};
