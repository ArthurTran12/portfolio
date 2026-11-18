// Toàn bộ nội dung trang lấy từ file này.
// Các mục có "TODO" cần cập nhật lại theo CV.

export type LogoBadge =
  | { kind: "image"; src: string; bg?: string; padding?: number }
  | { kind: "icon"; icon: "react"; bg?: string }
  | { kind: "text"; text: string; bg?: string; color?: string };

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  link?: string;
  /** Logo công ty / trường hiển thị trong card */
  logo: LogoBadge;
  shadow: string;
};

export type Project = {
  title: string;
  /** Logo / app icon của dự án */
  logo: string;
  category: string;
  description: string;
  image: string;
  links: { label: string; href: string }[];
  tech: string[];
};

export type MiniProject = {
  title: string;
  logo?: string;
  category: string;
  description: string;
  tech: string[];
  href?: string;
};

export const profile = {
  name: "Trần Đăng Tân",
  shortName: "Tan",
  role: "Mobile Developer",
  tagline: {
    lead: "A Developer who",
    line1: "Builds apps you",
    line2Start: "love to ",
    highlight: "use",
    line2End: "...",
    note: "Because a great product should feel effortless in your hands.",
  },
  headline: "I'm a Mobile Developer.",
  current: {
    prefix: "Currently, I'm a Flutter Developer at",
    company: "EVsafe",
    link: "#experience",
  },
  intro: [
    "Developer since 2022, graduated from FPT College with a Frontend specialization.",
    "~2 years building web apps with React & Next.js, now focused on cross-platform",
    "mobile apps with Flutter — from EV charging tools to Zalo Mini Apps.",
  ],
  email: "your.email@example.com", // TODO: email trong CV
  socials: {
    github: "https://github.com/", // TODO
    linkedin: "https://www.linkedin.com/", // TODO
    facebook: "https://www.facebook.com/", // TODO
  },
};

export const experiences: Experience[] = [
  {
    company: "EVsafe",
    role: "Flutter Developer",
    period: "2025 – Present", // TODO: tháng bắt đầu
    description:
      "Building mobile apps and a Zalo Mini App to help drivers find and use EV charging stations.",
    link: "#projects",
    logo: { kind: "image", src: "/projects/evsafe-driver-icon.png" },
    shadow: "/figma/exp-shadow-1.svg",
  },
  {
    company: "CHTLab",
    role: "Mobile Developer",
    period: "03/2024 – Present",
    description:
      "Developing and maintaining the company's mobile projects with Flutter.",
    logo: { kind: "image", src: "/projects/chtlab-logo.svg", bg: "#ffffff", padding: 8 },
    shadow: "/figma/exp-shadow-1.svg",
  },
  {
    company: "Frontend Developer",
    role: "React / Next.js",
    period: "2022 – 2024", // TODO: tên công ty
    description:
      "Built responsive web apps and landing pages with ReactJS, Next.js and TypeScript.",
    logo: { kind: "icon", icon: "react", bg: "linear-gradient(135deg,#20232a,#3b2a6b)" }, // TODO: logo công ty
    shadow: "/figma/exp-shadow-2.svg",
  },
  {
    company: "FPT College",
    role: "Frontend Specialization",
    period: "Graduated 2022",
    description:
      "Software development diploma focused on modern frontend engineering.",
    logo: { kind: "text", text: "FPT", bg: "#ffffff", color: "#f27024" },
    shadow: "/figma/exp-shadow-3.svg",
  },
];

