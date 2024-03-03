<template>

    <div class="hall-fame">
        <div class="hall-fame__holder">
            <div class="hall-fame__display">
                <img :src="postData.img.url" loading="lazy" alt="" class="hall-fame__display__img">
                
                <div class="hall-fame__video">
                    <video :src="postData.video.url" loading="lazy" autoplay muted loop playsinline class="hall-fame__video__video"></video>
                </div>
            </div>
            <div class="hall-fame__info">
                <div class="hall-fame__info__ctn">
                    <a :href="postData.project_url" target="_blank"  class="hall-fame__cta">
                        <div class="hall-fame__cta__span">{{ postData.title }}</div>
                    </a>
                    <h1 class="hall-fame__info__h1">{{ postData.author }}</h1>

                </div>
                <ul class="hall-fame__socials">
                    <li v-if="postData.social_media_1">
                        <a :href="postData.url_social_media_1" target="_blank">{{ postData.social_media_1 }}</a>
                    </li>
                    <li v-if="postData.social_media_2">
                        <a :href="postData.url_social_media_2" target="_blank">{{ postData.social_media_2 }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['postData'],
        methods: {
            onClick(event) {
                
            },
        },
        mounted() {
        },
    }
</script>