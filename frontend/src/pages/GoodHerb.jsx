import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Feather, 
  ArrowRight,
  Info,
  CheckCircle2,
  Lock,
  Layers,
  Search,
  Eye,
  FileCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import CTA from '../components/CTA';
import FeedbackModal from '../components/FeedbackModal';
import api from '../services/api';

export default function GoodHerb() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  // Enquiry modal state
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ isOpen: false, type: 'success', title: '', message: '' });

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await api.getGoodHerbProducts();
        setProducts(data);
      } catch (err) {
        console.error('Failed to load Well within products:', err);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const categories = [
    'All',
    'Sleep & relaxation',
    'Hair nutrition',
    'Digestive wellness',
    'Beauty & skin support',
    'Performance & vitality',
    "Women's wellness",
    'Daily wellness / immunity',
    'Healthy ageing',
    'Bone nutrition'
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleOpenEnquiry = (productName = '') => {
    setEnquiryProduct(productName);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company_name: '',
      message: productName 
        ? `I would like to enquire regarding institutional details or trade distribution for Well within - ${productName}.`
        : 'I would like to enquire about the Well within wellness portfolio under Balaji Essentials.'
    });
    setEnquiryOpen(true);
  };

  const handleSubmitEnquiry = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.submitGeneralEnquiry({
        name: formData.name,
        company_name: formData.company_name || null,
        email: formData.email,
        phone: formData.phone,
        enquiry_type: 'good_herb',
        message: formData.message
      });
      setEnquiryOpen(false);
      setFeedback({
        isOpen: true,
        type: 'success',
        title: 'Enquiry Received',
        message: 'Thank you for your interest in Well within. Our corporate wellness representative in Vijayapura will review your enquiry and connect with you shortly.'
      });
    } catch (err) {
      setFeedback({
        isOpen: true,
        type: 'error',
        title: 'Submission Failed',
        message: err.message || 'Unable to submit enquiry. Please check your network connection and try again.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Well within | Ancient Wisdom. Modern Wellness."
        description="Well within is the contemporary Ayurveda-inspired wellness brand under Balaji Essentials, Vijayapura, Karnataka. Formulated for modern lifestyles with traditional botanical purity."
      />

      {/* 1. HERO SECTION WITH AUTHENTIC COLLECTION VISUAL */}
      <section className="relative bg-[#0F2E22] text-[#FBF9F5] pt-20 pb-28 border-b border-[#184232] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#184232] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-widest text-[#E8D8B0]">
                <Leaf className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Balaji Essentials Wellness Vertical</span>
              </div>

              <div className="text-xs font-bold tracking-widest uppercase text-[#C5A869]">
                Brand Positioning
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white leading-tight">
                Ancient Wisdom. Modern Wellness.
              </h1>

              <p className="text-base sm:text-lg text-[#C7D4CD] leading-relaxed font-light">
                Well within is the wellness brand under Balaji Essentials, inspired by traditional Ayurvedic knowledge and developed for modern lifestyles. The brand direction combines botanical heritage, contemporary design and clear, approachable wellness categories.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => handleOpenEnquiry('')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#C5A869] text-[#0F2E22] hover:bg-[#D4BA7D] font-bold text-xs uppercase tracking-wider transition shadow-lg"
                >
                  <span>Enquire About Well within</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#184232] text-white hover:bg-[#20523e] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-wider transition"
                >
                  <span>Explore Product Range</span>
                </a>
              </div>
            </div>

            {/* Official Well within Product Image from Reference PDF */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A869]/40 bg-[#163A2B] group">
                <img
                  src="/assets/images/good_herb_hero_bottles.jpg"
                  alt="Ancient Wisdom. Modern Wellness. The Well within Collection"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                />
                <div className="p-4 bg-[#091C15]/90 border-t border-[#184232] flex items-center justify-between text-xs text-[#A3B3AA]">
                  <span className="text-white font-medium">The Well within Collection · Classical Botanical Formulas</span>
                  <span className="text-[#C5A869] font-mono text-[11px]">Balaji Essentials R&D</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Compliance Advisory Notice */}
      <section className="bg-[#F4EFE6] border-b border-[#E8E5DF] py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs text-[#5C5852] text-center">
          <Info className="w-4 h-4 text-[#8C6D23] shrink-0" />
          <span>
            <strong>Official Transparency Notice:</strong> Well within products are formulated based on classical botanical traditions. Well within makes no medical or therapeutic claims. Specific ingredients, batch approvals, and licenses are indicated as placeholders until official regulatory certification.
          </span>
        </div>
      </section>

      {/* 2. BRAND STORY & WEBSITE COPY (FROM BRIEF) */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block mb-2">
              Brand Story & Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0F2E22] mb-4">
              Time-Honoured Ayurveda Meets Modern Thinking
            </h2>
            <p className="text-base sm:text-lg text-[#4A5550] leading-relaxed font-light">
              Well within brings together time-honoured Ayurveda and contemporary wellness thinking to create simple, approachable products for everyday wellbeing. The brand aims to build trust through quality ingredients, transparent communication, thoughtful formulation and responsible product development.
            </p>
          </div>

          {/* R&D Benchmark Portfolio Visual From Brief Page 4 */}
          <div className="mb-16 bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-[#E8E5DF] shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B5E20] block">
                  Reference Portfolio Blueprint
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0F2E22]">
                  Well within Core Wellness Portfolio (R&D Concept + Market Benchmark)
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#1B5E20] text-xs font-semibold border border-[#C8E6C9]">
                R&D Architecture
              </span>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#E8E5DF] shadow-inner bg-white">
              <img
                src="/assets/images/good_herb_rd_portfolio.jpg"
                alt="Well within Core Wellness Portfolio R&D Concept"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-xs text-[#706E6B] mt-3 italic text-center">
              Internal R&D Portfolio Benchmark: Night Mode, Rooted, Gut Reset, Glow Daily, Prime, and Her Balance.
            </p>
          </div>

          {/* Core Brand Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] text-center">
              <div className="w-10 h-10 rounded-full bg-[#E8F5E9] text-[#1B5E20] flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#0F2E22] uppercase tracking-wide">Pure Plants</h4>
              <p className="text-xs text-[#5C5852] mt-1">Ethically sourced, pure botanical herbs.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] text-center">
              <div className="w-10 h-10 rounded-full bg-[#FFF8E1] text-[#7A5800] flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#0F2E22] uppercase tracking-wide">Thoughtful Formulas</h4>
              <p className="text-xs text-[#5C5852] mt-1">Designed specifically for modern daily routines.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] text-center">
              <div className="w-10 h-10 rounded-full bg-[#E0F2F1] text-[#004D40] flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#0F2E22] uppercase tracking-wide">Transparent Trust</h4>
              <p className="text-xs text-[#5C5852] mt-1">Zero unverified therapeutic claims.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] text-center">
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] text-[#8C6D23] flex items-center justify-center mx-auto mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#0F2E22] uppercase tracking-wide">A Brighter You</h4>
              <p className="text-xs text-[#5C5852] mt-1">Holistic wellness that respects internal balance.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PRODUCT / CATEGORY STRUCTURE (FROM BRIEF & API) */}
      <section id="products" className="py-24 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            eyebrow="Category Structure"
            title="9 Core Wellness Categories"
            subtitle="Clear, approachable categories designed for modern daily rituals."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#0F2E22] text-[#FBF9F5] shadow-sm'
                    : 'bg-white text-[#5C5852] hover:bg-[#E8E5DF] border border-[#E8E5DF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          {loading ? (
            <div className="text-center py-20">
              <div className="w-10 h-10 border-4 border-[#C5A869] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-xs uppercase tracking-widest text-[#706E6B]">Loading Well within products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id || prod.slug}
                  className="bg-white rounded-2xl border border-[#E8E5DF] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-56 bg-[#F4EFE6] overflow-hidden">
                    <img
                      src={prod.image_url}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9] shadow-sm">
                        {prod.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold font-display text-white">
                        {prod.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D23] mb-1">
                        Category: {prod.category}
                      </div>
                      <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed">
                        {prod.description}
                      </p>

                      {/* Official Disclosure Badge */}
                      <div className="mt-4 p-3 rounded-lg bg-[#FBF9F5] border border-[#E8E5DF] text-[11px] text-[#706E6B] space-y-1 font-mono">
                        <div>Status: <span className="text-[#0F2E22] font-semibold">[In Formulation Development]</span></div>
                        <div>Dosage/Claims: <span className="text-[#706E6B]">[Subject to Regulatory Approval]</span></div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => setActiveModalProduct(prod)}
                        className="flex-1 py-2.5 rounded-xl bg-[#FBF9F5] hover:bg-[#E8E5DF] text-[#0F2E22] text-xs font-semibold uppercase tracking-wider border border-[#E8E5DF] transition"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleOpenEnquiry(prod.name)}
                        className="flex-1 py-2.5 rounded-xl bg-[#0F2E22] hover:bg-[#184232] text-white text-xs font-semibold uppercase tracking-wider transition"
                      >
                        Enquire
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Future Extensions Section */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0F2E22] to-[#184232] text-white border border-[#C5A869]/30">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A869] block mb-2">
                Pipeline Extensions
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display mb-3">
                Future Extensions
              </h3>
              <p className="text-xs sm:text-sm text-[#C7D4CD] leading-relaxed mb-6">
                In line with our disciplined growth philosophy, Well within has identified two strategic category extensions currently in research review:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#091C15]/70 border border-[#1F4A38]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#E8D8B0] mb-1">
                    <Heart className="w-4 h-4 text-[#C5A869]" />
                    <span>Maternal Wellness</span>
                  </div>
                  <p className="text-xs text-[#A3B3AA]">
                    Gentle, restorative traditional nutritional support.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#091C15]/70 border border-[#1F4A38]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#E8D8B0] mb-1">
                    <Feather className="w-4 h-4 text-[#C5A869]" />
                    <span>Herbal Tea & Infusions</span>
                  </div>
                  <p className="text-xs text-[#A3B3AA]">
                    Mindful whole-leaf botanical infusions for daily sipping.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. QUALITY PHILOSOPHY & RESPONSIBLE PRODUCT DEVELOPMENT */}
      <section className="py-24 bg-white border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            eyebrow="Integrity & Governance"
            title="Quality Philosophy & Responsible Development"
            subtitle="We prioritize rigorous ingredient standards, clear transparency, and compliant communication."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] text-[#1B5E20] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#0F2E22]">Purity & Authenticity</h3>
              <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                Prioritizing authentic botanical herbs without synthetic adulteration, unapproved fillers, or misleading marketing claims.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFF8E1] text-[#7A5800] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#0F2E22]">Thoughtful Formulation</h3>
              <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                Classical texts provide the foundational herbal wisdom, while contemporary testing verifies stability, cleanliness, and safety.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#E8E5DF] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2F1] text-[#004D40] flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-[#0F2E22]">No Medical Claims</h3>
              <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                We respect consumer trust by presenting Well within strictly as everyday nutritional wellness, avoiding unsupported medical assertions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <CTA
        headline="Enquire About Well within"
        description="For distribution inquiries, institutional procurement, or commercial partnership opportunities with Well within, connect with Balaji Essentials in Vijayapura."
        primaryBtnText="Enquire About Well within"
        primaryBtnLink="#products"
        secondaryBtnText="Corporate Desk"
        secondaryBtnLink="/contact"
      />

      {/* PRODUCT DETAILS MODAL */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FBF9F5] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8E5DF] relative">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D23] block mb-1">
                  Well within · {activeModalProduct.category}
                </span>
                <h3 className="text-2xl font-bold font-display text-[#0F2E22]">
                  {activeModalProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-1 rounded-lg text-[#706E6B] hover:bg-[#E8E5DF]"
              >
                ✕
              </button>
            </div>

            <div className="h-44 rounded-xl overflow-hidden mb-4 bg-[#F4EFE6]">
              <img
                src={activeModalProduct.image_url}
                alt={activeModalProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#4A5550] leading-relaxed mb-4">
              {activeModalProduct.description}
            </p>

            <div className="p-3.5 rounded-xl bg-white border border-[#E8E5DF] space-y-2 text-xs text-[#5C5852] font-mono mb-6">
              <div><strong>Formulation Code:</strong> GH-{activeModalProduct.slug.toUpperCase()}</div>
              <div><strong>Ingredients & Dosage:</strong> [Official Specifications Under Filing]</div>
              <div><strong>Pricing & Pack Size:</strong> [Commercial Details Available on Request]</div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const prod = activeModalProduct;
                  setActiveModalProduct(null);
                  handleOpenEnquiry(prod.name);
                }}
                className="w-full py-3 rounded-xl bg-[#0F2E22] hover:bg-[#184232] text-white text-xs font-semibold uppercase tracking-wider transition"
              >
                Enquire About This Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ENQUIRY MODAL */}
      {enquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FBF9F5] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8E5DF] relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D23] block mb-1">
                  Well within Enquiry Desk
                </span>
                <h3 className="text-2xl font-bold font-display text-[#0F2E22]">
                  Enquire About Well within
                </h3>
                {enquiryProduct && (
                  <p className="text-xs text-[#2E7D32] font-semibold mt-1">
                    Product Focus: {enquiryProduct}
                  </p>
                )}
              </div>
              <button
                onClick={() => setEnquiryOpen(false)}
                className="p-1 rounded-lg text-[#706E6B] hover:bg-[#E8E5DF]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitEnquiry} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5DF] bg-white text-sm focus:outline-none focus:border-[#C5A869]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  placeholder="Pharmacy, Retailer or Institutional Distributor"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5DF] bg-white text-sm focus:outline-none focus:border-[#C5A869]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5DF] bg-white text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5DF] bg-white text-sm focus:outline-none focus:border-[#C5A869]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-1">
                  Enquiry Details *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5DF] bg-white text-sm focus:outline-none focus:border-[#C5A869]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-[#0F2E22] hover:bg-[#184232] disabled:opacity-50 text-white text-xs font-semibold uppercase tracking-wider transition shadow-sm"
                >
                  {submitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FEEDBACK MODAL */}
      <FeedbackModal
        isOpen={feedback.isOpen}
        onClose={() => setFeedback({ ...feedback, isOpen: false })}
        type={feedback.type}
        title={feedback.title}
        message={feedback.message}
      />
    </>
  );
}
