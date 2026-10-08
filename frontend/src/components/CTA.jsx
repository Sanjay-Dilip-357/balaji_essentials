import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTA({
  headline = 'Building Responsible Businesses for a Better Tomorrow.',
  description = 'Balaji Essentials invites institutional partners, industrial clients, and forward-looking distributors to connect with our corporate team in Vijayapura, Karnataka.',
  primaryBtnText = 'Explore Our Businesses',
  primaryBtnLink = '/businesses',
  secondaryBtnText = 'Contact Us',
  secondaryBtnLink = '/contact',
}) {
  return (
    <section className="py-20 bg-[#0F2E22] text-white relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C5A869" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#184232] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-widest text-[#C5A869] mb-6">
          <span>Balaji Essentials · Vijayapura</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          {headline}
        </h2>

        <p className="text-base sm:text-lg text-[#C7D4CD] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryBtnLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#C5A869] text-[#0F2E22] hover:bg-[#D4BA7D] font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to={secondaryBtnLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#184232] text-white hover:bg-[#20523e] border border-[#C5A869]/40 font-semibold text-sm uppercase tracking-wider transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-[#C5A869]" />
            <span>{secondaryBtnText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
