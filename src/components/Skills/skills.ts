export interface SkillInterface {
	name: string,
	icon?: string,
	category: string,
	skillLevel: string,
	notes: string,
	github?: boolean,
}

export function getCategories(skills: SkillInterface[]): string[] {
	let skillCategories: string[] = skills.map(
		skill => skill.category
	)
	return [...new Set(skillCategories)]
}

export function filterForCategory(skills: SkillInterface[], category: string): SkillInterface[]{
	return skills.filter(
		skill => skill.category == category
	)
}

export const skills: SkillInterface[] = [
	{
		name: "Python",
		icon: "fa-brands fa-python",
		category: "Programming Language",
		skillLevel: "Proficient",
		notes: "I use this programming language the most at work.",
		github: true
	},
	{
		name: "Typescript",
		skillLevel: "Proficient",
		icon: "fa-brands fa-js",
		category: "Programming Language",
		notes: "<3 Typescript",
		github: true
	},
	{
		name: "Rust",
		category: "Programming Language",
		skillLevel: "Novice",
		icon: "fa-brands fa-rust",
		notes: "I really like Rust, but haven't had enough projects for it.",
		github: true,
	},
	{
		name: "bash",
		category: "Programming Language",
		skillLevel: "Novice",
		icon: "fa-solid fa-terminal",
		github: false,
		notes: "I interact with shell scripts at work at lot, but I still have a lot to learn."
	},
	{
		name: "golang",
		category: "Programming Language",
		skillLevel: "Novice",
		icon: "fa-brands fa-golang",
		github: false,
		notes: "I think golang is cool and worth learning, but I still like rust more."
	},
	{
		name: "Linux (Debian and Arch)",
		category: "System Administration",
		skillLevel: "Intermediate",
		icon: "fa-brands fa-linux",
		notes: "I interface with Linux daily. My favorite shell is zsh."
	},
	{
		name: "Docker + Kubernetes",
		category: "System Automation",
		skillLevel: "Trainee",
		icon: "fa-brands fa-docker",
		notes: "I am getting better at understanding Kubernetes and Docker at work."
	},
	{
		name: "SvelteJS",
		category: "Programming Framework",
		skillLevel: "Proficient",
		notes: "This website is built with Svelte :)"
	},
	{
		name: "discord.js",
		category: "Programming Framework",
		skillLevel: "Intermediate",
		notes: "I used this a while ago to write some silly discord bots."
	},
	{
		name: "German",
		category: "Language",
		skillLevel: "Native/Fluent",
		icon: "fa-regular fa-earth-europe",
		notes: "moin moin",
	},
	{
		name: "English",
		category: "Language",
		skillLevel: "Native/Fluent",
		icon: "fa-solid fa-flag-usa",
		notes: "Red blooded American"
	},
	{
		name: "Spanish",
		category: "Language",
		skillLevel: "Novice",
		notes: "Still working on this :)"
	}
]