"use client";

import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const CONTACT_EMAIL = "tharunsasanka0@outlook.com";
const CONTACT_PHONE_DISPLAY = "071 563 1787";
const CONTACT_PHONE_INTL = "+9471563787";
const WHATSAPP_URL = "https://wa.me/9471563787";

export default function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `FutureByte LK Project Enquiry — ${name}`;

    const body = [
      "Hello FutureByte LK,",
      "",
      "I would like to discuss a project.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Service: ${service || "Not specified"}`,
      "",
      "Project Description:",
      message,
      "",
      "Thank you.",
    ].join("\n");

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <section className="section section-border" id="contact">
      <div className="site-shell">
        <div className="contact-wrap">
          <Reveal>
            <div className="contact-copy">
              <span className="kicker">Start A Conversation</span>

              <h2 className="heading-small" style={{ marginTop: 22 }}>
                Have an Idea?
                <br />
                Let&apos;s Build It.
              </h2>

              <p className="lead">
                Tell us what you are trying to build, improve, automate, or
                secure. We can shape the idea into a clear digital solution.
              </p>

              <div className="contact-details">
                <a
                  href={`tel:${CONTACT_PHONE_INTL}`}
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <Phone size={17} />
                  </span>

                  <span>
                    <strong>Call</strong>
                    <small>{CONTACT_PHONE_DISPLAY}</small>
                  </span>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <MessageCircle size={17} />
                  </span>

                  <span>
                    <strong>WhatsApp</strong>
                    <small>{CONTACT_PHONE_DISPLAY}</small>
                  </span>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <Mail size={17} />
                  </span>

                  <span>
                    <strong>Email</strong>
                    <small>{CONTACT_EMAIL}</small>
                  </span>
                </a>

                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    <MapPin size={17} />
                  </span>

                  <span>
                    <strong>Location</strong>
                    <small>Bulathsinhala, Sri Lanka</small>
                  </span>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="button-whatsapp"
              >
                <MessageCircle size={18} />
                Chat On WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="company">Company</label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company or organization"
                  />
                </div>

                <div className="field">
                  <label htmlFor="service">Service</label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Custom Software Development">
                      Custom Software Development
                    </option>

                    <option value="Web Development">
                      Web Development
                    </option>

                    <option value="AI & Automation">
                      AI & Automation
                    </option>

                    <option value="Cybersecurity">
                      Cybersecurity
                    </option>

                    <option value="Business Management Systems">
                      Business Management Systems
                    </option>

                    <option value="UI/UX & Product Design">
                      UI/UX & Product Design
                    </option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Project Description</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project, challenge, or idea."
                  required
                />
              </div>

              <div className="form-submit">
                <button type="submit" className="button-primary">
                  Send Project Enquiry
                  <ArrowRight size={17} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}