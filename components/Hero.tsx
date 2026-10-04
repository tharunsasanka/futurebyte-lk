import {
  ArrowRight,
  BrainCircuit,
  Code2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const notes = [
  "Custom Technology",
  "Security Focused",
  "Built To Scale",
];

const capabilities = [
  {
    icon: Code2,
    title: "Software",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
  },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="site-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="kicker">Software & Technology Company</span>

            <h1 className="display">
              Transforming Ideas Into{" "}
              <span className="text-gradient">Digital Solutions.</span>
            </h1>

            <p className="lead">
              FutureByte LK builds modern software, web applications, AI
              solutions, cybersecurity systems, and digital products designed
              around real-world business needs.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="button-primary">
                Start a Project
                <ArrowRight size={17} />
              </a>

              <a href="#services" className="button-secondary">
                Explore Services
              </a>
            </div>

            <div className="hero-notes">
              {notes.map((note) => (
                <span key={note} className="hero-note">
                  <span className="hero-note-dot" />
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="futurebyte-core">
              <div className="core-grid" />
              <div className="core-glow" />
              <div className="core-scan" />

              <div className="core-header">
                <div>
                  <span className="core-overline">FUTUREBYTE CORE</span>
                  <strong>Digital Intelligence</strong>
                </div>

                <div className="core-status">
                  <span />
                  ONLINE
                </div>
              </div>

              <div className="core-stage">
                <div className="core-ring ring-one">
                  <span className="node node-one" />
                  <span className="node node-two" />
                </div>

                <div className="core-ring ring-two">
                  <span className="node node-three" />
                  <span className="node node-four" />
                </div>

                <div className="core-ring ring-three">
                  <span className="node node-five" />
                </div>

                <div className="core-center">
                  <div className="core-center-inner">
                    <Sparkles size={19} />
                    <span>F</span>
                  </div>
                </div>

                <div className="core-label core-label-software">
                  <Code2 size={13} />
                  Software
                </div>

                <div className="core-label core-label-ai">
                  <BrainCircuit size={13} />
                  AI
                </div>

                <div className="core-label core-label-security">
                  <ShieldCheck size={13} />
                  Security
                </div>
              </div>

              <div className="core-capabilities">
                {capabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="core-capability">
                      <span className="core-capability-icon">
                        <Icon size={14} />
                      </span>

                      <span>{item.title}</span>
                    </div>
                  );
                })}
              </div>

              <div className="core-telemetry">
                <div>
                  <span>PROCESSING</span>
                  <strong>99.9%</strong>
                </div>

                <div>
                  <span>RESPONSE</span>
                  <strong>12ms</strong>
                </div>

                <div>
                  <span>MODE</span>
                  <strong>REAL-TIME</strong>
                </div>
              </div>

              <span className="core-corner corner-top-left" />
              <span className="core-corner corner-top-right" />
              <span className="core-corner corner-bottom-left" />
              <span className="core-corner corner-bottom-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}