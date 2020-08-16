module.exports = {
  prefix: "hr",
  theme: {},
  variants: {},
  purge: {
    content: ["./../app/views/hr-dashboard/hr-login/*.html"],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
      whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
    },
  },
  plugins: [],
};
