import { Award, CheckCircle2 } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center">
      <section
        aria-labelledby="completion-title"
        className="w-full rounded-2xl border border-green-100 bg-white p-8 text-center shadow-sm sm:p-12"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-[#1a6b3c]">
          <CheckCircle2 size={40} aria-hidden="true" />
        </div>

        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#f0f7f3] px-4 py-2 text-sm font-semibold text-[#1a6b3c]">
          <Award size={18} aria-hidden="true" />
          Course completed
        </p>

        <h2
          id="completion-title"
          className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl"
        >
          Congratulations!
        </h2>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-600">
          You have completed your course. Your certificate will be available
          shortly.
        </p>
      </section>
    </div>
  );
}
