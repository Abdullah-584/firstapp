import { useEffect } from "react";
import "./App.css";

const skills = [
  {
    title: "Mobile Development",
    icon: "FL",
    items: ["Flutter", "Dart", "State Management", "Routing", "Testing"]
  },
  {
    title: "Web Development",
    icon: "WEB",
    items: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"]
  },
  {
    title: "AI & Design",
    icon: "AI",
    items: ["Computer Vision", "NLP", "Figma", "Photoshop", "Illustrator"]
  },
  {
    title: "Backend & Data",
    icon: "DB",
    items: ["Python", "SQL", "Firebase", "Data Preprocessing", "Model Evaluation"]
  }
];

const achievements = [
  {
    title: "1st Place Winner",
    detail: "Open House and Job Fair 2026 | University of Wah, Pakistan (May 19, 2026)"
  },
  {
    title: "2nd Place Runner-Up",
    detail: "6th International Student Convention & Expo 2026 | Android App Development Module"
  },
  {
    title: "Multi-award-winning developer",
    detail: "Recognized at both national and institutional levels for Android app development"
  }
];

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Heavy Industries Taxila",
    period: "Jun 2025 – Aug 2025",
    detail:
      "Designed and developed an interactive e-catalogue for the Modified Tank Al-Zarrar using Unity, improving technical documentation accessibility for engineering teams."
  },
  {
    role: "UI/UX Designer",
    company: "Spare Providers",
    period: "Apr 2024 – Jun 2024",
    detail:
      "Designed user-centered interfaces using Figma and Adobe Illustrator, improving usability and visual consistency across deliverables."
  }
];

const education = [
  {
    title: "BS Software Engineering",
    school: "Wah Engineering College, University of Wah",
    period: "2022 – Present"
  },
  {
    title: "Intermediate (Pre-Engineering)",
    school: "Base Group of Colleges, Wah Cantt",
    period: "2022"
  },
  {
    title: "Matriculation",
    school: "FG Boys Public High School No. 1, Wah Cantt",
    period: "2020"
  }
];

const projects = [
  {
    name: "Auto Aid",
    stack: "Flutter • Dart • Android & iOS",
    detail:
      "Roadside mechanic service app with real-time GPS location, service booking, and push notifications. Winner at University of Wah Open House & Job Fair 2026."
  },
  {
    name: "Violence & Weapon Detection System",
    stack: "Python • CV • Deep Learning",
    detail:
      "Real-time detection system using deep learning object detection models for surveillance and public safety applications."
  },
  {
    name: "CV Craft",
    stack: "Flutter • Dart • Android & iOS",
    detail:
      "Cross-platform resume builder app with multiple templates, real-time preview, and PDF export functionality."
  },
  {
    name: "E-Catalogue for Modified Tank Al-Zarrar",
    stack: "Unity • HIT Project",
    detail:
      "Interactive digital catalogue for technical components of the Al-Zarrar tank, deployed for engineering personnel at Heavy Industries Taxila."
  },
  {
    name: "Awam Connect — KP",
    stack: "Flutter • Dart • Firebase",
    detail:
      "Civic engagement platform featuring in-app voting, an admin dashboard for vote monitoring, and a citizen complaint portal."
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
          muhammad<span>.</span>abdullah
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#achievements">Achievements</a>
          <a href="#experience">Experience</a>
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
              <p className="eyebrow">Software Engineering Student • Flutter • Full Stack</p>
              <h1>
                Muhammad Abdullah
                <span>building apps that solve real problems.</span>
              </h1>
              <p className="hero-copy">
                Motivated Software Engineering student with hands-on experience in Flutter mobile development,
                UI/UX design, computer vision, and full-stack web development. Multi-award-winning developer
                with proven delivery in internships, competitions, and academic projects.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">
                  View projects
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Contact me
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
                <span className="code-file">profile/summary.dart</span>
              </div>
              <pre className="code-body">
                <code>{`class Profile {
  final String name = "Muhammad Abdullah";
  final String focus = "Flutter, UI/UX, CV, Full Stack";
  final String location = "Wah Cantt, Pakistan";

  final List<String> highlights = [
    "1st Place Winner - Open House and Job Fair 2026",
    "Runner-Up - 6th International Student Convention & Expo 2026",
    "Intern at Heavy Industries Taxila"
  ];
}`}</code>
              </pre>
            </aside>
          </div>
        </section>

        <section id="about" className="about reveal">
          <p className="section-label">Background</p>
          <h2>Professional summary.</h2>
          <p>
            Motivated Software Engineering student with hands-on experience in Flutter mobile development,
            UI/UX design, computer vision, and full-stack web development. Proven ability to deliver in
            real-world internship and competitive academic environments. Eager to contribute to innovative tech teams.
          </p>
        </section>

        <section id="achievements" className="reveal reveal-delay-1">
          <p className="section-label">Key achievements</p>
          <div className="card-grid">
            {achievements.map(item => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="reveal reveal-delay-2">
          <p className="section-label">Professional experience</p>
          <div className="timeline">
            {experience.map(item => (
              <article className="timeline-item" key={item.role + item.company}>
                <div className="timeline-marker" aria-hidden="true" />
                <div>
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
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
          <p className="section-label">Projects</p>
          <h2>Work I have built.</h2>
          <p>
            A selection of mobile, computer vision, and civic-tech projects built during internships,
            competitions, and academic work.
          </p>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.name}>
                <p className="project-stack-line">{project.stack}</p>
                <h3>{project.name}</h3>
                <p>{project.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal reveal-delay-2">
          <p className="section-label">Education</p>
          <div className="card-grid education-grid">
            {education.map(item => (
              <article className="info-card" key={item.title + item.school}>
                <h3>{item.title}</h3>
                <p className="timeline-company">{item.school}</p>
                <p>{item.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact reveal reveal-delay-3">
          <p className="section-label">Get in touch</p>
          <h2>Let&apos;s build something useful.</h2>
          <p>
            Open to freelance work, internships, and full-time opportunities.
          </p>
          <div className="contact-links" aria-label="Contact methods">
            <a href="mailto:chabdullah1472@gmail.com">chabdullah1472@gmail.com</a>
            <a href="tel:+923443511891">+92 344 3511891</a>
            <span className="contact-chip">Wah Cantt, Pakistan</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App; 