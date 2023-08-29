<script lang="ts">
	import { fade } from 'svelte/transition';
	export let partyMode = false;
	export let text = '';
</script>

<p
	in:fade={{ duration: 900 }}
	class:partyText={partyMode}
	class="mx-[auto] my-[5px] w-[30rem] text-center text-[var(--bg-color1)]"
>
	{@html text}
</p>
