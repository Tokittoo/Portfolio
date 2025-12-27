import { IconBrandJavascript, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from "@tabler/icons-react"
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiVite } from "react-icons/si";

export type Project = {
  title: string,
  description: string,
  image?: string,
  liveLink: string,
  sourceLink?: string,
  content: React.ReactNode,
  demoLink?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

export type UpcomingProject = {
  title: string,
  description: string,
  image?: string,
  link?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

const Html = {
  name: 'HTML',
  logo: <FaHtml5 size={18} />
}

const CSS = {
  name: 'CSS',
  logo: <FaCss3 size={18} />
}

const NextJS = {
  name: 'Next.js',
  logo: <IconBrandNextjs size={18} />
}

const React = {
  name: 'React',
  logo: <IconBrandReact size={18} />
}

const Tailwind = {
  name: 'Tailwind CSS',
  logo: <IconBrandTailwind size={18} />
}


const TypeScript = {
  name: 'TypeScript',
  logo: <IconBrandTypescript size={18} />
}

const NodeJS = {
  name: 'NodeJS',
  logo: <IconBrandNodejs size={18} />
}

const JavaScript = {
  name: 'JavaScript',
  logo: <IconBrandJavascript size={18} />
}

const Motionls = {
  name: 'Framer Motion',
  logo: <TbBrandFramerMotion size={18} />
}

const Vitejs = {
  name: 'Vite.js',
  logo: <SiVite size={18} />
}


export const projects: Project[] = [
  {
    title: 'Sibhi v1.0',
    description: "Personal cybersecurity portfolio showcasing Write-ups, Skills, Experience, and Professional Insights.",
    liveLink: 'https://xibhi.netlify.app',
    sourceLink: 'https://github.com/xibhi/xibhi.github.io',
    content: (
      <>
        <p>
          Sibhi v1.0 is a personal cybersecurity portfolio showcasing Write-ups, Skills, Experience, and Professional Insights.
        </p>
      </>
    ),
    image: '/Projects/Sibhi.webp',
    tags: [
      Html,
      CSS,
      JavaScript,
    ]
  },
  {
    title: 'Sibhi v2.0',
    description: "Redesigned Professional cybersecurity portfolio with structured Write-ups, Skills, Experience, and Achievements.",
    liveLink: 'https://xibhi.vercel.app',
    sourceLink: 'https://github.com/xibhi/portfolio',
    content: (
      <>
        <p>
          Sibhi v2.0 is a redesigned Professional cybersecurity portfolio with structured Write-ups, Skills, Experience, and Achievements.
        </p>
      </>
    ),
    image: '/Projects/Sibhi-v2.webp',
    tags: [
      React,
      TypeScript,
      Tailwind,
      NextJS,
    ]
  },
  {
    title: 'Penquin',
    description: "Collaborative security tooling initiative with Sibhi delivering a modular toolkit for advanced vulnerability discovery.",
    liveLink: 'https://penquin.vercel.app',
    sourceLink: 'https://github.com/xibhi/penquin',
    content: (
      <>
        <p>
          Penquin is a collaborative security tooling initiative with Sibhi delivering a modular toolkit for advanced vulnerability discovery.
        </p>
      </>
    ),
    demoLink: 'https://res.cloudinary.com/sputifyy/video/upload/v1766151214/vynk-demo_xdpfa3.mp4',
    tags: [
      React,
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind,
      Motionls,
    ]
  },
  {
    title: 'SECURE WORLDZ',
    description: "A platform for security professionals to share their knowledge and experiences with the community.",
    liveLink: 'https://secureworldz.vercel.app',

    content: (
      <>
        <p>
          SECURE WORLDZ is a platform for security professionals to share their knowledge and experiences with the community.
        </p>
      </>
    ),
    image: '/Projects/Secure-Worldz.webp',
    tags: [
      React,
      NextJS,
      TypeScript,
      Tailwind,

    ]
  },
]

export const upcomingProjects: UpcomingProject[] = [
  {
    title: 'Drago',
    description: "Drago is a cybersecurity-focused site offering a growing library of tools and project checklists to help users secure their digital assets.",
    tags: [
      React,
      Vitejs,
      NodeJS,
      TypeScript,
      Tailwind,
    ]
  }

]