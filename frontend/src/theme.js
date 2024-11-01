// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Cor primária personalizada
    },
    secondary: {
      main: '#ff4081', // Cor secundária personalizada
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default theme;
