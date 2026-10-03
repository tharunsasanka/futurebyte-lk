import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Cpu,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import HeroSceneLoader from "@/components/HeroSceneLoader";

const notes = [
  "Custom Technology",
  "Security Focused",
  "Built To Scale",
];

const capabilities = [
  {
    icon: Code2,
    label: "Software",
  },
  {
    icon: BrainCircuit,
    label: "AI & Automation",
  },
  {
    icon: ShieldCheck,
    label: "Cybersecurity",
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

              <div className="core-scene">
                <HeroSceneLoader />

                <div className="core-orbit-label label-software">
                  <Code2 size={13} />
                  Software
                </div>

                <div className="core-orbit-label label-ai">
                  <Sparkles size={13} />
                  AI
                </div>

                <div className="core-orbit-label label-security">
                  <ShieldCheck size={13} />
                  Security
                </div>

                <div className="core-center-badge">
                  <div className="core-center-ring" />
                  <span>F</span>
                </div>
              </div>

              <div className="core-capabilities">
                {capabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="core-capability">
                      <span className="core-capability-icon">
                        <Icon size={14} />
                      </span>

                      <span>{item.label}</span>
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

              <div className="core-corner corner-top-left" />
              <div className="core-corner corner-top-right" />
              <div className="core-corner corner-bottom-left" />
              <div className="core-corner corner-bottom-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}