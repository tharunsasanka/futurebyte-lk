import {
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const principles = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We use modern technology to turn ideas into practical digital products.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Security-conscious thinking is considered throughout the development process.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Solutions are designed to remain useful as the needs of a business evolve.",
  },
];

export default function Intro() {
  return (
    <section className="section section-border" id="intro">
      <div className="site-shell">
        <div className="section-heading-row">
          <Reveal>
            <div className="section-heading-copy">
              <span className="kicker">Technology With Purpose</span>

              <h2 className="heading" style={{ marginTop: 22 }}>
                Technology Built Around Your Goals.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="section-heading-copy">
              <p className="lead">
                FutureByte LK helps businesses, startups, and organizations
                turn ideas into practical digital products. We combine
                engineering, design, automation, and security-conscious
                development to solve real problems with technology.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="principles">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <article className="principle">
                  <div className="principle-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}