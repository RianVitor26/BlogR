import { AppRoutes } from "./routes";
import { Global } from './@styles/global'
import { ThemeProvider } from "@mui/material";
import { LightTheme } from './@styles/themes/LightTheme';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <AppRoutes />
      <Global />
    </ThemeProvider>
  );
}

export default App
