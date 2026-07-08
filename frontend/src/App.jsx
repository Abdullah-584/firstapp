import { useEffect } from "react";
import "./App.css";

const skills = [
  {
    title: "Frontend",
    icon: "UI",
    items: ["React", "Next.js", "TypeScript", "Accessibility", "Animation"]
  },
  {
    title: "Backend",
    icon: "API",
    items: ["Node.js", "Express", "PostgreSQL", "REST", "WebSockets"]
  },
  {
    title: "Infrastructure",
    icon: "OPS",
    items: ["AWS", "Docker", "CI/CD", "Monitoring", "Terraform"]
  }
];

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealItems = document.querySelectorAll(".reveal");
    revealItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          alex<span>.</span>dev
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="topbar-cta" href="#contact">
          Hire me
        </a>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-grid">
            <div className="reveal">
              <p className="eyebrow">Available for freelance and full-time</p>
              <h1>
                Full stack systems
                <span>with product-level polish.</span>
              </h1>
              <p className="hero-copy">
                I build fast web products from API architecture to pixel-perfect UI.
                Clean code, reliable delivery, and thoughtful UX are my baseline.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">
                  View portfolio
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Start a project
                </a>
              </div>
            </div>

            <aside className="code-card reveal reveal-delay-1" aria-label="Code preview card">
              <div className="code-header">
                <div className="dots" aria-hidden="true">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="code-file">api/session.ts</span>
              </div>
              <pre className="code-body">
                <code>{`export async function createSession(input) {
  const user = await db.user.findUnique({
    where: { email: input.email }
  })

  if (!user) throw new Error("Not found")

  return signToken({
    sub: user.id,
    role: user.role
  })
}`}</code>
              </pre>
            </aside>
          </div>
        </section>

        <section id="about" className="about reveal">
          <p className="section-label">Background</p>
          <h2>Engineering from first principles.</h2>
          <p>
            I help founders and teams ship modern web products with strong architecture,
            practical performance, and maintainable codebases. My focus is building
            experiences users enjoy while keeping systems dependable under real usage.
          </p>
        </section>

        <section className="skills reveal reveal-delay-1" aria-label="Skills">
          {skills.map(category => (
            <article className="skill-card" key={category.title}>
              <div className="skill-top">
                <span className="skill-icon" aria-hidden="true">
                  {category.icon}
                </span>
                <h3>{category.title}</h3>
              </div>
              <ul>
                {category.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="work" className="projects reveal reveal-delay-2">
          <p className="section-label">Selected work</p>
          <h2>Projects are coming soon.</h2>
          <p>
            I am currently preparing case studies. In the meantime, I can share private
            demos and code samples relevant to your project.
          </p>
          <div className="empty-projects" role="status" aria-live="polite">
            <strong>No public projects yet.</strong>
            <span>Ask me for a walkthrough tailored to your stack and goals.</span>
          </div>
        </section>

        <section id="contact" className="contact reveal reveal-delay-3">
          <p className="section-label">Get in touch</p>
          <h2>Let&apos;s build something ambitious.</h2>
          <p>
            Reach out for freelance work, consulting, or full-time opportunities.
          </p>
          <div className="contact-links" aria-label="Contact methods">
            <a href="mailto:alex@example.com">alex@example.com</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;