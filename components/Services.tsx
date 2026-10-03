import {
  ArrowUpRight,
  Bot,
  Code2,
  Globe,
  LayoutDashboard,
  Palette,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Business-specific software designed around your workflows, requirements, and goals.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications designed for usability and growth.",
  },
  {
    number: "03",
    icon: Bot,
    title: "AI & Automation",
    description:
      "AI-powered applications and automation solutions that streamline workflows and productivity.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Security-focused technology solutions designed to identify risks and strengthen digital defenses.",
  },
  {
    number: "05",
    icon: LayoutDashboard,
    title: "Business Management Systems",
    description:
      "Custom systems for inventory, sales, bookings, operations, and business management.",
  },
  {
    number: "06",
    icon: Palette,
    title: "UI/UX & Product Design",
    description:
      "Modern digital interfaces and product experiences designed around users and business objectives.",
  },
];

export default function Services() {
  return (
    <section className="section section-border" id="services">
      <div className="site-shell">
        <Reveal>
          <div className="section-heading-copy">
            <span className="kicker">What We Build</span>

            <h2 className="heading" style={{ marginTop: 22 }}>
              Digital Solutions For Modern Businesses.
            </h2>

            <p
              className="lead"
              style={{ marginTop: 22, maxWidth: 760 }}
            >
              From custom business systems to AI-powered applications, we
              build technology around real requirements and real-world
              challenges.
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.number} delay={index * 0.08}>
                <article className="service-card">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-link">
                    Explore service
                    <ArrowUpRight size={14} />
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}