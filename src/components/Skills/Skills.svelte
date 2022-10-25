<script lang="ts">
	import { xlink_attr } from 'svelte/internal';
	import type { SkillInterface } from '../../lib/skills';
	import Skill from './Skill.svelte';
	export let skills: SkillInterface[];

</script>

{#each skills as skill}
	<div class="">
		<Skill {skill} />
	</div>
{/each}


