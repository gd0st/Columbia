<script lang="ts">
	import Skill from "./Skill.svelte";
import type { Skill } from "./skills"
	import { skills } from "./skills"
	import { getCategories, filterForCategory } from "./skills"

	let skillCategories: string[] = skills.map(
		skill => skill.category
	)
	skillCategories = [...new Set(skillCategories)]
	let skillsMapped = skillCategories.forEach(
		cat => skills.filter(
			skill => skill.category == cat
		)
	)
</script>


<style></style>


<div class="grid grid-cols-3">
	{#each getCategories(skills) as category}
	<div class="grid grid-cols-3 mx-auto">
		<div>
		<h1 class="text-center">{category}</h1>
		{#each filterForCategory(skills, category) as skill}
				<p>{skill.name}</p>
				<p>{skill.skillLevel}</p> 
				{#if skill.github}
				<p>{skill.github}</p>
				{/if}
		{/each}
		</div>
	</div>
	{/each}
</div>