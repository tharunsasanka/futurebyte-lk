import {
  Layers3,
  LockKeyhole,
  Target,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const principles = [
  {
    icon: Target,
    title: "Purpose Driven",
    text: "Technology should solve a real business or user problem rather than exist for its own sake.",
  },
  {
    icon: LockKeyhole,
    title: "Security Conscious",
    text: "Security considerations are part of the engineering mindset from the beginning.",
  },
  {
    icon: Layers3,
    title: "Built To Evolve",
    text: "Digital products should have room to grow as requirements, users, and organizations change.",
  },
];

export default function About() {
  return (
    <section className="section section-border" id="about">
      <div className="site-shell">
        <div className="about-grid">
          <Reveal>
            <div className="about-copy">
              <span className="kicker">About FutureByte LK</span>

              <h2 className="heading" style={{ marginTop: 22 }}>
                Building Technology For What&apos;s Next.
              </h2>

              <p className="lead">
                FutureByte LK is a software and technology startup focused on
                turning ideas into practical digital solutions for businesses,
                startups, and organizations.
              </p>

              <p className="body-copy">
                Our work brings together software engineering, web
                development, AI and automation, cybersecurity, business
                systems, and digital product design. The goal is simple:
                understand the problem, design the right solution, and build
                technology that creates lasting value.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="about-box">
              <h3>How We Think About Technology</h3>

              <div className="about-list">
                {principles.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.title} delay={0.2 + index * 0.08}>
                      <div className="about-list-item">
                        <span className="about-list-icon">
                          <Icon size={17} />
                        </span>

                        <span>
                          <strong>{item.title}</strong>
                          <span>{item.text}</span>
                        </span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}