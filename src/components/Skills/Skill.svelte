<script lang="ts">
	import type { SkillInterface } from '../../lib/skills';
	import {githubEndpoint} from '../../lib/skills'
	import Icon from '../Icon.svelte';
	export let skill: SkillInterface;

	let link: string = "#"

	if (skill.github) {
		link = githubEndpoint(skill.name.toLowerCase())
	}

</script>

<a href="{link}">
	<div class="">
		<button class="learn-more">
			<Icon faSource={skill.icon} />
		</button>
	</div>
</a>

<!-- <style lang="scss">

	.golang {
		background-color: #29beb0;
	}
	.javascript {
		background-color: #f0db4f;
	}


	//Button CSS by Kath Kato on codepen.
	$bg: #fff;
	$text: #fff;
	$light-pink: #4d4d4d;
	$pink: #111111;
	$dark-pink: #000000;
	$pink-border: #1e1e1e;
	$pink-shadow: #3c3c3c;
	button {
		position: relative;
		display: inline-block;
		cursor: pointer;
		outline: none;
		border: 0;
		vertical-align: middle;
		text-decoration: none;
		font-size: inherit;
		font-family: inherit;
		&.learn-more {
			font-weight: 600;
			color: $text;
			text-transform: uppercase;
			padding: 1.25em 2em;
			background: $light-pink;
			border: 2px solid $pink-border;
			border-radius: 0.75em;
			transform-style: preserve-3d;
			transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
				background 150ms cubic-bezier(0, 0, 0.58, 1);
			&::before {
				position: absolute;
				content: '';
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: $dark-pink;
				border-radius: inherit;
				box-shadow: 0 0 0 2px $pink-border, 0 0.625em 0 0 $pink-shadow;
				transform: translate3d(0, 0.75em, -1em);
				transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
					box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
			}
			&:hover {
				background: $pink;
				transform: translate(0, 0.25em);
				&::before {
					box-shadow: 0 0 0 2px $pink-border, 0 0.5em 0 0 $pink-shadow;
					transform: translate3d(0, 0.5em, -1em);
				}
			}
			&:active {
				background: $pink;
				transform: translate(0em, 0.75em);
				&::before {
					box-shadow: 0 0 0 2px $pink-border, 0 0 $pink-shadow;
					transform: translate3d(0, 0, -1em);
				}
			}
		}
	}
</style> -->
