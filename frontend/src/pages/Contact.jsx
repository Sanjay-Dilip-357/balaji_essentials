import { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  Clock, 
  ShieldCheck, 
  Info,
  CheckCircle2,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import FeedbackModal from '../components/FeedbackModal';
import api from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
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
      const res = await api.submitEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim()
      });

      setFeedback({
        isOpen: true,
        type: 'success',
        title: 'Enquiry Received',
        message: 'Your enquiry has been successfully transmitted to Balaji Essentials corporate desk in Vijayapura and recorded in the system.',
        referenceId: `ENQ-${res.id || Date.now().toString().slice(-4)}`
      });

      // Reset
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
      });

    } catch (err) {
      setFeedback({
        isOpen: true,
        type: 'error',
        title: 'Submission Error',
        message: err.message || 'Unable to transmit your enquiry. Please verify required fields and try again.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Balaji Essentials"
        description="Connect with Balaji Essentials corporate headquarters in Vijayapura, Karnataka. Submit inquiries for Well within, PHA Pallets Manufacturing, and EV Battery Recycling."
      />

      {/* Header Banner */}
      <section className="bg-[#0F2E22] text-white py-20 border-b border-[#184232] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#184232] border border-[#C5A869]/30 text-xs font-semibold uppercase tracking-widest text-[#C5A869] mb-4">
              <span>Corporate Desk</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-white mb-6">
              Contact Balaji Essentials
            </h1>
            <p className="text-lg sm:text-xl text-[#C7D4CD] font-light leading-relaxed">
              We welcome institutional inquiries, procurement discussions, supply chain RFQs, and circular energy partnership dialogues from Vijayapura, Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 bg-[#FBF9F5] border-b border-[#E8E5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Corporate Information & Quick CTAs */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white rounded-3xl p-8 border border-[#E8E5DF] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block mb-1">
                    Headquarters
                  </span>
                  <h3 className="text-2xl font-bold font-display text-[#0F2E22]">
                    Balaji Essentials
                  </h3>
                  <p className="text-xs text-[#706E6B] mt-1">
                    Parent Enterprise Operating Across Wellness, Pallet Manufacturing & Clean Energy
                  </p>
                </div>

                <div className="space-y-5 text-sm text-[#4A5550]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F0EC] text-[#0F2E22] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-[#C5A869]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-[#0F2E22]">Registered Location</h4>
                      <p className="text-xs sm:text-sm text-[#5C5852] mt-0.5 leading-relaxed font-mono">
                        Vijayapura, Karnataka, India<br />
                        [Official Corporate Address Placeholder]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F0EC] text-[#0F2E22] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-[#C5A869]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-[#0F2E22]">Official Email</h4>
                      <p className="text-xs sm:text-sm text-[#5C5852] mt-0.5 font-mono">
                        [info@balajiessentials.com (Placeholder)]
                      </p>
                      <a
                        href="mailto:info@balajiessentials.com"
                        className="text-xs font-bold text-[#0F2E22] hover:text-[#C5A869] mt-1 inline-block"
                      >
                        Send Email Notice →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F0EC] text-[#0F2E22] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-[#C5A869]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-[#0F2E22]">Corporate Phone Desk</h4>
                      <p className="text-xs sm:text-sm text-[#5C5852] mt-0.5 font-mono">
                        [+91 (Placeholder Phone Desk)]
                      </p>
                      <span className="text-[11px] text-[#706E6B] block">Mon - Fri: 9:30 AM – 6:00 PM IST</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action CTAs */}
                <div className="pt-4 border-t border-[#E8E5DF] space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#706E6B] block">
                    Quick Interaction Channels:
                  </span>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="mailto:info@balajiessentials.com"
                      className="p-3 rounded-xl bg-[#FBF9F5] hover:bg-[#E8E5DF] border border-[#E8E5DF] text-center text-xs font-semibold text-[#0F2E22] flex items-center justify-center gap-1.5 transition"
                    >
                      <Mail className="w-4 h-4 text-[#C5A869]" />
                      <span>Email CTA</span>
                    </a>

                    <div className="p-3 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF] text-center text-xs font-semibold text-[#0F2E22] flex items-center justify-center gap-1.5 opacity-80">
                      <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
                      <span>WhatsApp [Placeholder]</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Google Maps Visual Location Card */}
              <div className="bg-white rounded-3xl p-6 border border-[#E8E5DF] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-[#0F2E22]">
                    Location: Vijayapura, Karnataka
                  </h4>
                  <span className="text-[11px] font-mono text-[#8C6D23]">[Google Maps Placeholder]</span>
                </div>

                <div className="relative h-48 rounded-2xl overflow-hidden bg-[#E8E5DF] border border-[#DCD8D0] flex items-center justify-center text-center p-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-[#0F2E22] text-[#C5A869] flex items-center justify-center mx-auto shadow-md">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-[#0F2E22]">Vijayapura District, Karnataka 586101</div>
                    <p className="text-[11px] text-[#706E6B] max-w-xs">
                      [Interactive Google Maps embed will be linked here following official premises registration]
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Contact & Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E5DF] shadow-lg">
                
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block mb-1">
                    Direct Corporate Transmission
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0F2E22]">
                    Submit an Official Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5852] mt-1">
                    Please submit your enquiry details and our corporate desk will review and get in touch with you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Standard Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kulkarni"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                      />
                    </div>

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
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                        Subject / Enquiry Type *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        list="enquiry-types"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Select or enter enquiry type..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] text-sm focus:outline-none focus:border-[#C5A869]"
                      />
                      <datalist id="enquiry-types">
                        <option value="General Corporate Enquiry" />
                        <option value="Well within (Ayurveda Wellness)" />
                        <option value="PHA Pallets Manufacturing (Pallet RFQ)" />
                        <option value="EV Battery Recycling (Circularity Partnership)" />
                      </datalist>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F2E22] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify details regarding your enquiry..."
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
                      <span>{submitting ? 'Transmitting Enquiry...' : 'Submit Enquiry'}</span>
                    </button>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

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
