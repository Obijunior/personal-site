import { subgroupAdd } from "three/tsl";

export interface ProjectData {
	title: string;
	description: string;
	technologies: string[];
	hostedLink?: string;
	link?: string;
	category: string;
	type: "personal" | "hackathon" | "research";
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
		category: "security",
		type: "research",
	},
	{
		title: "TERRANOVA",
		description:
			"On-chain commodity trading platform enabling tokenization of real-world assets on the XRP Ledger.",
		technologies: ["Next.js", "XRPL", "Solidity", "TailwindCSS"],
		hostedLink: "https://kubi-cohort-2025.vercel.app/",
		link: "https://github.com/Obijunior/TerraNova-KUBICohort2025/",
		category: "web3",
		type: "hackathon",
		award: "Best Business Analysis · Best Use of XRPL",
	},
	{
		title: "VBRCC",
		description:
			"From-scratch C compiler written in Rust targeting x86-64 Intel style assembly. Custom lexer, recursive-descent parser, codegen, and a custom assembler that encodes Intel mnemonics into raw machine bytes.",
		technologies: ["Rust", "x86-64", "Compilers", "C"],
		link: "https://github.com/Obijunior/vbrcc",
		category: "systems",
		type: "personal",
	},
	// {
	// 	title: "PORTFOLIO ALLOCATOR",
	// 	description:
	// 		"Quantitative portfolio research pipeline. Pulls market data, estimates returns via rolling statistics or ML (Gradient Boosting), builds Ledoit-Wolf covariance matrices, and runs weekly-rebalanced backtests across pluggable allocation strategies.",
	// 	technologies: ["Python", "scikit-learn", "NumPy", "Pandas"],
	// 	link: "https://github.com/Obijunior/portfolio-allocator",
	// 	category: "finance",
	// 	type: "personal",
	// },
	{
		title: "TRADE WAR LAB SIMULATION PLATFORM",
		description:
			"Web-based classroom simulation platform for U.S.–China trade negotiation scenarios. Supports instructor-managed phases, team briefings, real-time proposal voting, and multi-round bilateral negotiation, with structured data collection on negotiation behavior for research.",
		technologies: ["Next.js", "Supabase", "TypeScript", "Full-Stack Web Development"],
		hostedLink: "https://github.com/TradeWarLab/twl-simulation-webapp",
		category: "economics / political science",
		type: "research",
	},
	{
		title: "Campus Shield",
		description: "On-chain emergency fund for university students, powered by USDC on Base",
		technologies: ["Base", "USDC", "Solidity", "Next.js"],
		hostedLink: "https://mbc-2025.vercel.app/",
		link: "https://github.com/Obijunior/mbc-2025",
		category: "web3",
		type: "hackathon",
	},
	{
		title: "Black-Scholes implementation",
		description: "Small project that implements the Black–Scholes option pricing model and helpers to fetch/compute inputs (historical volatility, current stock price, and an approximate USD risk-free rate). Only requires stock ticker and time to maturity",
		technologies: ["Python", "NumPy", "Pandas"],
		hostedLink: "https://github.com/Obijunior/black-scholes-implementation",
		category: "finance",
		type: "personal",
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
			"Developing full-stack internal financial tooling in Flask and SQL to automate tracking and recovery of ~$400k in missing capital through the corporate appeals process, improving reconciliation workflows across accounting operations.",
			"Building an AWS-hosted internal LLM assistant featuring RAG, S3-backed document retrieval, semantic caching, rate limiting, and conversational search capabilities for finance teams.",

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
			"Built a fullstack web-based classroom simulation platform for U.S.–China trade negotiation scenarios, using NextJS, Typescript, and Supabase",
			"The simulation supports instructor-managed phases, team briefings, real-time proposal voting, and multi-round bilateral negotiation, with structured data collection on negotiation behavior for research.",
			"Wrote articles for the lab Substack page synthesizing current events and the latest academic research for a nontechnical audience",
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
			"Digital Logic Design, Embedded Systems, Software Engineering, Discrete Structures, Operating Systems, DSA, Computer Architecture, Machine Learning, Theory of Computing, Modern Algebra, Linear Algebra, SDR Attacks & Defenses, EMS Security",
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
		items: ["React", "Next.js", "Astro", "Svelte", "TailwindCSS", "Flask"],
	},
	{
		category: "Tools",
		items: ["Git", "Postman", "Docker", "Node", "Linux", "Windows", "SSMS", "AWS (S3, Bedrock)", "Supabase", "Jupyter Notebook"],
	},
];
