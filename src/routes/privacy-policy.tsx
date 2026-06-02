import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  useScrollAnimation();
  const sections = [
    {
      num: "1",
      title: "Introduction",
      content: `Welcome to Beacon Indica ("Beacon Indica", "we", "our", or "us").\n\nBeacon Indica is committed to protecting the privacy and security of the information shared by students, founders, mentors, investors, partners, colleges, universities, and visitors who interact with our website, programs, and services.\n\nThis Privacy Policy explains how we collect, use, store, process, and protect your information when you visit our website (beaconindica.com), apply to our programs, participate in our venture studio ecosystem, attend our events, or otherwise engage with Beacon Indica.\n\nBy using our website or services, you agree to the practices described in this Privacy Policy.`
    },
    {
      num: "2",
      title: "Information We Collect",
      content: `We collect information directly provided by you, as well as information collected automatically during your website visits.\n\nInformation You Provide Directly: When you fill out application forms, contact us, or engage with our services, we may collect details such as your Full Name, Email Address, Phone Number, College/University/Institution Name, Course and Academic Details, Startup Information, Business Ideas, LinkedIn Profile, Resume/CV, Portfolio Links, and Event Registration details.\n\nNo Payment Data Collection: Beacon Indica does not collect, process, or store credit card details, bank information, or any payment credentials. All payments, where applicable, are handled securely through trusted third-party payment gateways.\n\nInformation Collected Automatically: When you visit our website, we may automatically log standard diagnostic data including your IP Address, Browser Type, Device Information, Operating System, Pages Visited, Session Duration, Referral Sources, and approximate Geographic Location.`
    },
    {
      num: "3",
      title: "How We Use Your Information",
      content: `We process and utilize the collected data to maintain our programs, communicate with users, and ensure platform security.\n\nProgram Management: Evaluating startup applications, assessing cohort submissions, managing Genesis, Fellowship, and Accelerator programs, and communicating updates regarding program structures.\n\nCommunication & Responses: Replying to user inquiries, resolving contact form requests, sending notifications, and sharing calendar events.\n\nEcosystem Operations: Facilitating networking opportunities, pairing founders with relevant mentors or advisors, and coordinating university venture studio activities.\n\nWebsite Improvement: Monitoring website performance metrics, running diagnostics, improving overall user experience, and optimizing interface functionality.\n\nMarketing & Opportunities: Sending out news, newsletters, program announcements, and ecosystem opportunity alerts. Users are free to opt-out or unsubscribe from these communications at any time.`
    },
    {
      num: "4",
      title: "Data Storage & Security",
      content: `Beacon Indica implements reasonable administrative, technical, and organizational safeguards to protect your personal details against unauthorized access, misuse, alteration, disclosure, destruction, or loss.\n\nData is stored securely on servers equipped with modern encryption protocols. We do not sell or trade personal information to third parties.\n\nWe may share information with trusted third-party service providers (such as website hosting providers, analytics platforms, email delivery systems, and operational communication tools) solely to help us operate our website and administer our programs. All such providers are bound by strict confidentiality agreements.`
    },
    {
      num: "5",
      title: "Cookies",
      content: `We use essential cookies and similar tracking technologies to improve website performance, analyze visitor behavior, understand user interface engagement, and monitor website traffic statistics.\n\nCookies are small text files stored locally on your device. These cookies help us compile aggregated data to deliver better services. You can adjust your browser settings to decline cookies, though doing so may prevent certain site features from functioning correctly.`
    },
    {
      num: "6",
      title: "Third Party Links",
      content: `Our website and service portals may contain links to external websites, investor platforms, partner organizations, colleges, universities, or social media networks.\n\nBeacon Indica does not own, control, or operate these third-party websites and is not responsible for their contents, terms, or privacy practices.\n\nWe strongly recommend that you read and understand the privacy statements of any external site you visit.`
    },
    {
      num: "7",
      title: "Your Rights",
      content: `Subject to applicable laws, users have complete rights over their personal data.\n\nYou may request to access the data we have collected, correct any inaccurate or outdated information, restrict the processing of your data, or withdraw your consent.\n\nIf you wish to request the permanent deletion of your data from our systems, please email us directly at admin@beaconindica.com with your registered email and details. We will process your deletion request within standard legal timelines.`
    },
    {
      num: "8",
      title: "Changes to this Policy",
      content: `Beacon Indica reserves the right to update or modify this Privacy Policy periodically to reflect changes in legal requirements or platform operations.\n\nAny modifications will be posted directly on this page with an updated effective date at the top. We will notify users of significant changes by posting a prominent notice on our website or sending an email notification.\n\nContinued use of the website after updates constitutes your formal acceptance of the revised privacy policy.`
    },
    {
      num: "9",
      title: "Contact Information",
      content: `For any privacy-related questions, concerns, clarifications, or requests, please contact us via the following official channels:\n\nEmail: admin@beaconindica.com\n\nGeneral Inquiries: enquiry@beaconindica.com\n\nPartnerships: partnerships@beaconindica.com\n\nCareers: careers@beaconindica.com\n\nBeacon Indica, India.`
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
          <span className="text-primary font-medium">Privacy Policy</span>
        </div>
      </div>

      <div className="bg-surface min-h-screen">
        <div className="max-w-[860px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div data-animate="fade-up">
            <p className="font-mono-label text-accent text-xs tracking-widest uppercase mb-3">Legal Documentation</p>
            <h1 className="text-[36px] md:text-[52px] font-extrabold tracking-tight mb-3">Privacy Policy</h1>
            <p className="text-on-surface-variant text-sm mb-12">Last Updated: June 2026</p>
          </div>

          <div className="bg-surface-container border border-outline-variant rounded-2xl p-6 mb-12" data-animate="fade-up">
            <p className="text-on-surface text-[15px] leading-relaxed">
              Welcome to Beacon Indica. We are dedicated to ensuring the protection of your personal information. This Privacy Policy outlines how we handle and protect data across beaconindica.com, our student venture studio programs, and our broader ecosystem offerings.
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