export const skills: { name: string; icon: SkillIcon }[] = [
  { name: "Flutter", icon: "flutter" },
  { name: "Dart", icon: "dart" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Firebase", icon: "firebase" },
  { name: "Figma", icon: "figma" },
  { name: "Git", icon: "git" },
  { name: "Android", icon: "android" },
  { name: "iOS", icon: "apple" },
  { name: "Zalo Mini App", icon: "zalo" },
];

export type SkillIcon =
  | "flutter"
  | "dart"
  | "react"
  | "nextjs"
  | "typescript"
  | "javascript"
  | "tailwind"
  | "firebase"
  | "figma"
  | "git"
  | "android"
  | "apple"
  | "zalo";

// TODO: đối chiếu với CV — thêm/bớt dự án, link store/website thật.
export const projects: Project[] = [
  {
    title: "EVsafe Driver App",
    logo: "/projects/evsafe-driver-icon.png",
    category: "Mobile App · EVsafe",
    description:
      "App for EV drivers to find nearby charging stations on the map, scan QR to start charging, follow live charging sessions and manage subscriptions and history.",
    image: "/projects/evsafe-driver.png",
    links: [{ label: "EVsafe", href: "#" }],
    tech: ["Flutter", "Bloc", "Google Maps", "Firebase"],
  },
  {
    title: "EVsafe Host App",
    logo: "/projects/evsafe-host-icon.png",
    category: "Mobile App · EVsafe",
    description:
      "App for charging-station owners: set up chargers over Bluetooth, monitor stations and revenue, and manage pricing and subscription packages.",
    image: "/projects/evsafe-host.png",
    links: [{ label: "EVsafe Host", href: "#" }],
    tech: ["Flutter", "Bloc", "Bluetooth LE", "Firebase"],
  },
  {
    title: "EVsafe Maps & Zalo Mini App",
    logo: "/projects/evsafe-driver-icon.png",
    category: "Web · Zalo Mini App · EVsafe",
    description:
      "Charging-station map with real-time availability, plus a Zalo Mini App so drivers can find, connect and start charging right inside Zalo — no install needed.",
    image: "/projects/evsafe-maps.jpg",
    links: [{ label: "EVsafe Maps", href: "#" }],
    tech: ["React", "TypeScript", "Google Maps", "Zalo Mini App"],
  },
  {
    title: "EVsafe Website",
    logo: "/projects/evsafe-logo.svg",
    category: "Landing Page · EVsafe",
    description:
      "Company landing page introducing EVsafe's smart charging stations, apps for drivers and station owners, and the partner program.",
    image: "/projects/evsafe-website.png",
    links: [{ label: "Website", href: "#" }],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Plugilo",
    logo: "/projects/plugilo-icon.webp",
    category: "Mobile App",
    description:
      "Social and e-commerce platform where users collect and share data-driven cards. Built with Clean Architecture and BLoC, plus a partner admin portal on the web.",
    image: "/projects/plugilo.png",
    links: [{ label: "Plugilo", href: "#" }],
    tech: ["Flutter", "Clean Architecture", "Bloc", "React"],
  },
  {
    title: "Sleep Tech · ViCare",
    logo: "/projects/sleeptech-icon.png",
    category: "IoT Mobile App · Landing Page",
    description:
      "Non-contact sleep monitoring platform: the app provisions devices over BLE and shows sleep, breathing and heart-rate data in real time; ViCare landing page for remote elderly care.",
    image: "/projects/vicare.webp",
    links: [{ label: "Sleep Tech", href: "#" }],
    tech: ["Flutter", "Riverpod", "Bluetooth LE", "Next.js"],
  },
];

export const otherProjects: MiniProject[] = [
  {
    title: "NOTT App",
    logo: "/projects/nott-icon.png",
    category: "Mobile App",
    description: "Flutter app with Bluetooth device connection and real-time updates via Socket.IO, multi-language support.",
    tech: ["Flutter", "Bloc", "Socket.IO", "BLE"],
  },
  {
    title: "Quản lý chi tiêu",
    logo: "/projects/chitieu-icon.png",
    category: "Personal Web App",
    description: "Track daily spending, salary, fixed costs and monthly savings, synced with Google login.",
    tech: ["React 19", "HeroUI", "Firebase"],
    href: "https://quanlychitieu-6b945.web.app",
  },
  {
    title: "Chăm Tập",
    logo: "/projects/chamtap-icon.png",
    category: "Personal Web App",
    description: "Gym workout logger in the style of Hevy: live sessions, set tracking, rest timer and history.",
    tech: ["React", "TypeScript", "Ant Design"],
  },
  {
    title: "K86 Inventory",
    category: "Web App",
    description: "Warehouse stock-taking and inventory management web app with a responsive UI.",
    tech: ["React", "TypeScript", "Ant Design"],
  },
];

export const contact = {
  title: "Contact",
  text: [
    "I'm currently looking for a new Flutter / Frontend role where I can build products",
    "that make people's lives easier. Have a project in mind? Let's connect.",
  ],
};
