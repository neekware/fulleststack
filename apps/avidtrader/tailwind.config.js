const { join } = require('path');

module.exports = {
  content: [join(__dirname, './pages/**/*.{js,jsx,ts,tsx}')],
  theme: {
    extend: {},
  },
  plugins: [],
};
// TODO: jit
