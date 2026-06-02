import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  useScrollAnimation();
  const sections = [
    {
      num: "1",
      title: "Introduction",
      content: `Welcome to Beacon Indica. This Refund Policy describes the terms and conditions governing payments, program fees, and refund requests made towards our educational initiatives, accelerator models, and startup support cohorts.\n\nBeacon Indica delivers premium, cohort-based learning environments, expert-led mentorship, and direct campus venture studio access. To maintain the quality of our cohorts, we structure program access and seat allocation under standard guidelines. Please review this document carefully before initiating any payment.`
    },
    {
      num: "2",
      title: "Program Fees",
      content: `Beacon Indica operates multiple pathways for founders, students, and early-stage startup builders:\n\nGenesis Program: This is our hands-on flagship venture-building program. It involves specialized curriculum, intensive mentorship slots, and dedicated ecosystem support, which requires a participation fee upon enrollment.\n\nFellowship and Accelerator Programs: These programs are highly selective, performance-driven pathways designed to support advanced startup builds. They operate with an interview/evaluation selection process and have no upfront fees for chosen participants.`
    },
    {
      num: "3",
      title: "Refund Eligibility",
      content: `We understand that plans can change. You are eligible to request a refund of your program fee only if you satisfy both of the following criteria:\n\n1. The written refund request must be submitted within 7 calendar days of your payment date.\n\n2. The request must be submitted and received before the official start date of the enrolled cohort or program.`
    },
    {
      num: "4",
      title: "Non-Refundable Cases",
      content: `Refund requests will not be accepted or processed under any of the following circumstances:\n\n1. If the request is made after 7 calendar days from the date the payment was completed.\n\n2. If the enrolled program or cohort has already officially started (regardless of whether you attended the sessions).\n\n3. In cases of change of mind, scheduling conflicts, academic exams, team departures, or voluntary withdrawal after the eligibility window.\n\n4. For partial payments, advances, registration fees, or installment dues outside the standard 7-day period.`
    },
    {
      num: "5",
      title: "How to Request",
      content: `To request a refund, please send a written email request directly to our admissions team at careers@beaconindica.com.\n\nTo help us verify and process your request quickly, your email must include the following details:\n\n- Your Full Name\n- Enrolled Program Name (e.g. Genesis Program Cohort 1)\n- Original Payment Date\n- Payment Reference ID / Transaction Receipt\n- Reason for Refund Request`
    },
    {
      num: "6",
      title: "Processing Time",
      content: `Once a valid refund request is received and verified to meet all eligibility requirements, we will initiate the process.\n\nRefunds are approved at the sole discretion of Beacon Indica. Approved refunds are processed back to the original payment source within 7-10 business days. Please note that credit card processors, payment gateways, or banking institutions may take additional processing days to post the funds to your account.`
    },
    {
      num: "7",
      title: "Contact Information",
      content: `For any queries, billing issues, payment clarifications, or refund requests, please contact us directly at:\n\nAdmissions & Billing Email: careers@beaconindica.com\n\nGeneral Support: enquiry@beaconindica.com\n\nBeacon Indica, India.`
    }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-3 flex items-center gap-2 text-sm text-on-surface-variant">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="font-mono-label text-[11px]">Legal</span>
          <span>/</span>
          <span className="text-primary font-medium">Refund Policy</span>
        </div>
      </div>

      <div className="bg-surface min-h-screen">
        <div className="max-w-[860px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div data-animate="fade-up">
            <p className="font-mono-label text-accent text-xs tracking-widest uppercase mb-3">Legal Documentation</p>
            <h1 className="text-[36px] md:text-[52px] font-extrabold tracking-tight mb-3">Refund Policy</h1>
            <p className="text-on-surface-variant text-sm mb-12">Last Updated: June 2026</p>
          </div>

          <div className="bg-surface-container border border-outline-variant rounded-2xl p-6 mb-12" data-animate="fade-up">
            <p className="text-on-surface text-[15px] leading-relaxed">
              At Beacon Indica, we provide access to intensive founder training and campus venture studio opportunities. This policy details the terms governing our program fees, refund eligibility windows, and payment dispute guidelines.
            </p>
          </div>

          <div className="space-y-8" data-animate="stagger">
            {sections.map((s) => (
              <div key={s.num} className="border-b border-outline-variant pb-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">{s.num}</span>
                  <div>
                    <h2 className="text-[17px] font-bold text-on-surface mb-3">{s.title}</h2>
                    {s.content.split('\n\n').map((para, i) => (
                      <p key={i} className="text-on-surface-variant text-[14px] leading-relaxed mb-3">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div data-animate="fade-up" className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-accent transition-colors"
            >
              ← Back to Home
            </Link>
            <p className="mt-8 text-xs text-on-surface-variant">© 2026 Beacon Indica. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
