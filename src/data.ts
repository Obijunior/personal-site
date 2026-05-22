export interface ProjectData {
	title: string;
	description: string;
	technologies: string[];
	hostedLink?: string;
	link?: string;
	index: string;
	category: string;
	award?: string;
	featured?: boolean;
	visual: "code" | "text" | "label" | "image";
	visualContent?: string;
	visualImage?: string;
}

export interface Experience {
	id: string;
	title: string;
	company: string;
	period: string;
	location: string;
	website?: string;
	description: string[];
	technologies: string[];
}

export interface Education {
	institution: string;
	degree: string;
	period: string;
	location: string;
	details?: string[];
}

export interface Certification {
	name: string;
	issuer: string;
	date?: string;
}

export interface SkillCategory {
	category: string;
	items: string[];
}

export const projects: ProjectData[] = [
	{
		title: "ECHIDNA",
		description:
			"Ring-3 Linux kernel rootkit integrating with the Mythic C2 framework. Implements LPE, dynamic-library hijacking, file/process/network hiding and persistence mechanisms for adversarial red-team simulation. Built as a funded VICEROY research project.",
		technologies: ["C", "Linux Kernel", "Mythic C2"],
		link: "https://github.com/JamesNKing/echidna",
		index: "001",
		category: "security",
		award: "$6,500 VICEROY Scholarship · 7th/50 national CTF",
		featured: true,
		visual: "code",
		visualContent: `<span class="hl">// Echidna — kernel rootkit agent</span>
<span class="dim2">// VICEROY research · not public yet</span>

<span class="hl">typedef</span> struct _DKOM_ENTRY {
  LIST_ENTRY  ActiveLinks;
  ULONG       UniqueProcessId;
  PVOID       Token;
} PROC_ENTRY;

<span class="hl">NTSTATUS</span> HideProcess(ULONG pid) {
  PEPROCESS proc = <span class="hl">FindProcessById</span>(pid);
  <span class="dim2">// unlink from PsActiveProcessHead</span>
  RemoveEntryList(&amp;proc-&gt;ActiveLinks);
  <span class="hl">return</span> STATUS_SUCCESS;
}`,
	},
	{
		title: "TERRANOVA",
		description:
			"On-chain commodity trading platform enabling tokenization of real-world assets on the XRP Ledger.",
		technologies: ["Next.js", "XRPL", "Solidity", "TailwindCSS"],
		hostedLink: "https://kubi-cohort-2025.vercel.app/",
		link: "https://github.com/Obijunior/kubi-cohort-2025",
		index: "002",
		category: "web3",
		award: "Best Business Analysis · Best Use of XRPL",
		visual: "text",
		visualContent: `<span class="hl">TERRANOVA</span><br/><span style="color:#4a3a20">XRP LEDGER ─────────</span><br/><span style="color:#3a2a10">◆ RWA tokenized</span><br/><span style="color:#3a2a10">◆ Trade executed</span><br/><span class="hl">◆ Settlement: 3.4s</span><br/><span style="color:#4a3a20">Best Business Analysis ★</span>`,
	},
	{
		title: "TRADE WAR LAB SIMULATION PLATFORM",
		description:
			"U.S.–China trade policy simulation platform. Dynamic modeling of tariff impacts using TIES framework data.",
		technologies: ["Next.js", "Supabase", "TypeScript", "R"],
		hostedLink: "https://tradewarlab.com",
		index: "003",
		category: "research",
		visual: "label",
		visualContent: "TWL",
	},
];

export const experiences: Experience[] = [
	{
		id: "selectquote",
		title: "Software Engineering Intern (FinTech)",
		company: "SelectQuote",
		period: "05/2026 - 08/2026",
		location: "Overland Park, KS",
		description: [
			"Co-architecting and developing a full-stack internal financial platform using React and Flask to streamline the tracking and recovery of missing capital through the corporate appeals process",
			"Engineering data processing pipelines utilizing Pandas and NumPy to clean, manipulate, and reconcile complex financial datasets for agent review",
			"Participated in code reviews, integration testing, and Agile sprints to deploy production-ready software solutions",
		],
		technologies: ["React", "Flask", "Pandas", "NumPy"],
	},
	{
		id: "twl",
		title: "Research Assistant / Lead Developer",
		company: "the Trade War Lab",
		period: "10/2025 - Present",
		location: "Lawrence, KS",
		website: "tradewarlab.com",
		description: [
			"Architected and developed a web-based trade war simulation platform utilized to model complex U.S.-China macroeconomic negotiation scenarios",
			"Applied the TIES framework and structured datasets to analyze regional impacts of trade policy",
			"Conducted statistical analysis and visualization in R to support research outputs",
		],
		technologies: ["R", "React", "TypeScript", "Supabase"],
	},
	{
		id: "kuit",
		title: "Student IT Technician",
		company: "University of Kansas IT",
		period: "05/2025 - 11/2025",
		location: "Lawrence, KS",
		description: [
			"Processed inbound support requests via phone, email, chat, and in-person, ensuring efficient response and resolution times",
			"Maintained security and confidentiality standards in compliance with FERPA and departmental policies when handling user data and account access",
		],
		technologies: ["Customer Service", "Ticketing Systems", "Troubleshooting"],
	},
	{
		id: "sardius",
		title: "Software Engineering Intern",
		company: "Sardius Media",
		period: "09/2023 - 05/2024",
		location: "Kansas City, MO",
		website: "sardius.media",
		description: [
			"Engineered frontend features and interactive UI components using React and responsive design principles",
			"Utilized Agile methodologies, including Jira, sprint planning, and team design sessions to optimize user interfaces",
		],
		technologies: ["React", "Jira", "Agile"],
	},
];

export const education: Education[] = [
	{
		institution: "University of Kansas",
		degree: "B.S. Computer Science, Minor in Math | GPA 3.78/4.00",
		period: "Expected May 2028",
		location: "Lawrence, KS",
		details: [
			"Digital Logic Design, Embedded Systems, Software Engineering, Discrete Structures, Operating Systems, DSA, Computer Architecture, Machine Learning, Theory of Computing, Modern Algebra, Linear Algebra",
		],
	},
];

export const certifications: Certification[] = [
	{ name: "CompTIA Security+", issuer: "CompTIA", date: "June 2025" },
	{ name: "GFACT", issuer: "GIAC / SANS", date: "May 2024" },
];

export const skills: SkillCategory[] = [
	{
		category: "Languages",
		items: ["Python", "JavaScript/TypeScript", "C/C++", "Rust", "Solidity", "SQL"],
	},
	{
		category: "Frameworks / Libraries",
		items: ["React", "Next.js", "Astro", "Svelte", "TailwindCSS"],
	},
	{
		category: "Tools",
		items: ["Git", "Postman", "Docker", "Node", "Linux", "Windows", "SSMS"],
	},
];
