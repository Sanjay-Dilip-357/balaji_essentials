import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Leaf, 
  Boxes, 
  BatteryCharging, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 tracking-wide py-2 ${
      isActive
        ? 'text-[#0F2E22] font-semibold border-b-2 border-[#C5A869]'
        : 'text-[#4A5550] hover:text-[#0F2E22]'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E5DF]'
          : 'bg-[#FBF9F5] border-b border-[#E8E5DF]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-12 h-12 rounded-lg bg-[#F5EED9] flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-105 overflow-hidden">
  <img
    src="/be-logo.png"
    alt="BE Logo"
    className="w-12 h-12 object-contain"
  />
</div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-[#0F2E22] font-display uppercase">
                Balaji Essentials
              </span>
              <span className="text-[10px] tracking-widest text-[#706E6B] uppercase font-medium">
                People · Industry · Planet
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            {/* Businesses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <NavLink
                to="/businesses"
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm font-medium py-2 transition-colors ${
                    isActive ? 'text-[#0F2E22] font-semibold border-b-2 border-[#C5A869]' : 'text-[#4A5550] hover:text-[#0F2E22]'
                  }`
                }
              >
                Our Businesses
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#C5A869]' : ''}`} />
              </NavLink>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-[#E8E5DF] p-3 space-y-1">
                    <Link
                      to="/good-herb"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#FBF9F5] transition group"
                    >
                      <div className="w-8 h-8 rounded-md bg-[#E8F0EC] text-[#0F2E22] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0F2E22] group-hover:text-[#C5A869] transition">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#0F2E22] group-hover:text-[#C5A869] transition">Well within</div>
                        <div className="text-xs text-[#706E6B] leading-tight">Ayurveda-inspired modern wellness</div>
                      </div>
                    </Link>

                    <Link
                      to="/pallets"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#FBF9F5] transition group"
                    >
                      <div className="w-8 h-8 rounded-md bg-[#F2EDE4] text-[#8C6D23] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0F2E22] group-hover:text-[#C5A869] transition">
                        <Boxes className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#0F2E22] group-hover:text-[#C5A869] transition">PHA Pallets</div>
                        <div className="text-xs text-[#706E6B] leading-tight">Industrial supply-chain pallet solutions</div>
                      </div>
                    </Link>

                    <Link
                      to="/ev-battery-recycling"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#FBF9F5] transition group"
                    >
                      <div className="w-8 h-8 rounded-md bg-[#E5F3EE] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0F2E22] group-hover:text-[#C5A869] transition">
                        <BatteryCharging className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#0F2E22] group-hover:text-[#C5A869] transition">EV Battery Recycling</div>
                        <div className="text-xs text-[#706E6B] leading-tight">Circular-energy recovery initiative</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/good-herb" className={navLinkClass}>
              Well within
            </NavLink>
            <NavLink to="/pallets" className={navLinkClass}>
              Pallets
            </NavLink>
            <NavLink to="/ev-battery-recycling" className={navLinkClass}>
              EV Battery Recycling
            </NavLink>
            <NavLink to="/sustainability" className={navLinkClass}>
              Sustainability
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F2E22] text-[#FBF9F5] hover:bg-[#184232] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A869]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-[#0F2E22] hover:bg-[#E8E5DF]/50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-[#E8E5DF] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive ? 'bg-[#0F2E22] text-[#FBF9F5]' : 'text-[#1E2522] hover:bg-[#E8E5DF]/40'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive ? 'bg-[#0F2E22] text-[#FBF9F5]' : 'text-[#1E2522] hover:bg-[#E8E5DF]/40'
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/businesses"
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive ? 'bg-[#0F2E22] text-[#FBF9F5]' : 'text-[#1E2522] hover:bg-[#E8E5DF]/40'
              }`
            }
          >
            Our Businesses Overview
          </NavLink>

          {/* Sub-verticals inside mobile menu */}
          <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-[#C5A869] ml-2">
            <NavLink
              to="/good-herb"
              className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-[#3E4A43] hover:text-[#0F2E22]"
            >
              <Leaf className="w-4 h-4 text-[#C5A869]" />
              <span>Well within (Wellness)</span>
            </NavLink>
            <NavLink
              to="/pallets"
              className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-[#3E4A43] hover:text-[#0F2E22]"
            >
              <Boxes className="w-4 h-4 text-[#C5A869]" />
              <span>PHA Pallets Manufacturing</span>
            </NavLink>
            <NavLink
              to="/ev-battery-recycling"
              className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-[#3E4A43] hover:text-[#0F2E22]"
            >
              <BatteryCharging className="w-4 h-4 text-[#C5A869]" />
              <span>EV Battery Recycling</span>
            </NavLink>
          </div>

          <NavLink
            to="/sustainability"
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive ? 'bg-[#0F2E22] text-[#FBF9F5]' : 'text-[#1E2522] hover:bg-[#E8E5DF]/40'
              }`
            }
          >
            Sustainability
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-lg text-base font-medium ${
                isActive ? 'bg-[#0F2E22] text-[#FBF9F5]' : 'text-[#1E2522] hover:bg-[#E8E5DF]/40'
              }`
            }
          >
            Contact
          </NavLink>

          <div className="pt-3">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0F2E22] text-[#FBF9F5] text-sm font-semibold uppercase tracking-wider"
            >
              <span>Request Consultation / RFQ</span>
              <ArrowRight className="w-4 h-4 text-[#C5A869]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
