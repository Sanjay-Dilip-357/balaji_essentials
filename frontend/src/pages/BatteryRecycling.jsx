import { useState } from 'react';
import { 
  BatteryCharging, 
  Recycle, 
  ShieldCheck, 
  AlertTriangle, 
  Truck, 
  Layers, 
  ArrowRight, 
  Info, 
  Users, 
  CheckCircle2, 
  Send,
  Zap,
  Globe2
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import FeedbackModal from '../components/FeedbackModal';
import api from '../services/api';

export default function BatteryRecycling() {
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    email: '',
    phone: '',
    battery_type: 'Lithium-ion (NMC/LFP)',
    approximate_quantity: '',
    location: '',
    requirements: ''
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
      const res = await api.submitBatteryEnquiry({
        name: formData.name.trim(),
        company_name: formData.company_name.trim() || null,
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        battery_type: formData.battery_type.trim(),
        approximate_quantity: formData.approximate_quantity.trim(),
        location: formData.location.trim(),
        requirements: formData.requirements.trim() || null
      });

      setFeedback({
        isOpen: true,
        type: 'success',
        title: 'Partner Enquiry Transmitted',
        message: 'Thank you for reaching out to the Balaji Essentials EV Battery Recycling team. Our circular energy liaison will review your details and connect regarding collection or technology partnership.',
        referenceId: `EVR-${res.id || Date.now().toString().slice(-4)}`
      });

      // Reset
      setFormData({
        name: '',
        company_name: '',
        email: '',
        phone: '',
        battery_type: 'Lithium-ion (NMC/LFP)',
        approximate_quantity: '',
        location: '',
        requirements: ''
      });
    } catch (err) {
      setFeedback({
        isOpen: true,
        type: 'error',
        title: 'Submission Error',
        message: err.message || 'Unable to submit enquiry. Please verify required fields and try again.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const partnersList = [
    {
      title: 'EV Ecosystem Participants',
      desc: 'Automotive OEMs, component suppliers, and regional micro-mobility manufacturers seeking end-of-life battery off-take.',
      icon: <Zap className="w-5 h-5 text-[#00796B]" />
    },
    {
      title: 'Commercial Fleet Operators',
      desc: 'Delivery fleets, e-rickshaw syndicates, and electric bus depots managing scheduled module retirement.',
      icon: <Truck className="w-5 h-5 text-[#00796B]" />
    },
    {
      title: 'Service & Maintenance Networks',
      desc: 'Authorized automobile dealerships, battery swapping hubs, and regional EV repair workshops.',
      icon: <Users className="w-5 h-5 text-[#00796B]" />
    },
    {
      title: 'Battery Technology Partners',
      desc: 'Clean-tech innovators and metallurgical researchers collaborating on responsible material recovery.',
      icon: <Recycle className="w-5 h-5 text-[#00796B]" />
    },
    {
      title: 'Industrial Energy Storage Users',
      desc: 'Enterprises retiring backup battery energy storage systems (BESS) or telecom power banks.',
      icon: <Layers className="w-5 h-5 text-[#00796B]" />
    }
  ];

  return (
    <>
      <SEO
        title="EV Battery Recycling | Powering a Circular Energy Future"
        description="A Vijayapura-based circular-energy initiative focused on responsible battery collection, processing, and material recovery under Balaji Essentials."
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0F2E22] text-white py-24 border-b border-[#184232] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558441719-aa34bbe5f347?auto=format&fit=crop&w=1800&q=80"
            alt="Clean energy EV technology"
            className="w-full h-full object-cover filter mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#091C15] via-[#0F2E22]/95 to-[#0F2E22]/85"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#184232] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-widest text-[#E8D8B0] mb-6">
              <BatteryCharging className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>Clean-Energy Recycling Initiative · Vijayapura</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-tight">
              Powering a Circular Energy Future
            </h1>

            <p className="text-base sm:text-lg text-[#C7D4CD] leading-relaxed mb-8 font-light">
              Balaji Essentials is developing an EV battery recycling initiative in Vijayapura, Karnataka, focused on responsible battery collection, safe handling protocols, processing methodologies, and closed-loop material recovery.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#partner-form"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#C5A869] text-[#0F2E22] hover:bg-[#D4BA7D] font-bold text-xs uppercase tracking-wider transition shadow-lg"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#partner-form"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#184232] text-white hover:bg-[#20523e] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-wider transition"
              >
                <span>Battery Recycling Enquiry</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance Note Box from Development Brief */}
      <section className="bg-[#F6F4ED] border-b border-[#E2DED5] py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-xl border border-[#E2DED5] bg-white/80 p-4 text-xs text-[#5C5852] flex items-start gap-3 shadow-xs">
          <Info className="w-4 h-4 text-[#00796B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#0F2E22] uppercase tracking-wider block mb-0.5 font-bold">Compliance note:</strong>
            Only publish operational capabilities, licenses, recycling methods, capacity figures and environmental claims that are supported by the company's actual approvals and validated processes.
          </div>
        </div>
      </section>

      {/* 2. WHY BATTERY RECYCLING MATTERS */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00796B] block">
                The Sustainability Imperative
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F2E22] leading-tight">
                Closing the Loop on India’s Clean Mobility Transition
              </h2>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                As the adoption of electric 2-wheelers, 3-wheelers, passenger vehicles, and commercial fleets accelerates across Karnataka and India, a major environmental challenge looms: what happens when battery packs reach the end of their operational lifespan?
              </p>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                Spent battery packs contain high-value, critical minerals that cannot be landfilled without severe environmental risk. Without safe aggregation and structured recovery, valuable materials are lost while creating environmental hazards.
              </p>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                Balaji Essentials’ initiative in Vijayapura aims to provide a responsible regional solution: creating a disciplined pipeline that intercepts spent batteries, protects ecosystems, and recovers reusable material fractions.
              </p>

              <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF] text-xs text-[#2F3D35] flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-[#00796B] shrink-0" />
                <span>
                  Aligning with National Battery Waste Management Rules (BWMR) and Extended Producer Responsibility (EPR) objectives.
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8E5DF] bg-[#F4EFE6]">
                <img
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80"
                  alt="EV battery technology and recycling concepts"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#C5A869] font-bold block mb-1">
                    Circular Mandate
                  </span>
                  <p className="text-lg font-display text-white">
                    “True clean mobility requires an end-to-end lifecycle solution—from first charge to responsible mineral recovery.”
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PLANNED SCOPE */}
      <section id="scope" className="py-24 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            eyebrow="Phased Operations"
            title="Planned Scope of Operations"
            subtitle="The systematic stages planned for responsible end-of-life battery lifecycle management."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DF] text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#004D40] flex items-center justify-center mx-auto text-sm font-bold">
                01
              </div>
              <h4 className="text-base font-bold font-display text-[#0F2E22]">Collection & Aggregation</h4>
              <p className="text-xs text-[#5C5852] leading-relaxed">
                Structured take-back partnerships with fleet owners, dealerships, and recycling networks.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DF] text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#004D40] flex items-center justify-center mx-auto text-sm font-bold">
                02
              </div>
              <h4 className="text-base font-bold font-display text-[#0F2E22]">Safe Storage</h4>
              <p className="text-xs text-[#5C5852] leading-relaxed">
                Thermal monitoring, fire-suppression containment, and hazard-mitigated holding bays.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DF] text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#004D40] flex items-center justify-center mx-auto text-sm font-bold">
                03
              </div>
              <h4 className="text-base font-bold font-display text-[#0F2E22]">Processing</h4>
              <p className="text-xs text-[#5C5852] leading-relaxed">
                Disassembly, deep discharging, casing separation, and controlled mechanical preparation.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DF] text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#004D40] flex items-center justify-center mx-auto text-sm font-bold">
                04
              </div>
              <h4 className="text-base font-bold font-display text-[#0F2E22]">Recycling</h4>
              <p className="text-xs text-[#5C5852] leading-relaxed">
                Hydrometallurgical / mechanical separation processes [Pending Final Technical Blueprint].
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E5DF] text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#004D40] flex items-center justify-center mx-auto text-sm font-bold">
                05
              </div>
              <h4 className="text-base font-bold font-display text-[#0F2E22]">Material Recovery</h4>
              <p className="text-xs text-[#5C5852] leading-relaxed">
                Reclaiming high-purity black mass fractions, copper, aluminum, and secondary polymers.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CIRCULAR ECONOMY & WHO WE WORK WITH */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00796B] block">
                Resource Circularity
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F2E22]">
                Transforming Waste Streams Into Strategic Assets
              </h2>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                Linear consumption models—extracting virgin minerals, using them once in battery cells, and discarding them—threaten global sustainability and escalate supply chain vulnerabilities.
              </p>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                By developing regional battery recycling infrastructure in Vijayapura, Balaji Essentials aims to support a true closed-loop circular economy: reducing environmental degradation while keeping vital materials circulating within the domestic supply ecosystem.
              </p>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0F2E22] text-white border border-[#184232]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A869] block mb-2">
                Planned Recovery Channels [Placeholder]
              </span>
              <h3 className="text-xl font-bold font-display mb-4">Targeted Secondary Resources:</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#C7D4CD]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                  <span>Black Mass (Lithium, Nickel, Cobalt, Manganese fractions)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                  <span>High-Grade Copper Foil & Aluminum Current Collectors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                  <span>Steel & Structural Battery Enclosure Alloys</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                  <span>Recovered Technical Polymers & Cable Harnesses</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-[#184232] text-[11px] text-[#A3B3AA] font-mono">
                Technical Recovery Methods: [Subject to Environmental Clearance & EIA Filing]
              </div>
            </div>
          </div>

          {/* Potential Partners Section */}
          <SectionTitle
            eyebrow="Ecosystem Collaboration"
            title="Who We Work With"
            subtitle="Engaging key stakeholders across the mobility and energy landscape to establish transparent take-back pipelines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersList.map((partner, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] hover:border-[#00796B] transition hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5DF] flex items-center justify-center mb-4">
                  {partner.icon}
                </div>
                <h4 className="text-xl font-bold font-display text-[#0F2E22] mb-2">{partner.title}</h4>
                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">{partner.desc}</p>
              </div>
            ))}

            {/* Safety & Compliance Card */}
            <div className="p-6 rounded-2xl bg-[#0F2E22] text-white border border-[#184232] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#184232] text-[#C5A869] flex items-center justify-center mb-4 font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-display text-white mb-2">Safety & Regulatory Compliance</h4>
                <p className="text-xs text-[#A3B3AA] leading-relaxed">
                  Permits, pollution control authorisations, consignment manifest tracking, and fire-safe logistics are being structured in full accordance with KSPCB / CPCB guidelines [Placeholder].
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#184232] text-[11px] text-[#C5A869] font-mono">
                Jurisdiction: Vijayapura, Karnataka
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PARTNER ENQUIRY FORM */}
      <section id="partner-form" className="py-24 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2F1] text-[#004D40] border border-[#B2DFDB] text-xs font-semibold tracking-widest uppercase mb-3">
              <span>Partnership & Aggregation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F2E22] mb-3">
              Partner With Us
            </h2>
            <p className="text-sm text-[#5C5852] leading-relaxed">
              If your organization manages retired battery packs, runs fleet operations, or seeks regional circularity partnerships in Karnataka, connect with our recycling initiative team.
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
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Enterprise / Fleet / Dealership Name"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="partner@company.com"
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
                    Battery Chemistry / Type *
                  </label>
                  <select
                    name="battery_type"
                    value={formData.battery_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm bg-white focus:outline-none focus:border-[#C5A869]"
                  >
                    <option value="Lithium-ion (NMC/LFP)">Lithium-ion (NMC / LFP)</option>
                    <option value="Lead Acid / VRLA">Lead Acid / VRLA</option>
                    <option value="Nickel Metal Hydride">Nickel Metal Hydride (NiMH)</option>
                    <option value="Mixed EV Modules">Mixed EV Modules / Packs</option>
                    <option value="Other Energy Storage">Other Energy Storage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                    Approximate Quantity *
                  </label>
                  <input
                    type="text"
                    name="approximate_quantity"
                    required
                    value={formData.approximate_quantity}
                    onChange={handleChange}
                    placeholder="e.g. 50 packs or 5 tonnes"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                    Aggregation Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City / Region"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                  Requirement / Collaboration Message
                </label>
                <textarea
                  name="requirements"
                  rows={3}
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Describe your battery inventory, EPR compliance needs, or proposed partnership scope..."
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
                  <span>{submitting ? 'Transmitting Partner Enquiry...' : 'Partner With Us'}</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <CTA
        headline="Powering a Circular Energy Future in Karnataka"
        description="Balaji Essentials welcomes forward-looking collaborations with battery manufacturers, fleet operators, and institutional entities committed to closed-loop environmental responsibility."
        primaryBtnText="Partner With Us"
        primaryBtnLink="#partner-form"
        secondaryBtnText="Corporate Desk"
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
