import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Boxes, BatteryCharging, CheckCircle2 } from 'lucide-react';

export default function BusinessCard({
  name,
  slug,
  type,
  description,
  imageUrl,
  ctaText,
  to,
  highlights = [],
  variant = 'default', // 'good-herb' | 'pallets' | 'battery'
}) {
  const getIcon = () => {
    if (slug.includes('herb')) return <Leaf className="w-5 h-5 text-[#2E7D32]" />;
    if (slug.includes('pallet')) return <Boxes className="w-5 h-5 text-[#8C6D23]" />;
    return <BatteryCharging className="w-5 h-5 text-[#00796B]" />;
  };

  const getAccentBorder = () => {
    if (slug.includes('herb')) return 'hover:border-[#2E7D32]/40';
    if (slug.includes('pallet')) return 'hover:border-[#8C6D23]/40';
    return 'hover:border-[#00796B]/40';
  };

  const getBadgeStyle = () => {
    if (slug.includes('herb')) return 'bg-[#E8F5E9] text-[#1B5E20] border-[#C8E6C9]';
    if (slug.includes('pallet')) return 'bg-[#FFF8E1] text-[#7A5800] border-[#FFE082]';
    return 'bg-[#E0F2F1] text-[#004D40] border-[#B2DFDB]';
  };

  return (
    <div className={`group bg-white rounded-2xl border border-[#E8E5DF] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${getAccentBorder()}`}>
      
      {/* Visual Image Header */}
      <div className="relative h-64 overflow-hidden bg-[#F4EFE6]">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border shadow-sm ${getBadgeStyle()}`}>
            {type}
          </span>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shrink-0">
              {getIcon()}
            </div>
            <h3 className="text-2xl font-bold font-display text-white drop-shadow-sm">
              {name}
            </h3>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <p className="text-[#4A5550] text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          {highlights.length > 0 && (
            <div className="mt-5 pt-5 border-t border-[#F0EBE1] space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#706E6B] block">
                Key Strategic Focus:
              </span>
              <ul className="space-y-1.5 text-xs text-[#2F3D35]">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action CTA */}
        <div className="pt-2">
          <Link
            to={to}
            className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#FBF9F5] group-hover:bg-[#0F2E22] group-hover:text-white border border-[#E8E5DF] group-hover:border-[#0F2E22] text-[#0F2E22] font-semibold text-sm transition-all duration-300"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 text-[#C5A869] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </div>
  );
}
