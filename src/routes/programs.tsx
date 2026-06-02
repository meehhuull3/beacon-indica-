import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, Wallet, Code2, TrendingUp, Scale, Users, Target, Briefcase, Network } from "lucide-react";
import type React from "react";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";

type Program = {
  id: string;
  num: string;
  label: string;
  badge?: string;
  title: string;
  subtitle: string;
  tagline: string;
  bullets?: string[];
  dark?: boolean;
};

const programs: Program[] = [
  {
    id: "genesis",
    num: "01",
    label: "FLAGSHIP PROGRAM · PHASE 01",
    title: "Genesis",
    subtitle: "8-Week Startup Builder",
    tagline:
      "A structured, execution-first program that takes you from a raw idea to a validated startup, complete with real customers, a working prototype, and the mindset of a genuine founder.",
  },
  {
    id: "fellowship",
    num: "02",
    label: "SELECTIVE PROGRAM · PHASE 02",
    badge: "Invite only.",
    title: "Fellowship",
    subtitle: "Where Builders Become Investable",
    tagline:
      "This is for founders who are serious and already showing early signs of execution. Here the focus shifts from exploration to building companies that investors actually want to back.",
  },
  {
    id: "accelerator",
    num: "03",
    label: "GROWTH STAGE · PHASE 03",
    badge: "Invite Only",
    title: "Accelerator",
    subtitle: "Scale and Raise",
    tagline:
      "The Accelerator is for startups that are ready to grow and raise capital. Everything here is about growth, positioning, and showing up fully investor-ready.",
    dark: true,
  },
];

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
});

const genesisStats: Array<[string, string]> = [
  ["8 weeks", "Program Duration"],
  ["48 hours", "total"],
  ["2 sessions", "per week"],
  ["3 hours", "per session"],
];

const genesisOutcomes: Array<[string, string]> = [
  ["A validated startup problem", "backed by real customer interviews and market evidence."],
  ["A working prototype or MVP", "that real users can actually experience."],
  ["Early user feedback", "documented from real people who've tried your product."],
  ["A startup roadmap", "with a clear direction for growth, revenue, and what comes next."],
  ["An investor-ready pitch deck", "presented at Demo Day in front of mentors and industry leaders."],
  ["A founder network", "of peers, mentors, and collaborators you'll keep building with for life."],
];

const curriculum: Array<{ week: string; tag: string; title: string; body: string; deliverables?: string }> = [
  { week: "W1", tag: "MINDSET", title: "The Founder Mindset", body: "Understand what startups really are, why most fail, and how to spot problems worth solving. Start by listing 10 personal problems from your daily life." },
  { week: "W2", tag: "DISCOVERY", title: "Customer Discovery", body: "Talk to users before building anything. Learn how to structure interviews and figure out whether your problem actually matters to others." },
  { week: "W3", tag: "OPPORTUNITY", title: "Startup Opportunity", body: "Evaluate market size, study competitors, and decide whether your problem is worth going after. Estimate your TAM and map existing solutions." },
  { week: "W4", tag: "DESIGN", title: "Designing the Solution", body: "Design before you build. Define your value proposition, map the user experience, and create a clickable prototype using Figma or no-code tools." },
  { week: "W5", tag: "BUILD", title: "Building the MVP", body: "Build the smallest version of your product that delivers real value. A landing page, a manual service, a no-code app, or a prototype are all valid." },
  { week: "W6", tag: "GROWTH", title: "Getting Your First Users", body: "Find early adopters through student communities, social media, campus networks, and online spaces. Make something people actually talk about." },
  { week: "W7", tag: "REVENUE", title: "Business Model", body: "Figure out how your startup can make money. Explore subscriptions, marketplaces, freemium, and transaction fee models. Build a basic understanding of unit economics." },
  { week: "W8", tag: "PITCH", title: "Pitching Your Startup", body: "Learn to communicate your vision clearly and confidently. Present your complete pitch deck at Demo Day in front of mentors, investors, and university leaders." },
];

const whoFor = [
  "Students who are genuinely interested in startups and entrepreneurship.",
  "Aspiring founders with an idea, or even without one yet.",
  "Builders, makers, and creators who want to ship things.",
  "Problem solvers who want to make a real impact.",
];

