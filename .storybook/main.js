module.exports = {
  stories: [
    '../src/**/*.stories.(js|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-contexts/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-a11y',
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
};
