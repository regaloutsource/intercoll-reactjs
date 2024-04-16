import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00F500', // Black color
      light: '#80FF80', // Slightly lighter shade of black
      dark: '#007A00', // Same as main color for consistency
      contrastText: '#ffffff', // White color for text contrast
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', 
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
