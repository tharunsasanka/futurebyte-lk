import {
  ArrowRight,
  Compass,
  Hammer,
  Rocket,
  Workflow,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discover",
    text: "We understand your goals, challenges, users, and technical requirements before development begins.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Plan",
    text: "We shape the requirements into a practical solution, development plan, and technology direction.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build",
    text: "We develop, test, refine, and secure the product with a focus on usability, performance, and reliability.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deliver",
    text: "We prepare the solution for launch and continue improving it as your requirements evolve.",
  },
];

export default function HowWeWork() {
  return (
    <section className="section section-border" id="process">
      <div className="site-shell">
        <Reveal>
          <div className="section-heading">
            <span className="kicker">Our Process</span>

            <h2 className="heading-small" style={{ marginTop: 20 }}>
              From Idea To
              <br />
              <span className="text-gradient">Working Solution.</span>
            </h2>

            <p className="lead section-heading-copy">
              A straightforward process designed to turn an idea, challenge,
              or business requirement into a practical digital product.
            </p>
          </div>
        </Reveal>

        <div className="process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} delay={index * 0.08}>
                <article className="process-card">
                  <div className="process-card-top">
                    <span className="process-number">{step.number}</span>

                    <span className="process-icon">
                      <Icon size={19} />
                    </span>
                  </div>

                  <div className="process-card-body">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>

                  <div className="process-card-line">
                    <span />
                    <ArrowRight size={14} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}