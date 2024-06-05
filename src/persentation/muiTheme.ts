import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00B677',
      light: '#73E8C0', 
      dark: '#007C4C', 
      contrastText: '#ffffff', // White color for text contrast
    },
  },
  typography: {
    h1: {
      fontFamily: 'Nunito Sans', 
    },
    h2: {
      fontFamily: 'Nunito Sans', 
    },
    h3: {
      fontFamily: 'Nunito Sans', 
    },
    h4: {
      fontFamily: 'Nunito Sans', 
    },
    h5: {
      fontFamily: 'Nunito Sans', 
    },
    h6: {
      fontFamily: 'Nunito Sans', 
    },
    subtitle1: {
      fontFamily: 'Raleway', 
    },
    subtitle2: {
      fontFamily: 'Raleway', 
    },
    body1: {
      fontFamily: 'Martel Sans', 
      fontSize:"clamp(0.8vmax, 12px, 18px) "
    },
  },
  components: {
    MuiCard:{
      styleOverrides:{
        root:{
          borderRadius:8,
          padding:16,
          marginBottom:'1em',
        }
      }
    }
  }
});

export default theme;