const founderMindset: Array<[string, string, string]> = [
  ["C", "Curious", "Questions everything, especially assumptions"],
  ["P", "Persistent", "Keeps going when it gets hard"],
  ["R", "Resourceful", "Finds a way with whatever is available"],
  ["C", "Comfortable", "Thrives in uncertainty and ambiguity"],
];

const fellowshipPillars: Array<[React.ComponentType<{ className?: string }>, string, string]> = [
  [Wallet, "Funding Support", "Early product development and market validation, backed by real capital."],
  [Code2, "Technical Support", "MVP development, product architecture, and engineering guidance from experts who've done it."],
  [TrendingUp, "Marketing and Growth", "Distribution strategy, GTM execution, and user acquisition campaigns."],
  [Scale, "Legal and Compliance", "Company formation, documentation, and full regulatory support."],
  [Users, "Hands-on Mentorship", "Continuous guidance from experienced founders and operators who are in your corner."],
];

const acceleratorIncludes = [
  "A curated network of investors, HNIs, and family offices.",
  "Fundraising support covering storytelling and pitch refinement.",
  "Business scaling frameworks and revenue optimisation.",
  "Strategic partnerships and market access.",
];

const acceleratorFocus: Array<[React.ComponentType<{ className?: string }>, string, string]> = [
  [Briefcase, "Investors", "HNIs & Family Offices"],
  [Target, "Pitch", "Refinement & Strategy"],
  [TrendingUp, "Scale", "Revenue Optimization"],
  [Network, "Access", "Strategic Partnerships"],
];

