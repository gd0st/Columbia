<script lang="ts">
	import { xlink_attr } from 'svelte/internal';
	import type { SkillInterface } from '../../lib/skills';
	import Skill from './Skill.svelte';
	export let skills: SkillInterface[];

	// let skillCategories: string[] = skills.map(
	// 	skill => skill.category
	// )
	// skillCategories = [...new Set(skillCategories)]
	// let skillsMapped = skillCategories.forEach(
	// 	cat => skills.filter(
	// 		skill => skill.category == cat
	// 	)
	// )

	let colors = ['blue', 'teal', 'violet', 'fuchisa'];

	colors = colors.map((color) => `bg-${color}-500`);
</script>

{#each skills as skill}
	<Skill {skill} />
{/each}


