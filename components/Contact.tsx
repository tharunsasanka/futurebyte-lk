"use client";

import { ArrowRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

const CONTACT_EMAIL = "tharunsasanka0@outlook.com";

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

              <div className="contact-note">
                <Mail size={16} className="text-cyan-400" />

                <span>
                  <span className="text-cyan-400">Email:</span>{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="transition-colors hover:text-white"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <br />
                  Project enquiries and business conversations are welcome.
                </span>
              </div>
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