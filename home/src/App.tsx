import React from 'react';
import HomeAppBar from './bar/HomeAppBar';
import Header from './header/Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { CssBaseline, useMediaQuery } from '@material-ui/core';

export default function App() {
  const [isLoading, setLoading] = React.useState<boolean>(true)
  const [isDarkEnabled, setDarkMode] = React.useState<boolean>(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createMuiTheme({
    palette: {
      background: {
        default: isDarkEnabled ? "#424242" : "#FFFFFF"
      },
      primary: {
        main: isDarkEnabled ? "#FFFFFF" : "#000000"
      },
      secondary: blue,
      type: isDarkEnabled ? "dark" : "light",
    },
  });

  React.useEffect(() => setDarkMode(prefersDarkMode), [prefersDarkMode])
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomeAppBar isDarkMode={isDarkEnabled} toggleDark={() => setDarkMode(!isDarkEnabled)} />
      <Header isLoading={isLoading} setLoading={setLoading} />
      {/* Remove for now <Projects /> */}
    </ThemeProvider>
  );
}
