module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
    "storycap",
  ],
  features: {
    interactionsDebugger: true,
  },
}
