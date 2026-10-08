import { useState } from 'react';
import { 
  Boxes, 
  Truck, 
  Factory, 
  ShieldCheck, 
  CheckCircle2, 
  Ruler, 
  Weight, 
  Layers, 
  ArrowRight, 
  Info, 
  FileText,
  Send
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import FeedbackModal from '../components/FeedbackModal';
import api from '../services/api';

export default function Pallets() {
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    email: '',
    phone: '',
    quantity: '',
    dimensions: '',
    application: 'Warehousing',
    delivery_location: '',
    additional_requirements: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({
    isOpen: false,
    type: 'success',
    title: '',
    message: '',
    referenceId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await api.submitPalletEnquiry({
        name: formData.name.trim(),
        company_name: formData.company_name.trim() || null,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        quantity: formData.quantity.trim(),
        dimensions: formData.dimensions.trim(),
        application: formData.application.trim(),
        delivery_location: formData.delivery_location.trim(),
        additional_requirements: formData.additional_requirements.trim() || null
      });

      setFeedback({
        isOpen: true,
        type: 'success',
        title: 'RFQ Submitted Successfully',
        message: 'Your Request for Quotation (RFQ) has been logged with our industrial procurement team. We will review your load specifications and contact you with a commercial quotation.',
        referenceId: `RFQ-PLT-${res.id || Date.now().toString().slice(-4)}`
      });

      // Reset form
      setFormData({
        name: '',
        company_name: '',
        email: '',
        phone: '',
        quantity: '',
        dimensions: '',
        application: 'Warehousing',
        delivery_location: '',
        additional_requirements: ''
      });
    } catch (err) {
      setFeedback({
        isOpen: true,
        type: 'error',
        title: 'Submission Error',
        message: err.message || 'Unable to submit pallet RFQ. Please verify required fields and try again.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const applicationsList = [
    {
      title: 'Manufacturing',
      desc: 'Line-side material staging, automated assembly transit, and internal component warehousing.',
      icon: <Factory className="w-5 h-5 text-[#8C6D23]" />
    },
    {
      title: 'Warehousing',
      desc: 'Optimized racking storage, high-density pallet racking, and aisle handling compatibility.',
      icon: <Boxes className="w-5 h-5 text-[#8C6D23]" />
    },
    {
      title: 'Logistics & Freight',
      desc: 'Long-haul interstate transportation, cross-dock consolidation, and multi-tier truck loading.',
      icon: <Truck className="w-5 h-5 text-[#8C6D23]" />
    },
    {
      title: 'Export Applications',
      desc: 'Standardized footprint packaging engineered for container stuffing and global transit standards.',
      icon: <Layers className="w-5 h-5 text-[#8C6D23]" />
    },
    {
      title: 'Heavy Industrial Use',
      desc: 'Heavy machinery parts, industrial chemicals, bulk construction goods, and raw material handling.',
      icon: <ShieldCheck className="w-5 h-5 text-[#8C6D23]" />
    }
  ];

  return (
    <>
      <SEO
        title="PHA Pallets Manufacturing | Reliable Pallet Solutions"
        description="Reliable Pallet Solutions for Modern Supply Chains. Industrial, warehousing, logistics, manufacturing and export pallets by Balaji Essentials, Vijayapura."
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0F2E22] text-white py-24 border-b border-[#184232] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
            alt="Industrial warehousing pallets"
            className="w-full h-full object-cover filter mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#091C15] via-[#0F2E22]/95 to-[#0F2E22]/85"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#184232] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-widest text-[#E8D8B0] mb-6">
              <Boxes className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>Balaji Essentials Manufacturing Vertical</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-tight">
              Reliable Pallet Solutions for Modern Supply Chains
            </h1>

            <p className="text-base sm:text-lg text-[#C7D4CD] leading-relaxed mb-8 font-light">
              Balaji Essentials is actively developing an industrial pallet manufacturing enterprise in Vijayapura, Karnataka, engineered to deliver durable, standardized, and custom material-handling pallets for demanding industrial, warehousing, logistics, and export applications.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#rfq-form"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#C5A869] text-[#0F2E22] hover:bg-[#D4BA7D] font-bold text-xs uppercase tracking-wider transition shadow-lg"
              >
                <span>Request a Pallet Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#rfq-form"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#184232] text-white hover:bg-[#20523e] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-wider transition"
              >
                <span>Discuss Custom Requirements</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Developer Placeholder Box from Development Brief */}
      <section className="bg-[#F6F4ED] border-b border-[#E2DED5] py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-xl border border-[#E2DED5] bg-white/80 p-4 text-xs text-[#5C5852] flex items-start gap-3 shadow-xs">
          <Info className="w-4 h-4 text-[#8C6D23] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#0F2E22] uppercase tracking-wider block mb-0.5 font-bold">Developer placeholder:</strong>
            Use the name “PHA Pallets Manufacturing” exactly as provided for now. Final technical wording should be updated once the exact pallet material/technology, product specifications, production capacity and certifications are confirmed.
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & TARGET CUSTOMERS */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block">
                Overview & Value Proposition
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F2E22] leading-tight">
                Engineered for Logistics Dependability
              </h2>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                In modern industrial logistics, pallets are not passive packaging—they are the foundational structural interface between manufacturing production, material handling equipment, automated storage, and multi-modal transport.
              </p>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                PHA Pallets Manufacturing addresses the acute need for dimensional consistency, structural rigidity, and dependable supply. Operating out of Vijayapura, our facility aims to serve regional and national enterprises seeking dependable material-handling units built to withstand rigorous heavy forklift operation and high-stack storage.
              </p>

              {/* Target Customer Callouts */}
              <div className="pt-2 border-t border-[#E8E5DF]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-3">
                  Key Target Sectors:
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs text-[#3E4A43]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>FMCG & Food Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>Industrial Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>3PL Warehousing Providers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>Cross-Border Exporters</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8E5DF] bg-[#F4EFE6]">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial warehouse logistics storage"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#C5A869] font-bold block mb-1">
                    Industrial Standard
                  </span>
                  <p className="text-lg font-display text-white">
                    “Dependable material handling starts with structural integrity at the base.”
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT RANGE & TECHNICAL DETAILS (WITH CLEAR PLACEHOLDERS) */}
      <section id="specifications" className="py-24 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            eyebrow="Engineering Specifications"
            title="Product Range & Technical Architecture"
            subtitle="Transparent specifications outlined with official placeholders pending commercial commissioning."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Box A: Product Range */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8E5DF] shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF8E1] text-[#7A5800] flex items-center justify-center">
                  <Boxes className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-[#0F2E22]">Planned Product Range</h3>
                  <span className="text-xs text-[#706E6B]">Dimensional configurations under development</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF]">
                  <span className="text-xs font-bold text-[#0F2E22] uppercase tracking-wide block mb-1">
                    Standard Industrial Pallet Types:
                  </span>
                  <p className="text-xs text-[#5C5852] font-mono leading-relaxed">
                    • 2-Way Reversible Pallet [Placeholder]<br />
                    • 4-Way Block Pallet [Placeholder]<br />
                    • Perimeter Base Heavy-Duty Pallet [Placeholder]
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF]">
                  <span className="text-xs font-bold text-[#0F2E22] uppercase tracking-wide block mb-1">
                    Standard Footprint Sizes:
                  </span>
                  <p className="text-xs text-[#5C5852] font-mono leading-relaxed">
                    • 1200 mm × 1000 mm (Standard Industrial Footprint) [Placeholder]<br />
                    • 1200 mm × 800 mm (Euro Footprint Standard) [Placeholder]<br />
                    • Custom Industrial Sizing: Available on RFQ order
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF]">
                  <span className="text-xs font-bold text-[#0F2E22] uppercase tracking-wide block mb-1">
                    Materials & Customization:
                  </span>
                  <p className="text-xs text-[#5C5852] font-mono leading-relaxed">
                    • Material Composition: [Official Specification Under Technical Finalization]<br />
                    • Customization: Top deck design, chamfered bottom boards, stencil branding
                  </p>
                </div>
              </div>
            </div>

            {/* Box B: Technical Details */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8E5DF] shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F0EC] text-[#0F2E22] flex items-center justify-center">
                  <Ruler className="w-5 h-5 text-[#C5A869]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-[#0F2E22]">Technical Parameters</h3>
                  <span className="text-xs text-[#706E6B]">Performance testing criteria</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF]">
                  <span className="text-xs font-bold text-[#0F2E22] uppercase tracking-wide block mb-1">
                    Load Capacities (Static & Dynamic):
                  </span>
                  <p className="text-xs text-[#5C5852] font-mono leading-relaxed">
                    • Static Load Capacity: [Confidential / Pending Lab Certification]<br />
                    • Dynamic Transit Load: [Pending Standard Deflection Testing]<br />
                    • Racking Load Capacity: [Evaluated per client racking profile]
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF]">
                  <span className="text-xs font-bold text-[#0F2E22] uppercase tracking-wide block mb-1">
                    Handling Compatibility:
                  </span>
                  <p className="text-xs text-[#5C5852] font-mono leading-relaxed">
                    • Standard 4-direction manual pallet jack access [Placeholder]<br />
                    • Counterbalance forklift & reach-truck compatibility [Placeholder]<br />
                    • Automated Guided Vehicle (AGV) conveyor roller support [Placeholder]
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF]">
                  <span className="text-xs font-bold text-[#0F2E22] uppercase tracking-wide block mb-1">
                    Durability & Moisture Controls:
                  </span>
                  <p className="text-xs text-[#5C5852] font-mono leading-relaxed">
                    • Fastener Retention & Joint Rigidity: [Standardized Quality Assurance]<br />
                    • Moisture Content Threshold: [Maintained within industrial tolerances]
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. APPLICATIONS SECTION */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            eyebrow="Industry Use Cases"
            title="Where PHA Pallets Excel"
            subtitle="Tailored to handle high-throughput logistics cycles across modern industrial environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationsList.map((app, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] hover:border-[#8C6D23] transition hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5DF] flex items-center justify-center mb-4">
                  {app.icon}
                </div>
                <h4 className="text-xl font-bold font-display text-[#0F2E22] mb-2">{app.title}</h4>
                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">{app.desc}</p>
              </div>
            ))}

            {/* Quality & Process Card */}
            <div className="p-6 rounded-2xl bg-[#0F2E22] text-white border border-[#184232] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#184232] text-[#C5A869] flex items-center justify-center mb-4 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-display text-white mb-2">Quality & Process Controls</h4>
                <p className="text-xs text-[#A3B3AA] leading-relaxed">
                  Includes planned in-process dimensional inspection, fastener pull-out resistance checks, and ISPM-15 phytosanitary treatment compliance for export units [Placeholder].
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#184232] text-[11px] text-[#C5A869] font-mono">
                Compliance Desk: Vijayapura Facility
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. BULK ENQUIRY / RFQ FORM */}
      <section id="rfq-form" className="py-24 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8E1] text-[#7A5800] border border-[#FFE082] text-xs font-semibold tracking-widest uppercase mb-3">
              <span>Commercial Procurement</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F2E22] mb-3">
              Request a Pallet Quote (RFQ)
            </h2>
            <p className="text-sm text-[#5C5852] leading-relaxed">
              Submit your required pallet quantity, dimensions, and delivery location. Our industrial sales desk will revert with a formal technical review and commercial quote.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-[#E8E5DF]">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Enter Enterprise Name"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="procurement@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                    Estimated Quantity *
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 500 units / month"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                    Required Dimensions *
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    required
                    value={formData.dimensions}
                    onChange={handleChange}
                    placeholder="e.g. 1200x1000 mm"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                    Intended Application *
                  </label>
                  <select
                    name="application"
                    value={formData.application}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm bg-white focus:outline-none focus:border-[#C5A869]"
                  >
                    <option value="Warehousing">Warehousing & Storage</option>
                    <option value="Manufacturing">Manufacturing & Production</option>
                    <option value="Logistics">Logistics & Transportation</option>
                    <option value="Export">Export Packaging</option>
                    <option value="Heavy Industrial">Heavy Industrial Use</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                  Delivery Location (City / State / Pincode) *
                </label>
                <input
                  type="text"
                  name="delivery_location"
                  required
                  value={formData.delivery_location}
                  onChange={handleChange}
                  placeholder="e.g. Belagavi, Karnataka 590001"
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                  Additional Specifications / Requirements
                </label>
                <textarea
                  name="additional_requirements"
                  rows={3}
                  value={formData.additional_requirements}
                  onChange={handleChange}
                  placeholder="Mention target load capacity (static/dynamic), custom branding, or special packaging constraints..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#0F2E22] hover:bg-[#184232] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#C5A869]" />
                  <span>{submitting ? 'Transmitting RFQ...' : 'Request a Pallet Quote'}</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <CTA
        headline="Building Reliable Industrial Supply Chains"
        description="Connect with Balaji Essentials to discuss pallet procurement agreements, custom dimensions, or regional distribution opportunities from Vijayapura, Karnataka."
        primaryBtnText="Request a Pallet Quote"
        primaryBtnLink="#rfq-form"
        secondaryBtnText="Corporate Inquiries"
        secondaryBtnLink="/contact"
      />

      {/* FEEDBACK MODAL */}
      <FeedbackModal
        isOpen={feedback.isOpen}
        onClose={() => setFeedback({ ...feedback, isOpen: false })}
        type={feedback.type}
        title={feedback.title}
        message={feedback.message}
        referenceId={feedback.referenceId}
      />
    </>
  );
}
