import {
  MapPin,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const principles = [
  {
    icon: Target,
    title: "Purpose Driven",
    text: "We start with the problem and build technology around the outcome that actually matters.",
  },
  {
    icon: ShieldCheck,
    title: "Security Conscious",
    text: "We value secure engineering and responsible technology across the products we build.",
  },
  {
    icon: TrendingUp,
    title: "Built To Evolve",
    text: "We aim to create solutions that can grow, improve, and adapt as requirements change.",
  },
];

export default function About() {
  return (
    <section className="section section-border" id="about">
      <div className="site-shell">
        <div className="about-layout">
          <Reveal>
            <div className="about-copy">
              <span className="kicker">About FutureByte LK</span>

              <h2 className="heading-small" style={{ marginTop: 20 }}>
                Building Digital
                <br />
                Solutions That Matter.
              </h2>

              <p className="lead">
                FutureByte LK is a software and technology company focused on
                transforming ideas into practical digital solutions for
                businesses, startups, and organizations.
              </p>

              <p className="body-copy">
                Our work spans custom software, web development, AI and
                automation, cybersecurity, business management systems, and
                UI/UX design. We combine modern engineering with a practical
                understanding of real-world requirements.
              </p>

              <div className="about-location">
                <MapPin size={17} />
                <span>Bulathsinhala, Sri Lanka</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="founder-card">
              <span className="kicker">Founder & Owner</span>

              <div className="founder-name">Tharun Sasanka</div>

              <p>
                FutureByte LK is founded and led by Tharun Sasanka, with a
                focus on software engineering, cybersecurity, digital
                products, and practical technology solutions.
              </p>

              <div className="founder-meta">
                <span>FutureByte LK</span>
                <span>Bulathsinhala, Sri Lanka</span>
              </div>
            </aside>
          </Reveal>
        </div>

        <div className="principles-grid">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <Reveal key={principle.title} delay={index * 0.07}>
                <article className="principle-card">
                  <span className="principle-icon">
                    <Icon size={18} />
                  </span>

                  <h3>{principle.title}</h3>

                  <p>{principle.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}