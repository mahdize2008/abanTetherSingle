/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1200px',
    },
    container: {
      padding: '0.75rem',
      center: true,
    },
    colors: {
      transparent : 'transparent',
      white : '#ffffff',
      black : '#000',
      primary : '#20242c',
      'primary-lighter' : '#252a33',
      'primary-lighter-alpha' : '#373a42',
      secondary : '#2c44e7',
      natural : '#a6a7ab',
      'natural-alpha' : '#797c81',
      'natural-betha' : '#575b64',
      danger:'#d24040'
    },
    fontSize: {
      '2xs': '10px',
      xs: '12px',
      'xs-plus': '13px',
      sm: '14px',
      'sm-plus': '15px',
      base: '16px',
      'base-plus': '17px',
      md: '18px',
      lg: '20px',
      'lg-plus': '21px',
      xl: '22px',
      '2xl': '24px',
      '3xl': '26px',
      '4xl': '28px',
      '5xl': '30px',
      '6xl': '32px',
      '7xl': '34px',
      '8xl': '36px',
      '9xl': '38px',
      '10xl': '40px',
      '14xl': '48px',
      '17xl': '54px',
      '19xl': '58px',
      '22xl': '64px',
      
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '750',
      black: '800',
      extrablack: '900',
    },
    extend: {
      backgroundImage: {
        "play":"linear-gradient( 120deg, rgb(44, 68, 231) 0%, rgb(44, 75, 231) 100%)",
      },
      boxShadow: {
        'btn': '3px 3px 0 #fff',
        'btn-secondary': '3px 3px 0 #2c44e7',
      },
      dropShadow: {
        'title': '3px 4px #2c44e7',
      }
    }

  },
  plugins: [],
}
