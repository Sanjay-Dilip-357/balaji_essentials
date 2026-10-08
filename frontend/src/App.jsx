import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Businesses from './pages/Businesses';
import GoodHerb from './pages/GoodHerb';
import Pallets from './pages/Pallets';
import BatteryRecycling from './pages/BatteryRecycling';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1E2522]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/good-herb" element={<GoodHerb />} />
            <Route path="/pallets" element={<Pallets />} />
            <Route path="/ev-battery-recycling" element={<BatteryRecycling />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
