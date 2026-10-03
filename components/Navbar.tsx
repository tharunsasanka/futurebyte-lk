import { ArrowUpRight, Menu } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="site-shell">
        <nav className="navbar-inner">
          <a href="#home" className="brand">
            <span className="brand-mark">
              <span>F</span>
            </span>

            <span className="brand-copy">
              <strong>
                FutureByte <span className="text-cyan-400">LK</span>
              </strong>
              <small>Digital Solutions</small>
            </span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}

            <a href="#contact" className="button-primary">
              Let&apos;s Talk
              <ArrowUpRight size={15} />
            </a>
          </div>

          <details className="nav-mobile">
            <summary className="mobile-summary" aria-label="Open navigation">
              <Menu size={20} />
            </summary>

            <div className="mobile-menu">
              {navItems.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}

              <a href="#contact" className="button-primary">
                Let&apos;s Talk
                <ArrowUpRight size={15} />
              </a>
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}