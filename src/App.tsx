import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PRFPage from './pages/PRFPage';
import ImplantsPage from './pages/ImplantsPage';
import DentistryPage from './pages/DentistryPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prf-aesthetics" element={<PRFPage />} />
            <Route path="/implants" element={<ImplantsPage />} />
            <Route path="/dentistry" element={<DentistryPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
