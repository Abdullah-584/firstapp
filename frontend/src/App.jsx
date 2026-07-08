import { motion, useReducedMotion } from "framer-motion";
import "./App.css";

const explorer = [
  {
    label: "portfolio.ide",
    active: true,
    children: [
      "about.md",
      "experience.md",
      "achievements.md",
      "projects.md",
      "skills.md",
      "contact.md"
    ]
  },
  {
    label: "assets",
    children: ["avatar.png", "resume.pdf", "case-study.pdf"]
  }
];

const stats = [
  { label: "Awards", value: "2" },
  { label: "Internships", value: "2" },
  { label: "Projects", value: "5+" }
];

const experience = [
  {
    title: "Software Engineer Intern",
    company: "Heavy Industries Taxila",
    period: "Jun 2025 - Aug 2025",
    detail:
      "Built an interactive e-catalogue for the Modified Tank Al-Zarrar using Unity and improved technical documentation access."
  },
  {
    title: "UI/UX Designer",
    company: "Spare Providers",
    period: "Apr 2024 - Jun 2024",
    detail:
      "Designed user-centered interfaces in Figma and Illustrator with a focus on usability, clarity, and brand consistency."
  }
];

const projects = [
  {
    name: "Auto Aid",
    stack: "Flutter • Dart • Android/iOS",
    detail: "Roadside mechanic booking app with GPS, booking flow, and push notifications."
  },
  {
    name: "Violence & Weapon Detection",
    stack: "Python • CV • Deep Learning",
    detail: "Real-time detection system for surveillance and public safety workflows."
  },
  {
    name: "CV Craft",
    stack: "Flutter • Dart",
    detail: "Resume builder with templates, live preview, and PDF export."
  },
  {
    name: "Awam Connect — KP",
    stack: "Flutter • Firebase",
    detail: "Civic engagement app with vote monitoring and complaint portal."
  }
];

const skills = [
  "Flutter", "Dart", "TypeScript", "JavaScript", "Python", "Figma", "SQL", "Firebase"
];

function App() {
  const reduceMotion = useReducedMotion();

  const panel = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.06, delayChildren: 0.02 } }
  };

  return (
    <div className="ide-shell">
      <motion.header
        className="ide-topbar"
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="window-controls" aria-hidden="true">
          <span className="dot close" />
          <span className="dot min" />
          <span className="dot max" />
        </div>
        <div className="title-group">
          <span className="workspace-title">Muhammad Abdullah / portfolio.ide</span>
          <span className="workspace-subtitle">IDE portfolio workspace</span>
        </div>
        <div className="topbar-actions">
          <span>Run</span>
          <span>Preview</span>
          <span>Deploy</span>
        </div>
      </motion.header>

      <div className="ide-layout">
        <motion.aside className="ide-sidebar panel" initial="hidden" animate="visible" variants={stagger}>
          <motion.div className="panel-section" variants={panel}>
            <p className="panel-label">Explorer</p>
            <div className="explorer-tree">
              {explorer.map(folder => (
                <div className="explorer-folder" key={folder.label}>
                  <div className={folder.active ? "folder-row active" : "folder-row"}>
                    <span className="folder-caret">▸</span>
                    <span>{folder.label}</span>
                  </div>
                  <div className="file-list">
                    {folder.children.map(file => (
                      <div className={file === "about.md" ? "file-row active" : "file-row"} key={file}>
                        <span className="file-icon">▣</span>
                        <span>{file}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="panel-section" variants={panel}>
            <p className="panel-label">Quick Stats</p>
            <div className="stats-stack">
              {stats.map(item => (
                <div className="mini-stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="panel-section" variants={panel}>
            <p className="panel-label">Shortcuts</p>
            <div className="shortcut-list">
              <span>Ctrl + P</span>
              <span>Cmd + Shift + D</span>
              <span>Ctrl + `</span>
            </div>
          </motion.div>
        </motion.aside>

        <div className="ide-main-column">
          <motion.section className="editor-wrap panel" initial="hidden" animate="visible" variants={stagger}>
            <motion.div className="tab-bar" variants={panel}>
              <div className="tab active">about.md</div>
              <div className="tab">projects.md</div>
              <div className="tab">contact.md</div>
            </motion.div>

            <motion.div className="editor-toolbar" variants={panel}>
              <div className="toolbar-breadcrumbs">
                <span>portfolio</span>
                <span>/</span>
                <span>about.md</span>
              </div>
              <div className="toolbar-state">Editing</div>
            </motion.div>

            <motion.div className="editor-pane" variants={panel}>
              <div className="editor-gutter" aria-hidden="true">
                {Array.from({ length: 18 }, (_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
              </div>
              <div className="editor-content">
                <div className="code-comment">// Muhammad Abdullah — Software Engineering student</div>
                <div>
                  <span className="code-keyword">const</span> <span className="code-name">profile</span> = {'{'}
                </div>
                <div className="indent-1">
                  <span className="code-prop">name</span>: <span className="code-string">"Muhammad Abdullah"</span>,
                </div>
                <div className="indent-1">
                  <span className="code-prop">focus</span>: <span className="code-string">"Flutter, AI, Full Stack"</span>,
                </div>
                <div className="indent-1">
                  <span className="code-prop">location</span>: <span className="code-string">"Wah Cantt, Pakistan"</span>,
                </div>
                <div className="indent-1">
                  <span className="code-prop">summary</span>: <span className="code-string">"Award-winning developer with real internship experience."</span>
                </div>
                <div>{'}'}</div>

                <div className="editor-section-card">
                  <div className="section-card-head">
                    <span>Professional Experience</span>
                    <span>02 entries</span>
                  </div>
                  {experience.map(item => (
                    <div className="section-item" key={item.company}>
                      <div className="section-item-title">{item.title}</div>
                      <div className="section-item-meta">
                        {item.company} · {item.period}
                      </div>
                      <div className="section-item-detail">{item.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="editor-section-card">
                  <div className="section-card-head">
                    <span>Featured Projects</span>
                    <span>04 entries</span>
                  </div>
                  <div className="project-grid ide-grid">
                    {projects.map(project => (
                      <motion.div
                        className="project-card ide-project"
                        key={project.name}
                        whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="project-title-row">
                          <span>{project.name}</span>
                          <span className="project-stack">{project.stack}</span>
                        </div>
                        <p>{project.detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          <div className="bottom-grid">
            <motion.section className="panel terminal-panel" initial="hidden" animate="visible" variants={panel}>
              <div className="terminal-head">
                <span>TERMINAL</span>
                <span>bash</span>
              </div>
              <div className="terminal-body">
                <div><span className="terminal-prompt">muhammad@portfolio</span> build --profile</div>
                <div>✔ UI shell compiled</div>
                <div>✔ Motion layer enabled</div>
                <div>✔ Dark IDE layout ready</div>
                <div className="terminal-cursor">▌</div>
              </div>
            </motion.section>

            <motion.section className="panel inspector-panel" initial="hidden" animate="visible" variants={panel}>
              <p className="panel-label">Inspector</p>
              <div className="inspector-card">
                <span className="inspector-key">Status</span>
                <strong>Open for internships</strong>
              </div>
              <div className="inspector-card">
                <span className="inspector-key">Awards</span>
                <strong>1st place · 2nd place</strong>
              </div>
              <div className="inspector-card">
                <span className="inspector-key">Email</span>
                <strong>chabdullah1472@gmail.com</strong>
              </div>
              <div className="skills-cloud">
                {skills.map(skill => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <footer className="status-bar">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>Framer Motion</span>
        <span>Ready</span>
      </footer>
    </div>
  );
}

export default App;