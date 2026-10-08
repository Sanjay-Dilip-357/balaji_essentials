import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function FeedbackModal({
  isOpen,
  onClose,
  type = 'success', // 'success' | 'error'
  title,
  message,
  referenceId,
}) {
  if (!isOpen) return null;

  const isSuccess = type === 'success';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FBF9F5] rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#E8E5DF] text-center relative animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#706E6B] hover:bg-[#E8E5DF] transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5 ${
          isSuccess ? 'bg-[#E8F5E9] text-[#1B5E20]' : 'bg-[#FFEBEE] text-[#C62828]'
        }`}>
          {isSuccess ? (
            <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
          ) : (
            <AlertCircle className="w-9 h-9 stroke-[2.2]" />
          )}
        </div>

        <h3 className="text-2xl font-bold font-display text-[#0F2E22] mb-2">
          {title || (isSuccess ? 'Submission Received' : 'Submission Error')}
        </h3>

        <p className="text-sm text-[#5C5852] leading-relaxed mb-6">
          {message}
        </p>

        {referenceId && (
          <div className="mb-6 p-3 rounded-xl bg-[#F4EFE6] border border-[#E8E5DF] inline-block text-xs font-mono text-[#0F2E22]">
            Reference Code: <span className="font-bold text-[#8C6D23]">{referenceId}</span>
          </div>
        )}

        <div>
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#0F2E22] hover:bg-[#184232] text-white text-sm font-semibold uppercase tracking-wider transition shadow-sm"
          >
            Dismiss
          </button>
        </div>

      </div>
    </div>
  );
}
