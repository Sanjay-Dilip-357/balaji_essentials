import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Leaf, 
  Boxes, 
  BatteryCharging, 
  CheckCircle2, 
  Compass, 
  HeartHandshake, 
  Sparkles, 
  Eye, 
  TrendingUp, 
  MapPin,
  Info
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import BusinessCard from '../components/BusinessCard';
import CTA from '../components/CTA';

export default function Home() {
  const values = [
    {
      name: 'Quality',
      desc: 'Uncompromising standards across all formulations, materials, and processes.',
      icon: <Sparkles className="w-5 h-5 text-[#C5A869]" />
    },
    {
      name: 'Responsibility',
      desc: 'Commitment to ethical practices, safety, community trust, and environmental stewardship.',
      icon: <HeartHandshake className="w-5 h-5 text-[#C5A869]" />
    },
    {
      name: 'Innovation',
      desc: 'Bridging heritage knowledge and modern industrial technology to solve emerging needs.',
      icon: <Compass className="w-5 h-5 text-[#C5A869]" />
    },
    {
      name: 'Transparency',
      desc: 'Authentic communications, verified processes, and dependable corporate governance.',
      icon: <Eye className="w-5 h-5 text-[#C5A869]" />
    },
    {
      name: 'Long-term Value Creation',
      desc: 'Building durable enterprises designed to benefit generations of people, industry, and planet.',
      icon: <TrendingUp className="w-5 h-5 text-[#C5A869]" />
    }
  ];

  return (
    <>
      <SEO
        title="Balaji Essentials | Essentials for People. Industry. Planet."
        description="Balaji Essentials is a diversified enterprise based in Vijayapura, Karnataka, developing businesses across wellness, sustainable manufacturing and clean-energy recycling."
      />

      {/* 1. HERO SECTION - MATCHING DEVELOPMENT BRIEF */}
      <section className="relative bg-[#0F2E22] text-[#FBF9F5] py-24 sm:py-32 border-b border-[#184232] overflow-hidden">
        {/* Subtle background ambient overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt="Balaji Essentials Corporate Enterprise Vision"
            className="w-full h-full object-cover filter mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#081812] via-[#0F2E22]/95 to-[#0F2E22]/85"></div>

        {/* Ambient Gold Glow */}
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-[#C5A869]/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Corporate Location Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#184232] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-widest text-[#E8D8B0] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C5A869] animate-pulse"></span>
              <span className="font-bold tracking-wider">BALAJI ESSENTIALS</span>
              <span className="text-[#C5A869]">•</span>
              <span className="flex items-center gap-1 text-[#A3B3AA]">
                <MapPin className="w-3.5 h-3.5 text-[#C5A869]" /> Vijayapura, Karnataka
              </span>
            </div>

            {/* Main Statement */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Building healthier lives, smarter industries, and a more sustainable future.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#C7D4CD] leading-relaxed mb-10 font-light max-w-2xl">
              Balaji Essentials is a diversified enterprise based in Vijayapura, Karnataka, developing businesses across wellness, sustainable manufacturing and clean-energy recycling.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/businesses"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#C5A869] text-[#0F2E22] hover:bg-[#D4BA7D] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#184232] text-white hover:bg-[#20523e] border border-[#C5A869]/30 font-semibold text-xs uppercase tracking-wider transition-all duration-200"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Corporate Line */}
            <div className="mt-12 pt-6 border-t border-[#184232] flex items-center gap-3 text-xs sm:text-sm text-[#A3B3AA]">
              <span className="text-[#C5A869] font-bold uppercase tracking-wider">Corporate Line:</span>
              <span className="italic font-display text-white text-base">“Essentials for People. Industry. Planet.”</span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. HOMEPAGE INTRO (FROM DEVELOPMENT BRIEF) */}
      <section className="py-16 bg-[#F6F4ED] border-b border-[#E2DED5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block mb-3">
            Parent Enterprise Mandate
          </span>
          <p className="text-lg sm:text-xl md:text-2xl text-[#0F2E22] font-display font-medium leading-relaxed max-w-4xl mx-auto">
            “Our businesses are built around practical needs and long-term responsibility. From everyday wellness products to industrial material-handling solutions and circular-energy initiatives, Balaji Essentials aims to create dependable offerings for people, businesses and the environment.”
          </p>
          <div className="mt-4 text-xs uppercase tracking-widest text-[#706E6B] font-semibold">
            Headquartered in Vijayapura, Karnataka
          </div>
        </div>
      </section>

      {/* 3. THREE BUSINESS CARDS (Well within, PHA PALLETS, EV BATTERY RECYCLING) */}
      <section className="py-24 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            eyebrow="Core Verticals"
            title="Our Businesses"
            subtitle="Balaji Essentials operates across three focused verticals, each maintaining a distinct identity under a shared corporate governance model."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Card 1: Well within */}
            <BusinessCard
              name="Well within"
              slug="good-herb"
              type="Ayurveda Wellness"
              description="A contemporary wellness brand inspired by traditional Ayurveda and designed for modern lifestyles."
              imageUrl="/assets/images/good_herb_hero_bottles.jpg"
              ctaText="Explore Well within →"
              to="/good-herb"
              highlights={[
                'Classical Ayurvedic botanical principles',
                'Holistic non-medical wellness categories',
                'Thoughtful formulations for modern daily living'
              ]}
            />

            {/* Card 2: PHA Pallets Manufacturing */}
            <BusinessCard
              name="PHA Pallets Manufacturing"
              slug="pha-pallets"
              type="Industrial Manufacturing"
              description="Pallet solutions for industrial, warehousing, logistics, manufacturing and export applications."
              imageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              ctaText="Explore Pallets →"
              to="/pallets"
              highlights={[
                'Reliable pallets for warehousing and logistics',
                'Standard footprints & custom dimension options',
                'Built for heavy-duty material handling and export'
              ]}
            />

            {/* Card 3: EV Battery Recycling */}
            <BusinessCard
              name="EV Battery Recycling"
              slug="ev-battery-recycling"
              type="Circular Clean Energy"
              description="A Vijayapura-based circular-energy initiative focused on responsible battery collection, processing and material recovery."
              imageUrl="https://images.unsplash.com/photo-1558441719-aa34bbe5f347?auto=format&fit=crop&w=1200&q=80"
              ctaText="Explore Recycling →"
              to="/ev-battery-recycling"
              highlights={[
                'Safe aggregation and battery hazard mitigation',
                'Responsible material and mineral recovery',
                'Closed-loop circularity in Karnataka'
              ]}
            />

          </div>

        </div>
      </section>

      {/* 4. ABOUT BALAJI ESSENTIALS (EXACT BRIEF WORDING) */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0EC] text-[#0F2E22] border border-[#0F2E22]/10 text-xs font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]"></span>
                <span>Parent Company</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#0F2E22] leading-tight">
                About Balaji Essentials
              </h2>

              <p className="text-base sm:text-lg text-[#4A5550] leading-relaxed">
                Balaji Essentials is a diversified enterprise from Vijayapura, Karnataka, built around three areas shaping the future: wellness, sustainable manufacturing and clean-energy circularity. Across every business, our approach is guided by quality, responsibility, innovation, transparency and long-term value creation.
              </p>

              {/* Three Strategic Domains */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#E8F5E9] text-[#1B5E20] flex items-center justify-center shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2E22]">1. Wellness (Well within)</h4>
                    <p className="text-xs text-[#5C5852] mt-0.5 leading-relaxed">
                      Bringing classical Ayurveda into contemporary nutritional wellness for healthier daily lives.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FFF8E1] text-[#7A5800] flex items-center justify-center shrink-0 mt-0.5">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2E22]">2. Sustainable Manufacturing (PHA Pallets)</h4>
                    <p className="text-xs text-[#5C5852] mt-0.5 leading-relaxed">
                      Manufacturing reliable material-handling pallets tailored for industrial and export logistics.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF] flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#E0F2F1] text-[#004D40] flex items-center justify-center shrink-0 mt-0.5">
                    <BatteryCharging className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2E22]">3. Clean-Energy Circularity (EV Battery Recycling)</h4>
                    <p className="text-xs text-[#5C5852] mt-0.5 leading-relaxed">
                      Leading responsible end-of-life battery collection, safe handling, and material recovery in Vijayapura.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2E22] hover:text-[#C5A869] transition"
                >
                  <span>Read Full Corporate Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

            {/* Right Column: Values */}
            <div className="lg:col-span-6 bg-[#FBF9F5] rounded-3xl p-8 sm:p-10 border border-[#E8E5DF] shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block mb-1">
                  Guiding Principles
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F2E22]">
                  Company Values
                </h3>
                <p className="text-xs text-[#706E6B] mt-1">
                  Every decision across Balaji Essentials is grounded in these five core commitments.
                </p>
              </div>

              <div className="space-y-4">
                {values.map((val, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E8E5DF] transition hover:border-[#C5A869] hover:shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F4EFE6] flex items-center justify-center shrink-0 mt-0.5">
                        {val.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F2E22]">{val.name}</h4>
                        <p className="text-xs text-[#5C5852] mt-0.5 leading-relaxed">{val.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SUSTAINABILITY & CORPORATE VISION PREVIEW */}
      <section className="py-24 bg-[#0A2017] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#184232] text-[#C5A869] border border-[#C5A869]/30 text-xs font-semibold tracking-widest uppercase mb-4">
              <span>Corporate Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4">
              Essentials for People. Industry. Planet.
            </h2>
            <p className="text-base sm:text-lg text-[#A3B3AA] leading-relaxed">
              Sustainable business is not an afterthought at Balaji Essentials—it is the unifying architectural framework connecting our wellness, manufacturing, and energy recycling initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#0F2E22] border border-[#184232] text-center space-y-4 hover:border-[#C5A869]/50 transition">
              <div className="w-14 h-14 rounded-full bg-[#184232] text-[#C5A869] flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold font-display text-white">People</h3>
              <p className="text-xs sm:text-sm text-[#A3B3AA] leading-relaxed">
                Elevating personal well-being through safe, botanical Ayurvedic wellness formulations created for modern longevity.
              </p>
              <div className="pt-2 text-[11px] text-[#C5A869] uppercase font-bold tracking-wider">
                Well within
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#0F2E22] border border-[#184232] text-center space-y-4 hover:border-[#C5A869]/50 transition">
              <div className="w-14 h-14 rounded-full bg-[#184232] text-[#C5A869] flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold font-display text-white">Industry</h3>
              <p className="text-xs sm:text-sm text-[#A3B3AA] leading-relaxed">
                Empowering industrial manufacturing and supply-chain logistics with dependable, heavy-load material handling pallets.
              </p>
              <div className="pt-2 text-[11px] text-[#C5A869] uppercase font-bold tracking-wider">
                PHA Pallets
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#0F2E22] border border-[#184232] text-center space-y-4 hover:border-[#C5A869]/50 transition">
              <div className="w-14 h-14 rounded-full bg-[#184232] text-[#C5A869] flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold font-display text-white">Planet</h3>
              <p className="text-xs sm:text-sm text-[#A3B3AA] leading-relaxed">
                Closing the resource loop by redirecting end-of-life battery cells away from disposal into responsible circular recovery.
              </p>
              <div className="pt-2 text-[11px] text-[#C5A869] uppercase font-bold tracking-wider">
                EV Battery Recycling
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/sustainability"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#184232] hover:bg-[#20523e] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-wider text-white transition"
            >
              <span>Explore Our Sustainability Framework</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A869]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. STRONG CLOSING CTA */}
      <CTA
        headline="Building Responsible Businesses for a Better Tomorrow."
        description="Balaji Essentials is actively developing its presence across wellness, manufacturing, and clean-energy sectors from Vijayapura, Karnataka. We welcome institutional dialogues and collaborative partnerships."
        primaryBtnText="Explore Our Businesses"
        primaryBtnLink="/businesses"
        secondaryBtnText="Contact Corporate Office"
        secondaryBtnLink="/contact"
      />
    </>
  );
}
