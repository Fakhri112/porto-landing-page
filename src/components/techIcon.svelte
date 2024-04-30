<script lang="ts">
	export let name: string;
	export let classIcon: string;

	const handleIconHover = (e: MouseEvent) => {
		let el = e.currentTarget as HTMLElement;
		el.classList.add("colored");
	};

	const handleIconHoverLeave = (e: MouseEvent) => {
		let el = e.currentTarget as HTMLElement;
		el.classList.remove("colored");
	};
</script>

<div class="tooltip w-fit border p-1 rounded" id="tech-icon" data-tip={name}>
	<i
		class={`text-5xl ${classIcon}`}
		on:mouseenter={handleIconHover}
		on:mouseleave={handleIconHoverLeave}
	></i>
</div>
