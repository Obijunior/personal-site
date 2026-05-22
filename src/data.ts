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
			"Ring-3 Linux kernel rootkit integrating with the Mythic C2 framework. Implements LPE, dynamic-library hijacking, file/process/network hiding and persistence mechanisms for adversarial red-team simulation. Unfortunately not public yet",
		technologies: ["C", "Linux Kernel", "Mythic C2"],
		link: "https://github.com/JamesNKing/echidna",
		index: "001",
		category: "security",
		award: "$6,500 VICEROY Scholarship · 7th/50 national CTF",
		featured: true,
		visual: "code",
		visualContent: `<span class="hl">#define</span> _GNU_SOURCE
<span class="dim2">// LD_PRELOAD hook — hides PID from /proc</span>
<span class="hl">#include</span> &lt;dlfcn.h&gt;

<span class="hl">typedef</span> struct dirent *(*readdir_t)(DIR *);
<span class="dim2">static readdir_t orig = NULL;</span>

<span class="hl">struct dirent</span> *readdir(DIR *dp) {
  <span class="dim2">if (!orig) orig = dlsym(RTLD_NEXT, "readdir");</span>
  struct dirent *e;
  <span class="hl">while</span> ((e = orig(dp)))
    <span class="dim2">// filter hidden PIDs from /proc</span>
    <span class="hl">if</span> (!is_hidden(e-&gt;d_name)) <span class="hl">return</span> e;
  <span class="hl">return</span> NULL;
}`,
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
		visual: "code",
		visualContent: 
		`<span class="hl">// OfferCreate — XRPL native DEX</span>
<span class="dim2">// ledger-primitive trading, no smart contracts</span>

<span class="hl">const</span> tx: OfferCreate = {
  TransactionType: <span class="hl">"OfferCreate"</span>,
  Account: buyerWallet.address,
  TakerPays: <span class="hl">xrpToDrops</span>(xrpAmount),
  <span class="dim2">// 1 XRP = 1,000,000 drops</span>
  TakerGets: { currency, issuer, value: tokenAmount },
};
<span class="dim2">const prepared = await c.autofill(tx);</span>
<span class="hl">return await</span> submitAndWait(prepared, wallet);
<span class="dim2">// finality ~3–5s · no mining</span>`,
 },
	{
		title: "TRADE WAR LAB SIMULATION PLATFORM",
		description:
			"U.S.–China trade policy simulation platform. Dynamic modeling of tariff impacts using TIES framework data.",
		technologies: ["Next.js", "Supabase", "TypeScript", "R"],
		hostedLink: "https://github.com/TradeWarLab/twl-simulation-webapp",
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
