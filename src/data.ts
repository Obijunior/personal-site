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
			"Ring-3 Linux kernel rootkit integrating with the Mythic C2 framework. Implements LPE, dynamic-library hijacking, file/process/network hiding and persistence mechanisms for adversarial red-team simulation. Unfortunately not public yet",
		technologies: ["C", "Linux Kernel", "Mythic C2"],
		index: "001",
		category: "security",
		award: "$6,500 VICEROY Scholarship · 7th/50 national CTF",
	},
	{
		title: "TERRANOVA",
		description:
			"On-chain commodity trading platform enabling tokenization of real-world assets on the XRP Ledger.",
		technologies: ["Next.js", "XRPL", "Solidity", "TailwindCSS"],
		hostedLink: "https://kubi-cohort-2025.vercel.app/",
		link: "https://github.com/Obijunior/TerraNova-KUBICohort2025/",
		index: "002",
		category: "web3",
		award: "Best Business Analysis · Best Use of XRPL",
	},
	{
		title: "VBRCC",
		description:
			"From-scratch C compiler written in Rust targeting x86-64. Hand-rolled lexer, recursive-descent parser, codegen, and a custom assembler subcrate that encodes Intel mnemonics into raw machine bytes. No LLVM, no parser generators.",
		technologies: ["Rust", "x86-64", "Compilers"],
		link: "https://github.com/Obijunior/vbrcc",
		index: "003",
		category: "systems",
	},
	{
		title: "PORTFOLIO ALLOCATOR",
		description:
			"Quantitative portfolio research pipeline. Pulls market data, estimates returns via rolling statistics or ML (Gradient Boosting), builds Ledoit-Wolf covariance matrices, and runs weekly-rebalanced backtests across pluggable allocation strategies.",
		technologies: ["Python", "scikit-learn", "NumPy", "Pandas"],
		link: "https://github.com/Obijunior/portfolio-allocator",
		index: "004",
		category: "quant",
	},
	{
		title: "TRADE WAR LAB SIMULATION PLATFORM",
		description:
			"U.S.–China trade policy simulation platform. Dynamic modeling of tariff impacts using TIES framework data.",
		technologies: ["Next.js", "Supabase", "TypeScript", "R"],
		hostedLink: "https://github.com/TradeWarLab/twl-simulation-webapp",
		index: "005",
		category: "research",
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
		technologies: ["Flask", "SQL", "SSMS", "Jira"],
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
			"Utilized Agile methodologies like sprint planning, and team design sessions to optimize user interfaces",
		],
		technologies: ["React", "Agile"],
	},
];

export const education: Education[] = [
	{
		institution: "University of Kansas",
		degree: "B.S. Computer Science, Minor in Math | GPA 3.72/4.00",
		period: "Expected May 2028",
		location: "Lawrence, KS",
		details: [
			"Digital Logic Design, Embedded Systems, Software Engineering, Discrete Structures, Operating Systems, DSA, Computer Architecture, Machine Learning, Theory of Computing, Modern Algebra, Linear Algebra",
		],
	},
];

export const certifications: Certification[] = [
	{ name: "CompTIA Security+", issuer: "CompTIA", date: "June 2025" },
	{ name: "GIAC Foundational Cybersecurity Technologies (GFACT)", issuer: "GIAC", date: "May 2024" },
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
