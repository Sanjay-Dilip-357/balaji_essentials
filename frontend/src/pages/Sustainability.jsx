import { Link } from 'react-router-dom';
import { 
  Globe2, 
  Recycle, 
  Leaf, 
  Boxes, 
  BatteryCharging, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Compass, 
  TrendingUp,
  Sparkles,
  Info
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';

export default function Sustainability() {
  const lifecycleSteps = [
    {
      step: '01',
      title: 'Resources',
      desc: 'Ethical sourcing of pure agricultural botanicals, standardized sustainable timber/structural materials, and critical end-of-life battery cells.',
      badge: 'Responsible Inflow'
    },
    {
      step: '02',
      title: 'Production',
      desc: 'Controlled manufacturing processes prioritizing energy-efficient tooling, zero toxic emissions, and strict worker occupational safety.',
      badge: 'Disciplined Operations'
    },
    {
      step: '03',
      title: 'Use',
      desc: 'Enabling consumers to live healthier daily lives (Well within) and supply-chain logistics to run without transit failure (PHA Pallets).',
      badge: 'Societal & Industrial Utility'
    },
    {
      step: '04',
      title: 'Recovery',
      desc: 'Systematic collection, hazardous neutralization, and circular mineral extraction to divert materials away from toxic landfills.',
      badge: 'EV Battery Recycling'
    },
    {
      step: '05',
      title: 'Responsible Future',
      desc: 'Re-infusing recovered secondary materials back into industrial loops, minimizing raw resource extraction for the next generation.',
      badge: 'Long-term Circularity'
    }
  ];

  return (
    <>
      <SEO
        title="Sustainability | People. Industry. Planet."
        description="Balaji Essentials integrates sustainability across Ayurveda wellness, industrial pallet manufacturing, and EV battery circular energy."
      />

      {/* Header Banner */}
      <section className="bg-[#0F2E22] text-white py-24 border-b border-[#184232] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=80"
            alt="Pristine natural ecosystem"
            className="w-full h-full object-cover filter mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#091C15] via-[#0F2E22]/95 to-[#0F2E22]/85"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#184232] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-widest text-[#C5A869] mb-6">
              <span>Balaji Essentials Environmental Charter</span>
            </div>

            <div className="text-sm font-semibold tracking-widest uppercase text-[#C5A869] mb-3">
              Core Concept
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6">
              People. Industry. Planet.
            </h1>

            <p className="text-base sm:text-lg text-[#C7D4CD] leading-relaxed mb-8 font-light">
              At Balaji Essentials, sustainability is not an isolated CSR initiative—it is the governing design principle that ties our wellness formulations, industrial manufacturing, and clean-energy recovery into one cohesive enterprise framework.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#circular-model"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#C5A869] text-[#0F2E22] hover:bg-[#D4BA7D] font-bold text-xs uppercase tracking-wider transition shadow-lg"
              >
                <span>Explore Circular Framework</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#184232] text-white hover:bg-[#20523e] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-wider transition"
              >
                <span>Our Corporate Values</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Advisory Notice */}
      <section className="bg-[#F4EFE6] border-b border-[#E8E5DF] py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs text-[#5C5852] text-center">
          <Info className="w-4 h-4 text-[#8C6D23] shrink-0" />
          <span>
            <strong>Authentic Environmental Governance:</strong> Balaji Essentials strictly avoids unsupported environmental metrics or greenwashing statistics. Our sustainability framework outlines verifiable structural commitments across all business operations.
          </span>
        </div>
      </section>

      {/* 1. CONNECTING SUSTAINABILITY ACROSS THREE VERTICALS */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            eyebrow="Integrated Architecture"
            title="Sustainability Across All Three Verticals"
            subtitle="How each business under Balaji Essentials fulfills our triple commitment to people, industry, and the planet."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Well within */}
            <div className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#E8E5DF] flex flex-col justify-between hover:border-[#2E7D32] transition group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] text-[#1B5E20] flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1B5E20] block mb-1">
                  1. People
                </span>
                <h3 className="text-2xl font-bold font-display text-[#0F2E22] mb-3">
                  Well within (Wellness)
                </h3>
                <p className="text-sm text-[#4A5550] leading-relaxed mb-6">
                  Supporting human vitality through unadulterated botanical formulas. By selecting ethically cultivated herbs, Well within supports agricultural communities while offering consumers non-toxic, holistic health nourishment.
                </p>

                <ul className="space-y-2 text-xs text-[#2F3D35] border-t border-[#E8E5DF] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>Ethical botanical sourcing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>Zero synthetic heavy adulterants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>Support for traditional agricultural roots</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link to="/good-herb" className="text-xs font-bold text-[#0F2E22] hover:text-[#C5A869] inline-flex items-center gap-1">
                  <span>Explore Well within</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* PHA Pallets */}
            <div className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#E8E5DF] flex flex-col justify-between hover:border-[#8C6D23] transition group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF8E1] text-[#7A5800] flex items-center justify-center mb-6">
                  <Boxes className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7A5800] block mb-1">
                  2. Industry
                </span>
                <h3 className="text-2xl font-bold font-display text-[#0F2E22] mb-3">
                  PHA Pallets (Manufacturing)
                </h3>
                <p className="text-sm text-[#4A5550] leading-relaxed mb-6">
                  Building material-handling pallets designed for multi-cycle durability. Longer pallet lifespans directly reduce freight damage, eliminate single-trip disposal waste, and promote standardized pooling efficiency.
                </p>

                <ul className="space-y-2 text-xs text-[#2F3D35] border-t border-[#E8E5DF] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>High-durability structural joinery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>Reduced transit product spoilage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>Planned repair and recycling compatibility</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link to="/pallets" className="text-xs font-bold text-[#0F2E22] hover:text-[#C5A869] inline-flex items-center gap-1">
                  <span>Explore Pallets</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* EV Battery Recycling */}
            <div className="p-8 rounded-3xl bg-[#FBF9F5] border border-[#E8E5DF] flex flex-col justify-between hover:border-[#00796B] transition group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E0F2F1] text-[#004D40] flex items-center justify-center mb-6">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#004D40] block mb-1">
                  3. Planet
                </span>
                <h3 className="text-2xl font-bold font-display text-[#0F2E22] mb-3">
                  EV Battery Recycling (Circularity)
                </h3>
                <p className="text-sm text-[#4A5550] leading-relaxed mb-6">
                  Directly neutralizing hazardous end-of-life battery cells and recovering strategic minerals (Lithium, Nickel, Cobalt, Copper). Reduces environmental burdens while powering cleaner mobility loops.
                </p>

                <ul className="space-y-2 text-xs text-[#2F3D35] border-t border-[#E8E5DF] pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>Hazard diversion from Indian landfills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>Critical secondary mineral recovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span>Closed-loop clean mobility lifecycle</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link to="/ev-battery-recycling" className="text-xs font-bold text-[#0F2E22] hover:text-[#C5A869] inline-flex items-center gap-1">
                  <span>Explore Recycling</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. VISUAL CIRCULAR-ECONOMY DIAGRAM */}
      <section id="circular-model" className="py-24 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            eyebrow="The Closed Loop"
            title="Circular-Economy Flow Architecture"
            subtitle="Visualizing how resources flow through our business verticals toward sustainable recovery."
          />

          {/* Sequential 5-Stage Diagram */}
          <div className="relative max-w-5xl mx-auto">
            
            {/* Visual connector line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#C5A869]/30 -translate-y-6 z-0"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {lifecycleSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#E8E5DF] shadow-sm hover:shadow-md transition text-center flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#0F2E22] text-[#C5A869] flex items-center justify-center mx-auto mb-4 font-bold text-sm shadow-md">
                      {step.step}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6D23] bg-[#FFF8E1] px-2 py-0.5 rounded-full inline-block mb-2">
                      {step.badge}
                    </span>
                    <h4 className="text-xl font-bold font-display text-[#0F2E22] mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#5C5852] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  {idx < lifecycleSteps.length - 1 && (
                    <div className="lg:hidden pt-4 text-[#C5A869] flex justify-center">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Loop Arrow Callout */}
            <div className="mt-12 p-6 rounded-2xl bg-[#0F2E22] text-white text-center border border-[#184232] max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A869] mb-1">
                <Recycle className="w-4 h-4" />
                <span>Continuous Closed-Loop Philosophy</span>
              </div>
              <p className="text-xs text-[#C7D4CD] leading-relaxed">
                Resources → Production → Use → Recovery → Responsible Future. Each cycle decreases dependency on raw virgin mining and safeguards the regional ecology of Karnataka.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. LONG-TERM ENVIRONMENTAL RESPONSIBILITY */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block">
                Corporate Governance
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F2E22] leading-tight">
                Sustainable Business as Long-Term Value
              </h2>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                Balaji Essentials operates with a multi-decade horizon. We recognize that businesses prioritizing resource efficiency, fair labor, and ecological preservation generate far greater resilience against regulatory changes and resource scarcity.
              </p>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                In Vijayapura, we strive to build local industrial capacity that balances economic vitality with environmental protection—empowering modern industries while preserving the planet for the generations that follow.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FBF9F5] border border-[#E8E5DF] space-y-6">
                <h4 className="text-lg font-bold font-display text-[#0F2E22]">
                  Core Environmental Commitments:
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0F2E22] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#0F2E22] uppercase tracking-wide">Statutory Compliance</h5>
                      <p className="text-xs text-[#5C5852] mt-0.5">Strict adherence to State (KSPCB) and Central (CPCB) pollution control frameworks.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0F2E22] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#0F2E22] uppercase tracking-wide">Zero Environmental Greenwashing</h5>
                      <p className="text-xs text-[#5C5852] mt-0.5">All certifications and performance metrics are published only upon verified commercial clearance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0F2E22] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#0F2E22] uppercase tracking-wide">Community Stewardship</h5>
                      <p className="text-xs text-[#5C5852] mt-0.5">Prioritizing safety, vocational development, and clean operations across Vijayapura, Karnataka.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <CTA
        headline="Building Responsible Businesses for a Better Tomorrow."
        description="Connect with Balaji Essentials to learn more about our sustainability framework or explore partnership opportunities across our business verticals."
        primaryBtnText="Contact Corporate Office"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Businesses"
        secondaryBtnLink="/businesses"
      />
    </>
  );
}
