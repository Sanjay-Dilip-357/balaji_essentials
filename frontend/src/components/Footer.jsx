import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUpRight,
  ExternalLink,
  Info,
  X 
} from 'lucide-react';

export default function Footer() {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <footer className="bg-[#0A2017] text-[#E8E5DF] border-t border-[#184232] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#184232]/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Corporate Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#184232]">
          
          {/* Col 1 & 2: Parent Brand Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#C5A869] text-[#0F2E22] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold tracking-wider text-white font-display uppercase block">
                  Balaji Essentials
                </span>
                <span className="text-[10px] tracking-widest text-[#C5A869] uppercase font-semibold">
                  People · Industry · Planet
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A3B3AA] leading-relaxed max-w-md pt-2">
              “Building Responsible Businesses for a Better Tomorrow.”
            </p>
            <p className="text-xs text-[#8A9B92] leading-relaxed max-w-md">
              Balaji Essentials is a diversified corporate enterprise based in Vijayapura, Karnataka, 
              spearheading responsible value creation across modern Ayurveda wellness, 
              industrial logistics pallets, and circular EV battery recycling.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C5A869] font-medium">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Vijayapura, Karnataka, India</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A869] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B4C2BA]">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/businesses" className="hover:text-white transition">Our Businesses</Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-white transition">Sustainability</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact & Enquiries</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Verticals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A869] mb-4">
              Business Verticals
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B4C2BA]">
              <li>
                <Link to="/good-herb" className="hover:text-[#C5A869] flex items-center gap-1.5 transition">
                  <span>Well within</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
                <span className="text-[11px] text-[#708479] block">Ayurvedic Wellness</span>
              </li>
              <li className="pt-1">
                <Link to="/pallets" className="hover:text-[#C5A869] flex items-center gap-1.5 transition">
                  <span>PHA Pallets</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
                <span className="text-[11px] text-[#708479] block">Industrial Manufacturing</span>
              </li>
              <li className="pt-1">
                <Link to="/ev-battery-recycling" className="hover:text-[#C5A869] flex items-center gap-1.5 transition">
                  <span>EV Battery Recycling</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
                <span className="text-[11px] text-[#708479] block">Circular Clean Energy</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Corporate Inquiries & Governance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A869] mb-4">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs text-[#A3B3AA]">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-[#708479]">Corporate Email</div>
                  <span className="text-white/90">[info@balajiessentials.com (Placeholder)]</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-[#708479]">Corporate Desk</div>
                  <span className="text-white/90">[+91 (Placeholder Desk)]</span>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="text-[11px] text-[#708479] mb-1.5">Social Channels</div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#184232] text-[10px] text-[#E8E5DF]">LinkedIn (Placeholder)</span>
                  <span className="px-2.5 py-1 rounded bg-[#184232] text-[10px] text-[#E8E5DF]">X (Placeholder)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8A9B92]">
          <div>
            <p>© 2026 Balaji Essentials. All rights reserved.</p>
            <p className="text-[11px] text-[#697E72] mt-0.5">
              Vijayapura, Karnataka. Registered Indian Enterprise.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-xs">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition focus:outline-none"
            >
              Privacy Policy
            </button>
            <span className="text-[#184232]">|</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition focus:outline-none"
            >
              Terms & Conditions
            </button>
            <span className="text-[#184232]">|</span>
            <Link to="/contact" className="hover:text-white transition">
              Corporate Desk
            </Link>
          </div>
        </div>

        {/* Responsible Corporate Disclosures */}
        <div className="mt-6 p-3 rounded-lg bg-[#081711] border border-[#143326] text-[11px] text-[#6E8176] flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#A3B3AA]">Corporate Notice:</strong> Balaji Essentials operates as a parent holding enterprise. Well within, PHA Pallets Manufacturing, and EV Battery Recycling are distinct business initiatives. This website serves strictly for institutional and commercial informational purposes. In adherence to strict transparency standards, technical specifications, capacities, and regulatory certifications are indicated as placeholders until official commercial release.
          </p>
        </div>

      </div>

      {/* Modal for Privacy Policy / Terms */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FBF9F5] text-[#1E2522] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E8E5DF] max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-4 mb-4">
              <h3 className="text-xl font-bold font-display text-[#0F2E22]">
                {legalModal === 'privacy' ? 'Corporate Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-lg hover:bg-[#E8E5DF] text-[#706E6B] transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#4A5550] leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    <strong>1. Commitment to Privacy:</strong> Balaji Essentials (“Company”, “We”, “Us”), based in Vijayapura, Karnataka, values the privacy of its corporate partners, clients, and website visitors.
                  </p>
                  <p>
                    <strong>2. Information Collection:</strong> We collect contact information (such as name, corporate affiliation, email address, and phone number) solely when voluntarily submitted through our enquiry or RFQ forms.
                  </p>
                  <p>
                    <strong>3. Use of Data:</strong> Information submitted via this website is strictly utilized to respond to commercial inquiries, RFQ submissions, and institutional communications regarding Well within, PHA Pallets, or EV Battery Recycling. We never sell or share commercial leads with unauthorized third parties.
                  </p>
                  <p>
                    <strong>4. Data Security:</strong> Industry-standard protocols are maintained to safeguard all electronic communications and contact records.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. Nature of Website:</strong> This website is an official corporate portal for Balaji Essentials and does not constitute an e-commerce platform. No direct online transactions are processed.
                  </p>
                  <p>
                    <strong>2. Informational Disclosures:</strong> Information provided regarding wellness categories under Well within is inspired by Ayurvedic traditions and modern lifestyle practices; it does not substitute professional medical advice. Product details and industrial capabilities are subject to commercial operational schedules.
                  </p>
                  <p>
                    <strong>3. Intellectual Property:</strong> All trademarks, logos, brand names, and content pertaining to Balaji Essentials, Well within, and PHA Pallets are the proprietary property of the enterprise.
                  </p>
                  <p>
                    <strong>4. Jurisdiction:</strong> Any institutional disputes are subject to the exclusive jurisdiction of the competent courts in Vijayapura, Karnataka, India.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E5DF] flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-lg bg-[#0F2E22] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
