module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors: {
        //brightRed: 'hsl(12, 88%, 59%)',
        //brightRedLight: 'hsl(12, 88%, 69%)',
        //brightRedSupLight: 'hsl(12, 88%, 95%)',
        // darkBlue: 'hsl(228, 39%, 23%)',
        //darkGrayishBlue: 'hsl(227, 12%, 61%)',
        //veryDarkBlue: 'hsl(233, 12%, 13%)',
        //veryPaleRed: 'hsl(13, 100%, 96%)',
        // veryLightGray: 'hsl(0, 0%, 98%)',
        black: 'hsl(0, 0%, 0%)',
        darkBlue: 'hsl(221, 51%, 16%)',
        lightBlue: 'hsl(221, 51%, 53%)',
        gold: 'hsl(37, 98%, 53%)',
        veryLightGray: 'hsl(0, 0%, 90%)',
        white: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
