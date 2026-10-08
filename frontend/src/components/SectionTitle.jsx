export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  theme = 'light', // 'light' | 'dark'
}) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 ${
          isDark 
            ? 'bg-[#184232] text-[#C5A869] border border-[#C5A869]/30' 
            : 'bg-[#E8F0EC] text-[#0F2E22] border border-[#0F2E22]/10'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display mb-4 ${
        isDark ? 'text-white' : 'text-[#0F2E22]'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          isDark ? 'text-[#A3B3AA]' : 'text-[#5C5852]'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
