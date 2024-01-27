<template>
	<div class="menu-fs e-wvw e-hvh">
		<div class="menu-fs__hold e-wp e-hp e-flex">
			<div class="menu-fs__fader"></div>
			<div class="menu-fs__content">
				<ul class="menu-fs__nav">
					<li v-for="nav_item in postData.header_navigation" :key="nav_item">
							<a :href="nav_item.url" v-if="nav_item.external_link" target="_blank " class="nav_item inline-block"> {{ nav_item.label }}</a>
							<nuxt-link :href="nav_item.url" v-else class="nav_item inline-block"> {{ nav_item.label }}</nuxt-link>
					</li>
				</ul>				
				<ul class="menu-fs__socials">
					<li v-for="social in postData.socials_group" :key="social">
						<a :href="social.link" target="_blank" class="social inline-block"> {{ social.social }}</a>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>


<script>
	import { MenuFS } from '@/assets/js/components/menufs'
	

    export default {

        props: ['postData'],
		methods: {
			onClick(event) {
				// console.log(event)
            },
		},
        mounted() {
			new MenuFS()
        }
    }
</script>