function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-container-low py-20 md:py-28 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="font-mono-label text-accent block"
          >
            The Ecosystem
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[36px] md:text-[56px] font-extrabold tracking-[-0.03em] mt-4"
          >
            Three Programs. One Pipeline.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-on-surface-variant mt-6"
          >
            From campus to capital, every stage is structured and every founder is taken care of. No gaps, no guesswork.
          </motion.p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 space-y-16 overflow-hidden">
        {programs.map((p) => (
          <div
            key={p.id}
            id={p.id}
            className={
              p.dark
                ? "scroll-mt-24 bg-primary text-primary-foreground rounded-xl p-10 md:p-14 relative overflow-hidden"
                : "scroll-mt-24 bg-card border border-outline-variant rounded-xl p-10 md:p-14"
            }
          >
            {p.badge && (
              <div className="absolute top-0 right-0 px-3 py-1.5 bg-accent text-accent-foreground text-[11px] font-bold tracking-wider z-10">
                {p.badge}
              </div>
            )}
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <AnimateIn direction="left">
                  <div className={`text-[64px] font-extrabold leading-none ${p.dark ? "text-white/15" : "text-on-surface/10"}`}>{p.num}</div>
                  <span className="inline-block mt-2 font-mono-label text-accent">{p.label}</span>
                  <h2 className="text-[36px] md:text-[44px] font-bold mt-4 tracking-tight">{p.title}</h2>
                  <p className={`mt-2 text-lg font-semibold ${p.dark ? "text-primary-foreground/80" : "text-on-surface-variant"}`}>{p.subtitle}</p>
                </AnimateIn>
              </div>
              <div className="md:col-span-8">
                <AnimateIn direction="right">
                  <p className={p.dark ? "text-primary-foreground/75 text-lg" : "text-on-surface-variant text-lg"}>
                    {p.tagline}
                  </p>

                  {p.id === "genesis" && (
                    <div className="mt-4">
                      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
                        <span className="text-accent font-bold text-sm">Paid Program</span>
                        <span className="text-on-surface-variant text-xs">· Pricing shared after expression of interest</span>
                      </div>
                      <p className={"text-on-surface-variant text-base mt-4 leading-relaxed"}>
                        The foundational layer of Beacon Indica, embedded right inside universities and colleges. It's a high-performance environment where students explore, build, and validate startup ideas while keeping up with their academic journey.
                      </p>
                    </div>
                  )}
                </AnimateIn>

                {p.id === "genesis" && (
                  <div className="mt-10 space-y-12">
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {genesisStats.map(([n, l], index) => (
                        <AnimateIn
                          key={l}
                          delay={index * 0.08}
                          className="w-full"
                        >
                          <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="bg-surface-container-low rounded-lg p-4 text-center border border-outline-variant h-full"
                            style={{ willChange: "transform" }}
                          >
                            <div className="text-2xl font-extrabold text-accent">{n}</div>
                            <div className="font-mono-label text-on-surface-variant text-xs mt-1">{l}</div>
                          </motion.div>
                        </AnimateIn>
                      ))}
                    </div>

                    {/* Achieve */}
                    <AnimateIn>
                      <h3 className="font-mono-label text-accent">What You'll Actually Achieve</h3>
                      <p className="text-on-surface-variant mt-3">
                        Genesis is not a theory course. Every session, every assignment, every conversation is designed to get you closer to a real startup. You'll talk to customers, design solutions, build prototypes, acquire users, and pitch your idea, all within 8 weeks.
                      </p>
                    </AnimateIn>

                    {/* Format */}
                    <AnimateIn>
                      <h3 className="font-mono-label text-accent">How It Works</h3>
                      <p className="text-on-surface-variant mt-3 leading-relaxed">
                        Two sessions every week: one workshop on frameworks and one execution review where you refine your startup in real time. Expect to put in around four to six hours a week outside of class for interviews, building, testing, and reflecting.
                      </p>
                    </AnimateIn>

                    {/* Outcomes */}
                    <div>
                      <AnimateIn>
                        <h3 className="font-mono-label text-accent">What You'll Walk Away With</h3>
                      </AnimateIn>
                      <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                        {genesisOutcomes.map(([t, d], index) => (
                          <AnimateIn key={t} delay={index * 0.06} className="w-full">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                              <div>
                                <div className="font-bold text-sm">{t}</div>
                                <div className="text-on-surface-variant text-sm mt-1">{d}</div>
                              </div>
                            </li>
                          </AnimateIn>
                        ))}
                      </ul>
                    </div>

                    {/* Curriculum */}
                    <div>
                      <AnimateIn>
                        <h3 className="font-mono-label text-accent">The 8-Week Curriculum</h3>
                      </AnimateIn>
                      <ol className="mt-4 space-y-4 border-l-2 border-accent/30 pl-6">
                        {curriculum.map((c, index) => (
                          <AnimateIn key={c.week} delay={index * 0.06} className="relative w-full">
                            <li className="relative">
                              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent" />
                              <div className="flex flex-wrap items-baseline gap-3">
                                <span className="font-mono-label text-accent">{c.week} · {c.tag}</span>
                                <h4 className="font-bold">{c.title}</h4>
                              </div>
                              <p className="text-on-surface-variant text-sm mt-2">{c.body}</p>
                              {c.deliverables && (
                                <p className="font-mono-label text-on-surface-variant text-xs mt-2">Deliverables: {c.deliverables}</p>
                              )}
                            </li>
                          </AnimateIn>
                        ))}
                      </ol>
                    </div>

                    {/* Who for */}
                    <div>
                      <AnimateIn>
                        <h3 className="font-mono-label text-accent">Who This Is For</h3>
                        <p className="text-on-surface-variant mt-2 italic">No prior startup experience required at all.</p>
                      </AnimateIn>
                      <ul className="mt-3 space-y-2">
                        {whoFor.map((w, index) => (
                          <AnimateIn key={w} delay={index * 0.06} className="w-full">
                            <li className="flex items-start gap-2 text-on-surface-variant">
                              <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                              <span>{w}</span>
                            </li>
                          </AnimateIn>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <AnimateIn>
                      <h3 className="font-mono-label text-accent">Tools You'll Use</h3>
                      <p className="text-on-surface-variant mt-2">Notion, Figma, Google Forms, AI Prototyping, No-Code Builders, Canva</p>
                    </AnimateIn>

                    {/* Mindset */}
                    <div>
                      <AnimateIn>
                        <h3 className="font-mono-label text-accent">Founder Mindset</h3>
                      </AnimateIn>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {founderMindset.map(([k, t, d], index) => (
                          <AnimateIn
                            key={index}
                            delay={index * 0.08}
                            className="w-full"
                          >
                            <motion.div
                              whileHover={{ y: -5 }}
                              transition={{ duration: 0.2 }}
                              className="bg-surface-container-low border border-outline-variant rounded-lg p-4 h-full"
                              style={{ willChange: "transform" }}
                            >
                              <div className="text-3xl font-extrabold text-accent">{k}</div>
                              <div className="font-bold mt-2">{t}</div>
                              <p className="text-on-surface-variant text-sm mt-1">{d}</p>
                            </motion.div>
                          </AnimateIn>
                        ))}
                      </div>
                    </div>

                    <AnimateIn>
                      <blockquote className="border-l-4 border-accent pl-4 italic text-on-surface-variant">
                        "The best problems choose you, you don't choose them." Sanket Mali, Beacon Indica
                      </blockquote>
                    </AnimateIn>
                  </div>
                )}

                {p.id === "fellowship" && (
                  <div className="mt-10 space-y-10">
                    <AnimateIn scale={0.9} delay={0.4} direction="none" className="w-full">
                      <div className="bg-accent-tint border border-accent/30 rounded-xl p-6 text-center">
                        <div className="text-[32px] md:text-[40px] font-extrabold text-accent leading-none">Up to ₹5 Lakhs</div>
                        <div className="font-mono-label text-on-surface-variant mt-2">in funding per startup.</div>
                      </div>
                    </AnimateIn>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {fellowshipPillars.map(([Icon, t, d], index) => (
                        <AnimateIn
                          key={t}
                          delay={index * 0.08}
                          className="w-full"
                        >
                          <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="bg-surface-container-low border border-outline-variant rounded-lg p-5 h-full"
                            style={{ willChange: "transform" }}
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-accent" />
                            </div>
                            <h4 className="font-bold mt-3">{t}</h4>
                            <p className="text-on-surface-variant text-sm mt-2">{d}</p>
                          </motion.div>
                        </AnimateIn>
                      ))}
                    </div>
                  </div>
                )}

                {p.id === "accelerator" && (
                  <div className="mt-10 space-y-10">
                    <AnimateIn>
                      <blockquote className="border-l-4 border-accent pl-4 italic text-primary-foreground/80">
                        "We don't just connect startups to capital. We prepare them to deserve it."
                      </blockquote>
                    </AnimateIn>
                    <div>
                      <AnimateIn>
                        <h3 className="font-mono-label text-accent">What's Included</h3>
                      </AnimateIn>
                      <ul className="mt-3 space-y-2">
                        {acceleratorIncludes.map((b, index) => (
                          <AnimateIn key={b} delay={index * 0.06} className="w-full">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                              <span className="text-primary-foreground/85">{b}</span>
                            </li>
                          </AnimateIn>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {acceleratorFocus.map(([Icon, t, d], index) => (
                        <AnimateIn
                          key={t}
                          delay={index * 0.08}
                          className="w-full"
                        >
                          <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-lg p-4 h-full"
                            style={{ willChange: "transform" }}
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-accent" />
                            </div>
                            <div className="font-bold mt-3">{t}</div>
                            <p className="text-primary-foreground/70 text-xs mt-1">{d}</p>
                          </motion.div>
                        </AnimateIn>
                      ))}
                    </div>
                  </div>
                )}

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block mt-10"
                  style={{ willChange: "transform" }}
                >
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 font-bold ${p.dark ? "text-accent" : "text-primary"}`}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Get Involved */}
      <section className="bg-surface-container-low py-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center">
            <AnimateIn>
              <span className="font-mono-label text-accent">Get Involved</span>
              <h2 className="text-[32px] md:text-[44px] font-bold mt-4 tracking-[-0.02em]">
                India's Most Effective Founder Pipeline.
              </h2>
              <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">
                Starting from campuses and leading to globally scalable companies.
              </p>
            </AnimateIn>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <AnimateIn direction="left" className="w-full">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-outline-variant rounded-xl p-8 h-full"
                style={{ willChange: "transform" }}
              >
                <h3 className="text-xl font-bold">For Institutions</h3>
                <p className="text-on-surface-variant mt-3">
                  Partner with Beacon Indica to bring a Venture Studio to your campus and create real startup outcomes at scale. Build the next generation of Indian founders from within your own walls.
                </p>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block mt-6"
                  style={{ willChange: "transform" }}
                >
                  <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-accent">
                    Partner With Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimateIn>

            <AnimateIn direction="right" className="w-full">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-primary text-primary-foreground rounded-xl p-8 h-full"
                style={{ willChange: "transform" }}
              >
                <h3 className="text-xl font-bold">For Founders</h3>
                <p className="text-primary-foreground/75 mt-3">
                  Enter the ecosystem, build with intent, and access the infrastructure you need to create something meaningful. If you have the ambition, we have the engine.
                </p>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block mt-6"
                  style={{ willChange: "transform" }}
                >
                  <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-accent">
                    Join the Ecosystem <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
