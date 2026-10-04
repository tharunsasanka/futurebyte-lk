import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const CONTACT_EMAIL = "tharunsasanka0@outlook.com";
const CONTACT_PHONE_DISPLAY = "071 563 1787";
const CONTACT_PHONE_INTL = "+9471563787";
const WHATSAPP_URL = "https://wa.me/9471563787";
const LINKEDIN_URL = "https://www.linkedin.com/company/futurebyte-lk/";
const GITHUB_URL = "https://github.com/tharun";

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.4 9.1h3.6V21H3.4V9.1Zm5.8 0h3.4v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21H17v-5.7c0-1.4 0-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1V21H9.2V9.1Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-1.9c-3.1.67-3.76-1.31-3.76-1.31-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1 1.57-.99 1.57-.99.9-1.56 2.34-1.11 2.91-.85.09-.66.35-1.11.63-1.37-2.48-.28-5.1-1.24-5.1-5.51 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.53.23 2.67.11 2.95.72.78 1.16 1.78 1.16 3 0 4.28-2.63 5.23-5.13 5.5.36.31.68.92.68 1.86v2.8c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              FutureByte <span>LK</span>
            </a>

            <p>Transforming Ideas Into Digital Solutions.</p>

            <div className="footer-location">
              <MapPin size={14} />
              <span>Bulathsinhala, Sri Lanka</span>
            </div>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Company</span>

            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Services</span>

            <a href="#services">Software Development</a>
            <a href="#services">Web Development</a>
            <a href="#services">AI & Automation</a>
            <a href="#services">Cybersecurity</a>
          </div>

          <div className="footer-column footer-contact">
            <span className="footer-heading">Contact</span>

            <a href={`tel:${CONTACT_PHONE_INTL}`}>
              <Phone size={14} />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </a>

            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>

            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={14} />
              <span>{CONTACT_EMAIL}</span>
            </a>
          </div>

          <div className="footer-column footer-connect">
            <span className="footer-heading">Connect</span>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <GitHubIcon />
              <span>GitHub</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} FutureByte LK. All rights reserved.</span>

          <span>
            Founded and led by <strong>Tharun Sasanka</strong>.
          </span>
        </div>
      </div>
    </footer>
  );
}