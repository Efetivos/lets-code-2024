<template lang="pug">
div(data-page="blog" class="page page-blog blog")


    <h1>Blog Page</h1>
    //- <h1> {{ data }} </h1>
    //- <h1> {{ posts }} </h1>
    .blog-grid
        template(v-for="(post, index) in posts")
            CardArticle(:postData="post.data" :type="post.type" :uid="post.uid")
    <nuxt-link to="/"> Go to home Page </nuxt-link>


</template>

<script setup>
    import navigations from "@/helpers/navigation.js";
    const { client } = usePrismic()
    const  { data } = await client.getSingle("blog")
    // const { data: posts } = await useAsyncData("posts", () =>  client.getAllByType("article"));

    const { data: posts } = await useAsyncData( async () => {
        const document = await client.getAllByType("article");
        // console.log(document)
        return document;
    });
    definePageMeta({
        pageTransition: navigations 
    })
    useHead({
        title: 'Blog Page | Boiler Nuxt & Prismic',
        bodyAttrs: {
            class: 'blog'
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