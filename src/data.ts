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
	visual?: "echidna" | "terranova" | "generic";
}

export interface Experience {
	id: string;
	title: string;
	company: string;
	period: string;
	location: string;
	website?: string;
	description: string;
	technologies: string[];
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
		visual: "echidna",
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
		visual: "terranova",
	},
	{
		title: "TRADE WAR LAB",
		description:
			"U.S.–China trade policy simulation platform. Dynamic modeling of tariff impacts using TIES framework data.",
		technologies: ["Next.js", "Supabase", "TypeScript", "R"],
		hostedLink: "https://tradewarlab.com",
		index: "003",
		category: "research",
		visual: "generic",
	},
];

export const experiences: Experience[] = [
	{
		id: "twl",
		title: "Research Assistant",
		company: "the Trade War Lab",
		period: "10/2025 - Present",
		location: "Lawrence, KS",
		website: "tradewarlab.com",
		description:
			"Conducted qualitative analysis of trade policy impacts using the TIES framework and academic literature. Performed data entry, dataset preparation, and trained in R for statistical analysis. Contributed to U.S.-China Trade War research through dynamic simulation modeling and helped develop the online simulation platform using React and C#.",
		technologies: ["R", "C#", "React", "Qualitative Analysis"],
	},
	{
		id: "kuit",
		title: "Student IT Technician",
		company: "University of Kansas IT",
		period: "05/2025-11/2025",
		location: "Lawrence, KS",
		description:
			"Provided technical support across multiple channels (phone, email, chat, in-person), maintaining FERPA compliance and security standards. Created and tracked detailed service tickets to ensure efficient incident resolution and accountability.",
		technologies: ["Customer Service", "Ticketing systems", "Troubleshooting"],
	},
	{
		id: "sardius",
		title: "Software Engineering Intern",
		company: "Sardius Media",
		period: "09/2023 - 05/2024",
		location: "Kansas City, MO",
		website: "sardius.media",
		description:
			"Learned and implemented React, and contributed to brainstorming and planning sessions. Learned about general software engineering practices like version control and the Agile methodology.",
		technologies: ["Software Engineering", "React"],
	},
];
