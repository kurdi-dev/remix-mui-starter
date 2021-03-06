import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const themeMode = 'dark'; // dark or light
const primaryColor = '#3f51b5';
const secondaryColor = '#f50057';
// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: themeMode,
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
