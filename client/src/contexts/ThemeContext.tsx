import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { LightTheme } from '../@styles/themes/LightTheme';
import { DarkTheme } from '../@styles/themes/DarkTheme';
import { Box } from '@mui/system';

interface IThemeContextData{
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

 export const useThemeContext = () => {
   return useContext(ThemeContext);
 };

interface IAppThemeProviderProps{
    children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName((previousThemeName) =>
      previousThemeName === 'light' ? 'dark' : 'light'
    );
  }, []);
    
    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme
        return DarkTheme
    }, [themeName])


  return (
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
          <ThemeProvider theme={LightTheme}>
              <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                  {children}
              </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
