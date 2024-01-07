<template>
	<div>
		<MenuFixed :postData="data"/>
		<MenuFS/>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<!-- <Sketch/>
		<Splash/>
		<Preloader/> -->
	</div>
</template>
<script setup>
	const { client } = usePrismic()
	const  { data } = await client.getSingle("global")
</script>
<script>
	import { transitions } from "assets/js/utils_global/transitions";
	import { Console } from "assets/js/utils_global/console";

	export default {
		mounted() {
			const $current = document.querySelector('.page')
			transitions.firstEntrance()
			transitions.instancingPages($current, $current.dataset.page)
			new Console()
		}
	}
</script>