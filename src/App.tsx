import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import PublicLayout from './layouts/public/publicLayout';
import Public from './pages/public/public';
import PanelLayout from './layouts/panel/panelLayout';
import Dashboard from './pages/panel/dashboard/dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* 
            Routes that use the PublicLayout.
            These are usually public pages (e.g. homepage, about).
          */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Public />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Route>

          {/* 
            Routes that use the PublicLayout.
          */}
          <Route element={<PanelLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;