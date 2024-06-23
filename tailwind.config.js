/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html", 
  ],
  
  theme: {
    extend: {
    screens:{
      sm: '300px',
      md: '768px',
      lg: '1024px',
    },
  
    colors:{
      corFundo: {
        100: '#E1E2C9',
    }
    }

    
  },
  },
  plugins: [],
}

