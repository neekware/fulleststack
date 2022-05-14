const { join } = require('path');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'src/app/**/*.{js,jsx,ts,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
