import React, { useState } from 'react';
import { Home } from './containers';
import { lightTheme, ThemeProvider } from '@theme-app/utils';

export const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Home setTheme={setTheme} />
    </ThemeProvider>
  );
};

export default App;
