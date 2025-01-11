// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // 指定 Tailwind 扫描的文件
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF1493',
        secondary: '#4169E1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'text-red-500',
    'text-blue-500',
    'bg-green-500',
  ],
};