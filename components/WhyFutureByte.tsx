import {
  Gauge,
  LockKeyhole,
  Layers3,
  Lightbulb,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    text: "Technology is shaped around real problems, users, workflows, and measurable business needs.",
  },
  {
    icon: LockKeyhole,
    title: "Security Conscious",
    text: "Security is considered throughout the development process rather than treated as an afterthought.",
  },
  {
    icon: Layers3,
    title: "Modern Technology",
    text: "We use modern development approaches to build maintainable, useful, and adaptable digital products.",
  },
  {
    icon: Gauge,
    title: "Built To Evolve",
    text: "Solutions are designed with future improvements, changing requirements, and long-term growth in mind.",
  },
];

export default function WhyFutureByte() {
  return (
    <section className="section section-border" id="why-us">
      <div className="site-shell">
        <div className="why-layout">
          <Reveal>
            <div className="why-copy">
              <span className="kicker">Why FutureByte LK</span>

              <h2 className="heading-small" style={{ marginTop: 20 }}>
                Technology With
                <br />
                <span className="text-gradient">Purpose.</span>
              </h2>

              <p className="lead">
                We focus on creating technology that is useful, secure, and
                capable of adapting as your organization grows.
              </p>
            </div>
          </Reveal>

          <div className="why-grid">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <Reveal key={reason.title} delay={index * 0.07}>
                  <article className="why-card">
                    <span className="why-icon">
                      <Icon size={19} />
                    </span>

                    <h3>{reason.title}</h3>

                    <p>{reason.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}