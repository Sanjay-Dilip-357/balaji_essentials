import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Home, Building2, Mail } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 Page Not Found | Balaji Essentials"
        description="The requested page could not be found on the official Balaji Essentials portal."
      />

      <section className="min-h-[75vh] flex items-center justify-center bg-[#FBF9F5] py-20 px-4">
        <div className="max-w-lg w-full text-center bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E5DF] shadow-lg">
          
          <div className="w-16 h-16 rounded-2xl bg-[#0F2E22] text-[#C5A869] flex items-center justify-center mx-auto mb-6 shadow-md font-bold">
            <ShieldCheck className="w-9 h-9" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] block mb-2 font-mono">
            Error 404 · Page Not Found
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#0F2E22] mb-4">
            Document Not Found
          </h1>

          <p className="text-sm text-[#5C5852] leading-relaxed mb-8">
            The page or document you are trying to access does not exist or has been relocated within the Balaji Essentials portal.
          </p>

          <div className="space-y-3">
            <Link
              to="/"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0F2E22] hover:bg-[#184232] text-white text-xs font-semibold uppercase tracking-wider transition shadow-sm"
            >
              <Home className="w-4 h-4 text-[#C5A869]" />
              <span>Return to Home</span>
            </Link>

            <Link
              to="/businesses"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#FBF9F5] hover:bg-[#E8E5DF] text-[#0F2E22] border border-[#E8E5DF] text-xs font-semibold uppercase tracking-wider transition"
            >
              <Building2 className="w-4 h-4 text-[#8C6D23]" />
              <span>Explore Our Businesses</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
