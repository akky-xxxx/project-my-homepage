module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storycap",
  ],
  features: {
    interactionsDebugger: true,
  },
}
