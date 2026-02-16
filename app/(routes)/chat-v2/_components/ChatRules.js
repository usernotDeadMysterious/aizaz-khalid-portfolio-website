export const rules = [
  {
    keywords: ["salam", "assalam o alaikum"],
    response:
      "Walaikum Assalam Habibii. My Name is Jarvis. I’m Aizaz’s assistant. How may I help you today?",
  },
  {
    keywords: ["hi", "hello", "hey"],
    response:
      "Hey 👋 I’m Jarvis... Aizaz’s assistant. Let’s talk tech, security, or projects.",
  },
  {
    keywords: ["how are you", "how are u", "how r u"],
    response: "System status: 🟢 Operational. All modules running smoothly.",
  },
  {
    keywords: ["who are you", "who are u", "who r u", "who"],
    response:
      "I’m Jarvis 🤖 — Aizaz’s AI assistant. I handle queries about his skills, projects, and cybersecurity expertise.",
  },

  // ================= TECH =================
  {
    keywords: ["skills", "technologies", "tech stack"],
    response:
      "Tech Stack: React, Next.js, Node.js, Express, MongoDB, TailwindCSS, TypeScript, and cybersecurity tools.",
  },
  {
    keywords: ["frontend", "ui", "design"],
    response:
      "Frontend focus includes React, Next.js, modern UI systems, animations, and responsive design.",
  },
  {
    keywords: ["backend", "api", "server"],
    response:
      "Backend development with Node.js, Express, REST APIs, authentication systems, and secure database integration.",
  },
  {
    keywords: ["database", "mongo", "mongodb"],
    response:
      "Database experience includes MongoDB with optimized queries, schema design, and secure data handling.",
  },

  // ================= PROJECTS =================
  {
    keywords: ["projects", "work", "portfolio"],
    response:
      "You can explore the Projects section for full demos. Includes full-stack apps, internal portals, and security dashboards.",
  },
  {
    keywords: ["internal portal", "portal"],
    response:
      "Internal-Portal-Project: MERN + Next.js system with auth, profiles, admin panels, visa/job modules, and document uploads.",
  },
  {
    keywords: ["real estate", "property"],
    response:
      "Real Estate platform project focused on UK property sourcing, lead generation, and investor-focused UX.",
  },

  // ================= SECURITY =================
  {
    keywords: ["cyber", "security", "pentest", "soc"],
    response:
      "Focus areas include web security, SOC workflows, threat detection, penetration testing fundamentals, and secure full-stack development.",
  },
  {
    keywords: ["vulnerability", "owasp", "xss", "csrf", "sql injection"],
    response:
      "Security knowledge includes OWASP Top 10 risks such as XSS, CSRF, SQL Injection, authentication flaws, and secure coding practices.",
  },
  {
    keywords: ["authentication", "jwt", "login"],
    response:
      "Authentication systems built using JWT, secure cookies, role-based access control, and protected routes.",
  },

  // ================= CAREER =================
  {
    keywords: ["experience", "background"],
    response:
      "Aizaz combines full-stack development with cybersecurity knowledge to build secure, production-ready applications.",
  },
  {
    keywords: ["freelance", "available"],
    response:
      "Yes, available for freelance and collaboration opportunities. Let’s build something secure and scalable.",
  },
  {
    keywords: ["hire", "contact", "email"],
    response:
      "You can reach out through the Contact section on the website. Let’s connect.",
  },
  {
    keywords: ["resume", "cv"],
    response:
      "You can download the resume from the Certifications section.",
  },

  // ================= FUN / HUMAN =================
  {
    keywords: ["thanks", "thank you"],
    response:
      "You're welcome 😎 Always here to assist.",
  },
  {
    keywords: ["bye", "goodbye", "see you"],
    response:
      "Session terminated 🔐 Stay secure.",
  },
];


export function getBotReply(message) {
  const text = message.toLowerCase();
  const defaultreply = "Jarvis: Unable to process request.\n\nAvailable modules → skills | projects | security | experience | contact.";

  for (const rule of rules) {
    if (rule.keywords.some((k) => text.includes(k))) {
      return rule.response;
    }
  }

 return defaultreply



}
