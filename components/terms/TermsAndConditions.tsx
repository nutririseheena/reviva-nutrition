"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollText, CalendarClock, ShieldAlert, Ban } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function TermsAndConditions() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (!el) return;
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--reviva-green)] py-24 md:py-32">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-10 blur-3xl bg-[var(--reviva-gold)]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-10 blur-3xl bg-white" />

        <div className="relative mx-auto max-w-4xl page-pad text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              <ScrollText size={14} />
              Legal &amp; Policies
            </span>

            <h1
              className="mt-6 leading-tight text-white"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              }}
            >
              Terms &amp; <span style={{ color: "var(--reviva-gold)" }}>Conditions</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Please read these terms carefully before booking a consultation or enrolling in any
              program with Reviva Nutrition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: "var(--reviva-cream)" }}>
        <div className="mx-auto max-w-6xl page-pad space-y-16">
          {/* ── Section 1: Consultation Process ── */}
          <div id="consultation-process" className="scroll-mt-24">
            <motion.div {...fadeUp}>
              <SectionHeader icon={<CalendarClock size={22} />} title="Consultation Process" />

              <div className="mt-8 space-y-4">
                <NumberedItem n={1}>
                  Consultations are available both <Strong>in-person (Offline)</Strong> and via{" "}
                  <Strong>video call (Online)</Strong>, allowing clients to join from anywhere in
                  the world.
                </NumberedItem>
                <NumberedItem n={2}>
                  Dedicated <Strong>exercise guidance sessions</Strong> are included and can be
                  conducted in-person or via video call.
                </NumberedItem>
                <NumberedItem n={3}>
                  Consultation appointments are scheduled between{" "}
                  <Strong>11:00 AM and 6:30 PM (IST)</Strong>.
                </NumberedItem>
                <NumberedItem n={4}>
                  Appointments are confirmed <Strong>only after successful payment</Strong> and are
                  subject to availability.
                </NumberedItem>
                <NumberedItem n={5}>
                  <Strong>Consultation Waiting Period</Strong>
                  <ul className="mt-3 space-y-2 pl-1">
                    <BulletItem>
                      Limited appointments available to ensure personalized care.
                    </BulletItem>
                    <BulletItem>Consultations are conducted only 5 days a week.</BulletItem>
                    <BulletItem>
                      Book your consultation in advance to secure your preferred slot.
                    </BulletItem>
                  </ul>
                </NumberedItem>
              </div>

              <div
                className="mt-6 w-full rounded-2xl px-8 py-6 text-center"
                style={{
                  backgroundColor: "rgba(47,107,45,0.07)",
                  border: "1px solid rgba(47,107,45,0.18)",
                }}
              >
                <p
                  className="font-semibold leading-snug"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    color: "var(--reviva-green)",
                  }}
                >
                  Quality over quantity.
                </p>
                <p
                  className="mt-2 font-medium"
                  style={{
                    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                    color: "var(--reviva-warm-brown)",
                  }}
                >
                  Personalized care takes time.
                </p>
              </div>
            </motion.div>
          </div>

          <Divider />

          {/* ── Section 2: Important Terms ── */}
          <div id="important-terms" className="scroll-mt-24">
            <motion.div {...fadeUp}>
              <SectionHeader icon={<ShieldAlert size={22} />} title="Important Terms" />

              <div className="mt-8 space-y-4">
                <TermCard title="Natural Healing Approach">
                  Our focus is on improving your health through personalized nutrition and lifestyle
                  changes. Dietary supplements may be recommended when appropriate, but their use is
                  entirely optional and should be discussed with your physician if required.
                </TermCard>

                <TermCard title="Client Responsibility">
                  We provide guidance and personalized nutrition plans; however, your results depend
                  on your commitment to following the recommended diet and lifestyle practices.
                </TermCard>

                <TermCard title="Results Disclaimer">
                  We do not guarantee specific weight loss or health outcomes. Every individual
                  responds differently based on their health condition, consistency, and lifestyle.
                  Our goal is to create sustainable habits that support long-term health rather than
                  short-term results.
                </TermCard>

                <TermCard title="Lifestyle-Based Nutrition">
                  Our nutrition plans are designed to be practical, sustainable, and suitable for
                  lifelong healthy living — not temporary diet plans.
                </TermCard>

                <TermCard title="Payment Policy">
                  Full payment is required at the time of enrollment to confirm your participation
                  in the program.
                </TermCard>

                <DisclaimerCard
                  title="Medical Disclaimer"
                  text="Nutrition guidance is complementary and does not replace medical diagnosis, treatment, or the advice of a qualified physician."
                />
                <DisclaimerCard
                  title="Healing Takes Time"
                  text="We believe in sustainable healing — not quick fixes. Lasting health transformation requires consistency, patience, and healthy lifestyle changes."
                />
                <DisclaimerCard
                  title="Realistic Expectations"
                  text="Our root-cause approach supports long-term health through personalized nutrition. Results vary from person to person, so please do not expect dramatic changes within a few weeks or a month."
                />
              </div>
            </motion.div>
          </div>

          <Divider />

          {/* ── Section 3: Returns, Refunds & Cancellations ── */}
          <div id="refunds-policy" className="scroll-mt-24">
            <motion.div {...fadeUp}>
              <SectionHeader
                icon={<Ban size={22} />}
                title="Returns, Refunds &amp; Cancellations Policy"
              />

              <p className="mt-6 text-base leading-relaxed text-slate-600">
                Returns, refunds, cancellations, or transfers are{" "}
                <Strong>not permitted under any circumstances</Strong>, including but not limited
                to:
              </p>

              <div className="mt-6 space-y-3">
                <PolicyItem>
                  Change of mind, accidental purchases, or dissatisfaction based on personal
                  expectations.
                </PolicyItem>
                <PolicyItem>
                  Failure to attend, complete, or utilize a scheduled consultation, workshop,
                  webinar, or any purchased program or service.
                </PolicyItem>
                <PolicyItem>
                  Scheduling conflicts, personal commitments, or circumstances preventing
                  participation.
                </PolicyItem>
                <PolicyItem>
                  Technical issues related to the client&apos;s device, internet connection, or
                  software environment.
                </PolicyItem>
                <PolicyItem>
                  Failure to review the program details, eligibility criteria, or terms and
                  conditions before making the purchase.
                </PolicyItem>
              </div>

              <div
                className="mt-8 rounded-2xl px-6 py-5 text-center text-sm font-semibold leading-relaxed"
                style={{
                  backgroundColor: "rgba(193,99,74,0.08)",
                  color: "var(--reviva-terracotta)",
                  border: "1px solid rgba(193,99,74,0.2)",
                }}
              >
                All fees paid are final, non-refundable, non-transferable, and non-cancellable.
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ── */

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: "var(--reviva-green)" }}
        >
          {icon}
        </span>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            color: "var(--reviva-green)",
            lineHeight: 1.15,
            fontWeight: 700,
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full" style={{ backgroundColor: "var(--reviva-cream-dark)" }} />;
}

function NumberedItem({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
        style={{ backgroundColor: "var(--reviva-green)" }}
      >
        {n}
      </span>
      <div className="text-base leading-relaxed text-slate-600">{children}</div>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-500">
      <span
        className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: "var(--reviva-gold)" }}
      />
      {children}
    </li>
  );
}

function TermCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-2">
      <p className="text-sm font-semibold" style={{ color: "var(--reviva-green)" }}>
        {title}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{children}</p>
    </div>
  );
}

function DisclaimerCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="py-2">
      <p className="text-sm font-semibold" style={{ color: "var(--reviva-green)" }}>
        {title}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

function PolicyItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="mt-[5px] h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: "var(--reviva-terracotta)" }}
      />
      <p className="text-sm leading-relaxed text-slate-600">{children}</p>
    </div>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold" style={{ color: "var(--reviva-green)" }}>
      {children}
    </strong>
  );
}
