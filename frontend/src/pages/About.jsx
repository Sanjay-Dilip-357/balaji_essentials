import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Target, 
  Eye, 
  Compass, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  TrendingUp, 
  Layers, 
  Leaf, 
  Boxes, 
  BatteryCharging, 
  ArrowRight,
  Info
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';

export default function About() {
  const values = [
    {
      title: 'Quality',
      desc: 'Unwavering focus on premium quality, precision engineering, and rigorous ingredient sourcing across all operating divisions.',
      icon: <Sparkles className="w-5 h-5 text-[#C5A869]" />
    },
    {
      title: 'Responsibility',
      desc: 'Executing every business activity with profound ethical responsibility toward our employees, customers, society, and the planet.',
      icon: <HeartHandshake className="w-5 h-5 text-[#C5A869]" />
    },
    {
      title: 'Innovation',
      desc: 'Integrating time-tested traditional insights with forward-thinking manufacturing technologies and circular business models.',
      icon: <Compass className="w-5 h-5 text-[#C5A869]" />
    },
    {
      title: 'Transparency',
      desc: 'Upholding integrity in communication, clear governance, authentic claims, and honest institutional relationships.',
      icon: <Eye className="w-5 h-5 text-[#C5A869]" />
    },
    {
      title: 'Long-term Value Creation',
      desc: 'Rejecting short-term compromises in favor of building durable, resilient enterprises that deliver multi-generational value.',
      icon: <TrendingUp className="w-5 h-5 text-[#C5A869]" />
    }
  ];

  return (
    <>
      <SEO
        title="About Us | Balaji Essentials"
        description="Learn about Balaji Essentials, the diversified parent enterprise in Vijayapura, Karnataka, behind Well within, PHA Pallets Manufacturing, and EV Battery Recycling."
      />

      {/* Header Banner */}
      <section className="bg-[#0F2E22] text-white py-20 border-b border-[#184232] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#184232] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-widest text-[#C5A869] mb-4">
              <span>Parent Enterprise Overview</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
              About Balaji Essentials
            </h1>
            <p className="text-lg sm:text-xl text-[#C7D4CD] font-light leading-relaxed">
              A diversified enterprise anchored in Vijayapura, Karnataka, built to drive meaningful advancement across personal wellness, sustainable manufacturing, and circular energy.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Company Overview Section */}
      <section className="py-24 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block">
                Company Introduction
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F2E22] leading-tight">
                Grounded in Vijayapura. Focused on Sustainable Progress.
              </h2>
              <p className="text-[#4A5550] text-base leading-relaxed">
                Balaji Essentials is a diversified corporate enterprise headquartered in the historic commercial hub of <strong>Vijayapura, Karnataka</strong>. As the unified parent organization, Balaji Essentials establishes strategic direction, operational governance, and capital allocation across three dedicated business verticals.
              </p>
              <p className="text-[#4A5550] text-base leading-relaxed">
                Rather than pursuing rapid, speculative expansion, our enterprise was conceived with a deliberate mandate: to identify fundamental human and industrial necessities and build high-integrity businesses that serve them with quality, responsibility, and sustainable longevity.
              </p>
              <p className="text-[#4A5550] text-base leading-relaxed">
                From holistic wellness products formulated with botanical authenticity to heavy-duty logistics pallets and critical battery material recovery, Balaji Essentials embodies the convergence of tradition, manufacturing strength, and modern environmental stewardship.
              </p>

              {/* Location Highlight Badge */}
              <div className="p-4 rounded-xl bg-white border border-[#E8E5DF] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#E8F0EC] text-[#0F2E22] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C5A869]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F2E22]">Corporate Headquarters</h4>
                  <p className="text-xs text-[#706E6B]">
                    Vijayapura, Karnataka, India · [Registered Office Address Placeholder]
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8E5DF] bg-[#F4EFE6]">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Balaji Essentials Corporate Vision"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D23] uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-4 h-4 text-[#C5A869]" />
                    <span>Parent Brand Mandate</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#0F2E22]">
                    “Essentials for People. Industry. Planet.”
                  </h3>
                  <p className="text-xs text-[#706E6B] mt-2 leading-relaxed">
                    Balaji Essentials operates with transparent corporate disclosures. All prospective operational milestones and institutional metrics are maintained with high compliance integrity.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Parent-Company Architecture Tree */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            eyebrow="Corporate Structure"
            title="One Trusted Parent Company. Three Specialized Verticals."
            subtitle="Balaji Essentials provides unified governance, quality assurance, and sustainable vision across distinct business divisions."
          />

          {/* Architecture Visual Diagram */}
          <div className="max-w-4xl mx-auto">
            
            {/* Top Level: Parent */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F2E22] text-white text-center shadow-md border border-[#184232] relative">
              <div className="w-12 h-12 rounded-xl bg-[#C5A869] text-[#0F2E22] flex items-center justify-center mx-auto mb-3 font-bold">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#C5A869] font-bold block mb-1">
                Parent Enterprise
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider">
                BALAJI ESSENTIALS
              </h3>
              <p className="text-xs sm:text-sm text-[#A3B3AA] mt-2 max-w-lg mx-auto">
                Headquarters: Vijayapura, Karnataka · Strategic Direction, Governance & Capital Stewardship
              </p>
            </div>

            {/* Connecting Visual Lines */}
            <div className="h-10 w-0.5 bg-[#C5A869] mx-auto hidden sm:block"></div>
            <div className="w-3/4 mx-auto border-t-2 border-[#C5A869] hidden sm:block"></div>

            {/* Three Verticals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 sm:pt-4">
              
              {/* Vertical 1: Well within */}
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] text-center hover:border-[#2E7D32] transition hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-[#E8F5E9] text-[#1B5E20] flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B5E20] block mb-1">
                  Vertical 1 · Wellness
                </span>
                <h4 className="text-xl font-bold font-display text-[#0F2E22]">Well within</h4>
                <p className="text-xs text-[#5C5852] mt-2 leading-relaxed">
                  Ayurveda-inspired modern wellness formulations for restorative daily living.
                </p>
                <div className="mt-4 pt-4 border-t border-[#E8E5DF]">
                  <Link to="/good-herb" className="text-xs font-semibold text-[#0F2E22] hover:text-[#C5A869] inline-flex items-center gap-1">
                    <span>View Brand</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Vertical 2: PHA Pallets */}
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] text-center hover:border-[#8C6D23] transition hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-[#FFF8E1] text-[#7A5800] flex items-center justify-center mx-auto mb-3">
                  <Boxes className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A5800] block mb-1">
                  Vertical 2 · Manufacturing
                </span>
                <h4 className="text-xl font-bold font-display text-[#0F2E22]">PHA Pallets</h4>
                <p className="text-xs text-[#5C5852] mt-2 leading-relaxed">
                  Industrial-grade pallet manufacturing for warehousing, logistics, and export applications.
                </p>
                <div className="mt-4 pt-4 border-t border-[#E8E5DF]">
                  <Link to="/pallets" className="text-xs font-semibold text-[#0F2E22] hover:text-[#C5A869] inline-flex items-center gap-1">
                    <span>View Manufacturing</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Vertical 3: EV Battery Recycling */}
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] text-center hover:border-[#00796B] transition hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-[#E0F2F1] text-[#004D40] flex items-center justify-center mx-auto mb-3">
                  <BatteryCharging className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#004D40] block mb-1">
                  Vertical 3 · Circular Energy
                </span>
                <h4 className="text-xl font-bold font-display text-[#0F2E22]">EV Battery Recycling</h4>
                <p className="text-xs text-[#5C5852] mt-2 leading-relaxed">
                  Responsible end-of-life battery aggregation and clean mineral recovery initiative in Vijayapura.
                </p>
                <div className="mt-4 pt-4 border-t border-[#E8E5DF]">
                  <Link to="/ev-battery-recycling" className="text-xs font-semibold text-[#0F2E22] hover:text-[#C5A869] inline-flex items-center gap-1">
                    <span>View Recycling</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Vision, Mission & Philosophy */}
      <section className="py-24 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E5DF] shadow-sm relative">
              <div className="w-12 h-12 rounded-xl bg-[#E8F0EC] text-[#0F2E22] flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#C5A869]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block mb-2">
                Our Corporate Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F2E22] mb-4">
                Pioneering Resilient Systems for Tomorrow
              </h3>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                To be recognized across India as a benchmark diversified enterprise that successfully demonstrates how traditional heritage, manufacturing excellence, and circular green practices can harmoniously coexist to uplift communities, industries, and ecosystems.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E5DF] shadow-sm relative">
              <div className="w-12 h-12 rounded-xl bg-[#E8F0EC] text-[#0F2E22] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-[#C5A869]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block mb-2">
                Our Corporate Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F2E22] mb-4">
                Delivering Essentials with Integrity
              </h3>
              <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                To create reliable, transparent, and long-lasting value across each of our operating businesses: formulating pure botanical wellness under Well within, engineering robust pallet solutions under PHA Pallets, and advancing safe battery circularity in Vijayapura.
              </p>
            </div>

          </div>

          {/* Business Philosophy Callout */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#0F2E22] text-white border border-[#184232]">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A869] block mb-2">
                Business Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display mb-4">
                Disciplined Stewardship & Responsible Growth
              </h3>
              <p className="text-sm sm:text-base text-[#C7D4CD] leading-relaxed mb-4">
                At Balaji Essentials, we believe true corporate endurance is measured by the tangible benefit generated for all stakeholders. We deliberately avoid hype-driven claims, unsubstantiated certifications, or superficial positioning. 
              </p>
              <p className="text-sm sm:text-base text-[#C7D4CD] leading-relaxed">
                Whether manufacturing a physical pallet designed to withstand heavy industrial transport or handling sensitive lithium-ion cells for recycling, every operation is guided by safety, procedural adherence, and environmental responsibility.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            eyebrow="Ethical Framework"
            title="Core Values That Guide Us"
            subtitle="The non-negotiable principles embedded into the culture and operational standards of Balaji Essentials."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div 
                key={i}
                className="p-6 sm:p-8 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] hover:border-[#C5A869] transition duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5DF] flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold font-display text-[#0F2E22] mb-2">{v.title}</h4>
                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">{v.desc}</p>
              </div>
            ))}

            {/* Corporate Transparency Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F2E22] text-white border border-[#184232] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#184232] text-[#C5A869] flex items-center justify-center mb-4 font-bold">
                  <Info className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-display text-white mb-2">Corporate Compliance Note</h4>
                <p className="text-xs text-[#A3B3AA] leading-relaxed">
                  In strict compliance with transparency standards, Balaji Essentials does not publish unverified metrics or unsupported corporate statistics. All specifications and parameters are updated as formal licensing and commissioning occur.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#184232] text-[11px] text-[#C5A869] font-mono">
                Status: [Operational Planning & Commissioning Stage]
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Closing CTA */}
      <CTA
        headline="Partner With a Responsible Enterprise"
        description="Whether you are an industrial manufacturer seeking pallets, an EV stakeholder interested in recycling partnerships, or a distributor aligned with botanical wellness, connect with our leadership in Vijayapura."
        primaryBtnText="Get In Touch"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Businesses"
        secondaryBtnLink="/businesses"
      />
    </>
  );
}
