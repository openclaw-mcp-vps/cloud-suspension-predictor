export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Cloud Risk Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Cloud Account Suspensions{" "}
          <span className="text-[#58a6ff]">Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your AWS, GCP, or Azure account. Our ML models analyze billing patterns,
          compliance signals, and usage anomalies to alert you days before a suspension hits.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Monitoring — $79/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card lock-in.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["AWS", "GCP", "Azure"],
            ["Real-time alerts", "ML risk scoring", "Billing anomaly detection"]
          ][1].map((feat, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="text-sm text-[#c9d1d9]">{feat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-bold text-white">$79</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-[#8b949e] mb-6">Everything you need to stay ahead of suspensions.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Connect up to 5 cloud accounts",
              "ML-powered suspension risk score",
              "Billing anomaly & quota alerts",
              "Compliance status dashboard",
              "Slack & email notifications",
              "7-day historical trend analysis"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the suspension predictor work?",
              a: "We connect to your cloud provider's read-only APIs to pull billing, quota, and compliance data. Our ML model compares your signals against historical suspension patterns to generate a daily risk score with specific remediation steps."
            },
            {
              q: "Is my cloud account data safe?",
              a: "We request read-only IAM permissions — we never modify your infrastructure. All data is encrypted in transit and at rest, and we never store raw credentials."
            },
            {
              q: "What if I want to cancel?",
              a: "Cancel anytime from your billing portal with one click. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Cloud Suspension Predictor. All rights reserved.
      </footer>
    </main>
  );
}
