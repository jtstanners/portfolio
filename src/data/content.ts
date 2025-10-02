import type { Project } from "../components/Projects"
import type { ExperienceItem } from "../components/Experience"
import type { EducationItem } from "../components/Education"

export const content = {
  profile: {
    name: "Jeramey Stanners",
    title: "Full Stack Software Engineer",
    summary:
      "I build reliable, accessible web apps with TypeScript, React, and modern tooling. I care about developer experience and measurable impact.",
    actions: [
      { label: "Download Resume", href: "/resume.pdf", variant: "primary" as const },
      { label: "Contact", href: "#contact", variant: "secondary" as const },
    ],
    image: "/profile.jpg",
    imageAlt: "Portrait of Jeramey Stanners",
  },
  about: {
    blurb:
      "Versatile software engineer skilled in C, C++, C#, Java, Python, TypeScript, JavaScript, SQL, HTML, and CSS. Experienced with .NET (MVC/Web API), React, React Native, and Node.js, and proficient in IIS, Git, Visual Studio, VS Code, and CI/CD pipelines (GitHub Actions, Azure DevOps). Strong foundation in object-oriented programming, MVC, RESTful API design, event-driven architecture, test-driven development, and Agile methodologies, with a proven ability to build scalable, efficient, and reliable applications.",
    skills: [
      "TypeScript",
      "React",
      ".NET",
      "Node.js",
      "Python",
      "CI/CD",
      "Agile",
    ],
  },
  projects: [
    {
      name: "Pet Stat Capstone",
      description:
        "Developed a React Native app that streamlined operations for a veterinary clinic, improving doctor-client communication and enabling clients to track pet medications. Created wireframes based on stakeholder feedback, collaborated with cross-functional teams to meet deliverables, and implemented secure authentication with Microsoft Authenticator to protect user data and ensure compliance.",
      tags: ["TypeScript", "React Native"],
    },
    {
      name: "Discord League of Legends Helper Bot",
      description:
        "Designed and developed a Discord bot in Python (discord.py) integrated with the Riot Games API to validate accounts, track player activity, and fetch live match data. Implemented user registration with input validation, JSON-based data persistence, and background tasks to detect when users entered a League of Legends match, automatically sending recommended champion builds. Integrated Riot Data Dragon API to map champion IDs to human-readable names, enhancing user experience.",
      tags: ["Python", "Discord.py", "Integrated APIs"],
      links: [{ label: "GitHub", href: "https://github.com/yourname/project-two" }],
    },
  ] as Project[],
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "Sandhills Global",
      period: "2022 - Present",
      details: [
        "Led the UI/UX design and development for a new public-facing web application, utilizing React.js to optimize user workflows and interactions, resulting in a 16% increase in user engagement and completion rates.",
        "Redeveloped legacy Visual Basic code into a React TypeScript framework, improving application performance by 35% and enabling better scalability for use by multiple sales divisions across various industries.",
        "Implemented structured practices for peer code reviews and test-driven development (TDD), fostering a culture of high-quality, maintainable, and scalable code while reducing defects and ensuring adherence to industry standards.",
        "Deployed production updates with zero downtime, utilizing CI/CD pipelines to ensure smooth rollouts and minimal disruption to business operations across multiple industry sectors.",
        "Developed new features for internal .NET-based tools, enabling streamlined business operations and driving increased sales efficiency. Enhanced system functionality to support equipment sales processes, resolving 10% of reported bugs.",
        "Mentored interns in software development, providing guidance on frameworks, coding practices, and business logic.",
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Arizona State University",
      period: "2020 - 2023",
    },
    {
      degree: "Associate of Science",
      school: "Pima Community College",
      period: "2016 - 2020",
    }
  ] as EducationItem[],
  contact: {
    email: "jtstanners@gmail.com",
    location: "Tucson, Arizona",
    socials: [
      { label: "LinkedIn", href: "www.linkedin.com/in/jeramey-stanners-901162248" },
      { label: "GitHub", href: "https://github.com/jtstanners" },
    ],
  },
}

export type Content = typeof content
