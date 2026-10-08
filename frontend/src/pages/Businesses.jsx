import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Boxes, 
  BatteryCharging, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers,
  Sparkles,
  Truck,
  Recycle,
  Factory
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';

export default function Businesses() {
  const businesses = [
    {
      id: 'good-herb',
      name: 'Well within',
      subtitle: 'Ayurveda-Inspired Modern Wellness',
      eyebrow: 'Wellness Vertical',
      themeBadge: 'bg-[#E8F5E9] text-[#1B5E20] border-[#C8E6C9]',
      accentBg: 'bg-[#F4F9F6]',
      accentBorder: 'border-[#2E7D32]/20',
      icon: <Leaf className="w-6 h-6 text-[#2E7D32]" />,
      description: 'Well within is the wellness vertical under Balaji Essentials, dedicated to bridging centuries-old Ayurvedic botanical principles with the daily rhythms of modern lifestyle. Formulated without unapproved medical claims, focused purely on holistic vitality and balance.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      keyFocus: [
        '9 Core Wellness Categories covering sleep, hair nutrition, gut balance, and mobility',
        'Traditional botanical ingredients honoring classical Ayurveda',
        'Responsible, research-led non-medical product development',
        'Upcoming extensions in maternal wellness and artisanal herbal teas'
      ],
      link: '/good-herb',
      cta: 'Explore Well within & Product Categories →'
    },
    {
      id: 'pha-pallets',
      name: 'PHA Pallets Manufacturing',
      subtitle: 'Industrial & Supply-Chain Pallet Solutions',
      eyebrow: 'Manufacturing Vertical',
      themeBadge: 'bg-[#FFF8E1] text-[#7A5800] border-[#FFE082]',
      accentBg: 'bg-[#FBF8F2]',
      accentBorder: 'border-[#8C6D23]/20',
      icon: <Boxes className="w-6 h-6 text-[#8C6D23]" />,
      description: 'PHA Pallets Manufacturing is an industrial supply-chain initiative developed by Balaji Essentials to manufacture dependable, heavy-duty material-handling pallets tailored for manufacturing plants, warehousing hubs, freight forwarders, and export shippers.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      keyFocus: [
        'Standardized logistics footprints & custom dimensions on request',
        'Built for rigorous load capacities, racking compatibility, and export transit',
        'Quality controls and standardized testing protocols',
        'Dedicated bulk RFQ desk for enterprise procurement teams'
      ],
      link: '/pallets',
      cta: 'Explore Pallets & Request RFQ →'
    },
    {
      id: 'ev-battery-recycling',
      name: 'EV Battery Recycling',
      subtitle: 'Circular Clean-Energy Initiative',
      eyebrow: 'Clean-Energy Vertical',
      themeBadge: 'bg-[#E0F2F1] text-[#004D40] border-[#B2DFDB]',
      accentBg: 'bg-[#F2FAF8]',
      accentBorder: 'border-[#00796B]/20',
      icon: <BatteryCharging className="w-6 h-6 text-[#00796B]" />,
      description: 'Headquartered in Vijayapura, Karnataka, our EV Battery Recycling initiative represents Balaji Essentials’ commitment to resource circularity. Focused on creating a structured, safe, and environmentally compliant ecosystem for collecting and recovering valuable minerals from end-of-life batteries.',
      image: 'https://images.unsplash.com/photo-1558441719-aa34bbe5f347?auto=format&fit=crop&w=1200&q=80',
      keyFocus: [
        'Structured collection and aggregation partnerships across EV networks',
        'Hazard-mitigated safe storage and logistics handling',
        'Material recovery pathways reducing environmental burden',
        'Collaborative partnerships with fleet operators, OEMs, and recyclers'
      ],
      link: '/ev-battery-recycling',
      cta: 'Explore Recycling & Partnership Desk →'
    }
  ];

  return (
    <>
      <SEO
        title="Our Businesses | Balaji Essentials"
        description="Explore the three business verticals of Balaji Essentials: Well within (Modern Ayurveda Wellness), PHA Pallets Manufacturing (Industrial Pallets), and EV Battery Recycling (Circular Energy)."
      />

      {/* Header Banner */}
      <section className="bg-[#0F2E22] text-white py-20 border-b border-[#184232] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#184232] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-widest text-[#C5A869] mb-4">
              <span>Diversified Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
              Our Businesses
            </h1>
            <p className="text-lg sm:text-xl text-[#C7D4CD] font-light leading-relaxed">
              Three focused enterprises united by one shared parent design system and an unwavering commitment to quality, responsibility, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Intro */}
      <section className="py-16 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#0F2E22] mb-3">
            Synergistic Enterprise Architecture
          </h2>
          <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
            Each business under Balaji Essentials operates with specialized industry focus while drawing on parent company governance, ethical compliance, and regional execution in Karnataka.
          </p>
        </div>
      </section>

      {/* Alternating Business Sections */}
      <section className="py-20 bg-white space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {businesses.map((biz, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div 
                key={biz.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:grid-flow-dense' : ''
                }`}
              >
                
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:col-start-7' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8E5DF] bg-[#F4EFE6] group">
                    <img
                      src={biz.image}
                      alt={biz.name}
                      className="w-full h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border shadow-sm ${biz.themeBadge}`}>
                        {biz.eyebrow}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="text-xs uppercase tracking-widest text-[#C5A869] font-bold block mb-1">
                        Vertical {index + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display">
                        {biz.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:col-start-1' : ''}`}>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E5DF] shadow-sm flex items-center justify-center shrink-0">
                      {biz.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F2E22]">
                        {biz.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6D23]">
                        {biz.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed">
                    {biz.description}
                  </p>

                  {/* Strategic Focus Box */}
                  <div className={`p-6 rounded-2xl ${biz.accentBg} border ${biz.accentBorder} space-y-3`}>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2E22]">
                      Key Strategic Capabilities & Focus:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#3E4A43]">
                      {biz.keyFocus.map((focus, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary CTA to dedicated page */}
                  <div className="pt-2">
                    <Link
                      to={biz.link}
                      className="inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-[#0F2E22] hover:bg-[#184232] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow"
                    >
                      <span>{biz.cta}</span>
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* Bottom CTA */}
      <CTA
        headline="Building Responsible Businesses for a Better Tomorrow."
        description="Learn how our three verticals operate synergistically under Balaji Essentials to deliver essentials for people, industry, and the planet."
        primaryBtnText="Contact Corporate Office"
        primaryBtnLink="/contact"
        secondaryBtnText="Read About Us"
        secondaryBtnLink="/about"
      />
    </>
  );
}
