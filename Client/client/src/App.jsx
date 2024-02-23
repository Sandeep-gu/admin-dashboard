import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "./Themes.jsx";
import Dashboard from "./scenes/dashboard";
import Layout from "./scenes/layout";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Products from "./scenes/products/index.jsx";
import Customers from "./scenes/Customers/index.jsx";
import Transaction from "./scenes/Transaction/index.jsx";
import Geography from "./scenes/Geography/index.jsx";
import OverView from "./scenes/Overview/index.jsx";
import Daily from "./scenes/Daily/index.jsx";
import Monthly from "./scenes/Monthly/index.jsx";
import Breakdown from "./scenes/Breakdown/index.jsx";
import Admin from "./scenes/Admin/index.jsx";
import Performance from "./scenes/Performance/index.jsx";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transaction />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<OverView />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
