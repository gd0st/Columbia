<script lang="ts">
	import type { SkillInterface } from '../../lib/skills';
	import Icon from '../Icon.svelte';
	export let skill: SkillInterface;
</script>

<a href=".">
	<div class="{skill.color} rounded border-black border-2 m-5 px-3 py-5">
		<Icon faSource={skill.icon} />
	</div>
</a>

<style>

	.golang {
		background-color: #29beb0;
	}
	.javascript {
		background-color: #f0db4f;
	}
</style>
