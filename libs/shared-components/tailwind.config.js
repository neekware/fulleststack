import { join } from 'path';
module.exports = {
  content: [join(__dirname, './src/lib/**/*.{js,jsx,ts,tsx}')],
  theme: {
    extend: {},
  },
  plugins: [],
};
