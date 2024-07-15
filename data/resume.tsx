import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import { Icons } from "@/components/icons";

export const DATA = {
  name: "John Amores",
  initials: "JA",
  url: "https://github.com/jamores07",
  location: "Tampa, FL",
  locationLink: "https://www.google.com/maps/place/Tampa,+FL",
  description:
    "Senior Associate at Infosys with a background in Health Science and Software Engineering.",
  summary:
    "Experienced software engineer with a diverse skill set in full-stack development, DevOps, and data analysis. Proficient in multiple programming languages and frameworks, with a strong focus on creating efficient and scalable solutions.",
  avatarUrl: "/john-amores.png", // Placeholder, replace with actual avatar URL
  skills: [
    "JavaScript",
    "HTML/CSS",
    "SQL (Postgres)",
    "NoSQL (MongoDB)",
    "Java",
    "Python",
    "NextJS",
    "React",
    "Angular",
    "Node.js",
    "Spring Boot",
    "Spring",
    "Django",
    "Git",
    "Docker",
    "AWS",
    "GCP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "johncamores@gmail.com",
    tel: "+18136487890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jamores07",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/john-amores",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Infosys",
      href: "https://www.infosys.com/",
      badges: [],
      location: "Tampa, FL",
      title: "Senior Associate",
      logoUrl: "/infosys-logo.png", // Placeholder, replace with actual logo URL
      start: "January 2021",
      end: "Present",
      description:
        "Part of the production support team, identifying and fixing recurring issues. Reduced system downtime by 40% through log analysis and SQL debugging. Analyzed, managed, and maintained multiple proprietary applications (Unified UI, Subnet Manager). Resolved UI bugs in REACT components, boosting customer order completion by 20%. Collaborated with other support teams to reduce SLA breaches by 75% using Python to categorize tickets in the ServiceNow platform.",
    },
    {
      company: "Revature",
      href: "https://revature.com/",
      badges: [],
      location: "Tampa, FL",
      title: "Junior Software Engineer",
      logoUrl: "/revature-logo.png", // Placeholder, replace with actual logo URL
      start: "August 2019",
      end: "December 2020",
      description:
        "Developed multi-tiered applications using technologies such as NextJS, React, Tailwind CSS, Java, NoSQL, and SQL. Utilized Test Driven Development with Jest and JUnit testing. Incorporated DevOps methodologies using Git and AWS. Implemented NextJS, REACT, and MongoDB to develop an AI prompt sharing social media application. Improved client's frontend interface by leveraging NextJS and third-party SaaS (Appwrite and Sentry) to build a banking application for a more intuitive user experience. Built a modern, responsive landing page for a potential travel application using NextJS and Tailwind CSS.",
    },
  ],
  education: [
    {
      school: "University of South Florida",
      href: "https://www.usf.edu/",
      degree: "Bachelor of Health Science",
      logoUrl: "/usf-logo.png", // Placeholder, replace with actual logo URL
      start: "2011",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "Unified UI (CANVAS)",
      href: "#",
      dates: "2021 - Present",
      active: true,
      description:
        "Extracted, analyzed, and loaded ticket data to form a data visualization dashboard to organize and route tickets to proper teams. Resolved UI bugs by updating REACT components of UI source code via Git pull requests. Reduced SLA breaches by using Python to auto-categorize tickets in ServiceNow platform.",
      technologies: [
        "React",
        "Java",
        "Oracle SQL Developer",
        "ServiceNow",
        "Python",
        "Git",
      ],
      links: [],
      image: "",
    },
    {
      title: "Subnetwork Manager Application",
      href: "#",
      dates: "2021 - Present",
      active: true,
      description:
        "Reduced system downtime through log analysis and SQL debugging of data flow backups. Performed CRUD operations to gather data and load into UI for order creation. Cleared out over 200 aged tickets in ServiceNow platform and reduced SLA breaches over a course of 3 months.",
      technologies: [
        "React",
        "Java",
        "Oracle SQL Developer",
        "ServiceNow",
      ],
      links: [],
      image: "",
    },
    {
      title: "Horizon Banking Application",
      href: "https://github.com/jamores07/project_bank",
      dates: "2019 - 2020",
      active: false,
      description:
        "Proof of concept for a financial SaaS platform that manages users' financial needs. Translates a Figma design using NextJS, Shadcn/UI and Tailwind CSS. Utilizes 3rd party SaaS services Appwrite and Sentry along with Plaid and Dwolla APIs. Features authentication, secure bank connections, and real-time updates.",
      technologies: [
        "NextJS",
        "React",
        "TypeScript",
        "Shadcn/UI",
        "Tailwind CSS",
        "Appwrite",
        "Plaid",
        "Dwolla",
        "Sentry",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/jamores07/project_bank",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Promptopia AI Prompt Repository",
      href: "https://github.com/jamores07/project_promptopia",
      dates: "2019 - 2020",
      active: false,
      description:
        "A modern web application that allows users to create a global repository of AI prompts. Leverages MongoDB Atlas for cloud storage of user data that allows for pagination, filtering, and other search features. Features modern design with a glass morphism trend style for a sleek and contemporary appearance. User features such as profile pages, copy to clipboard functionality, and Google authentication.",
      technologies: [
        "NextJS",
        "React",
        "TypeScript",
        "MongoDB",
        "Vercel",
        "MongoDB Atlas",
        "OAuth",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/jamores07/project_promptopia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Travel Application UI/UX Landing Page",
      href: "https://github.com/jamores07/project_travel_ux",
      dates: "2019 - 2020",
      active: false,
      description:
        "Proof of concept landing page for a hiking, outdoor travel application. Features modern web design with an appealing Hero Section, Camp Exploration Section, Engaging Travel Guide, Feature-Rich section, CTA (Call to Action), and comprehensive footer section.",
      technologies: [
        "NextJS",
        "React",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/jamores07/project_travel_ux",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
  ],
} as const;