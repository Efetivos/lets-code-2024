<template lang="pug">
div(data-page="article" class="page page-article article")

    <h1> {{ page.data.title }}</h1>
    <h1> {{ page.data.img.url }}</h1>
    <h1> {{ page.data.excerpt }}</h1>
    img(:src="page.data.img.url")


    .blog-grid
        template(v-for="(post, index) in related_posts")
            CardArticle(:postData="post.data" :type="post.type" :uid="post.uid")
    <nuxt-link to="/"> Go to home Page </nuxt-link>


</template>

<script setup>
    import navigations from "@/helpers/navigation.js";
    const { client } = usePrismic()
    const route = useRoute();

    let related_posts = []
    
    const { data: page } = await useAsyncData(route.params.uid, async () => {
        const document = await client.getByUID("article", route.params.uid);
        let i = 0
        for (const article of document.data.articles_group) {
            let post = await client.getByUID('article', ''+article.article.uid)
            related_posts.push(post)
            i++
        }
        if (document)  return document;
    });

    definePageMeta({
        pageTransition: navigations 
    })
    useHead({
        title: ' Article | Boiler Nuxt & Prismic',
        bodyAttrs: {
            class: 'article'
        }
    })
</script>
<script>
    export default {
        methods: {
            scrollDown(event) {
                // window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }
        },
        
        mounted() {
        }
    }
</script>