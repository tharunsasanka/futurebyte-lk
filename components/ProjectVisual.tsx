import {
  Activity,
  Box,
  BrainCircuit,
  Database,
  Fingerprint,
  LockKeyhole,
  Network,
  Package,
  Shield,
  Terminal,
} from "lucide-react";

type ProjectVisualProps = {
  variant: "dfir" | "stockmate" | "cipher" | "portfolio";
};

export default function ProjectVisual({
  variant,
}: ProjectVisualProps) {
  if (variant === "dfir") {
    return (
      <div className="project-visual project-visual-dfir">
        <div className="project-ui-header">
          <div>
            <span className="project-ui-eyebrow">DFIR PLATFORM</span>
            <strong>Investigation Console</strong>
          </div>

          <span className="project-live">
            <span />
            LIVE
          </span>
        </div>

        <div className="dfir-layout">
          <div className="dfir-sidebar">
            <div className="project-ui-icon">
              <Shield size={17} />
            </div>

            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="dfir-main">
            <div className="dfir-stats">
              <div>
                <small>Evidence</small>
                <strong>128</strong>
              </div>

              <div>
                <small>Alerts</small>
                <strong>24</strong>
              </div>

              <div>
                <small>Events</small>
                <strong>1.8K</strong>
              </div>
            </div>

            <div className="dfir-timeline">
              <div className="timeline-title">
                <span>Attack Timeline</span>
                <Activity size={13} />
              </div>

              <div className="timeline-line">
                <span className="timeline-dot active" />
                <span className="timeline-dot" />
                <span className="timeline-dot warning" />
                <span className="timeline-dot" />
                <span className="timeline-dot active" />
              </div>
            </div>

            <div className="dfir-bottom">
              <div>
                <Fingerprint size={15} />
                <span>Evidence Analysis</span>
              </div>

              <div>
                <Network size={15} />
                <span>MITRE Mapping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "stockmate") {
    return (
      <div className="project-visual project-visual-stockmate">
        <div className="project-ui-header">
          <div>
            <span className="project-ui-eyebrow">STOCKMATE</span>
            <strong>Business Dashboard</strong>
          </div>

          <Package size={18} />
        </div>

        <div className="stock-dashboard">
          <div className="stock-card">
            <small>Total Products</small>
            <strong>1,284</strong>

            <div className="mini-bars">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="stock-card">
            <small>Sales</small>
            <strong>842</strong>

            <div className="stock-line">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="stock-table">
            <div className="stock-row stock-row-heading">
              <span>Product</span>
              <span>Stock</span>
              <span>Status</span>
            </div>

            <div className="stock-row">
              <span>Product A</span>
              <span>248</span>
              <span className="status-good">Healthy</span>
            </div>

            <div className="stock-row">
              <span>Product B</span>
              <span>42</span>
              <span className="status-warning">Low</span>
            </div>

            <div className="stock-row">
              <span>Product C</span>
              <span>116</span>
              <span className="status-good">Healthy</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "cipher") {
    return (
      <div className="project-visual project-visual-cipher">
        <div className="cipher-topbar">
          <div>
            <span className="cipher-logo">
              <Terminal size={14} />
            </span>

            <span>CIPHER // COMMAND CENTER</span>
          </div>

          <span className="cipher-status">ONLINE</span>
        </div>

        <div className="cipher-core">
          <div className="cipher-radar">
            <span />
            <span />
            <span />
          </div>

          <div className="cipher-core-mark">
            <BrainCircuit size={29} />
          </div>
        </div>

        <div className="cipher-metrics">
          <div>
            <small>CPU</small>
            <strong>42%</strong>
          </div>

          <div>
            <small>MEMORY</small>
            <strong>61%</strong>
          </div>

          <div>
            <small>NETWORK</small>
            <strong>18ms</strong>
          </div>
        </div>

        <div className="cipher-command">
          <span>&gt;</span>
          <div>
            <span className="command-line large" />
            <span className="command-line medium" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual-portfolio">
      <div className="portfolio-browser">
        <div className="portfolio-browser-bar">
          <div>
            <span />
            <span />
            <span />
          </div>

          <small>cyberportfolio.local</small>

          <Box size={14} />
        </div>

        <div className="portfolio-main">
          <div className="portfolio-nav">
            <span className="portfolio-brand">
              <LockKeyhole size={14} />
            </span>

            <div>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="portfolio-hero">
            <span>CYBERSECURITY</span>
            <strong>Digital Identity</strong>
            <p>Projects · Security · Development</p>
          </div>

          <div className="portfolio-cards">
            <div />
            <div />
            <div />
          </div>

          <div className="portfolio-footer">
            <Database size={13} />
            <span>Secure Digital Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}