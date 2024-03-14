<template>

    <div class="project">
        <a :href="postData.url" target="_blank" class="project__subtitle"> {{ postData.title }}</a>
        <div class="project__holder">
            <div class="project__display">
                <img :src="postData.img.url" loading="lazy" alt="" class="project__display__img">
                
                <div class="project__video">
                    <video :src="postData.video.url" loading="lazy" autoplay muted loop playsinline class="project__video__video"></video>
                </div>
            </div>
            <div class="project__info">
                <div class="project__info__ctn">
                    <h1 class="project__info__h1">{{ postData.title }}</h1>
                    <div class="project__info__texts">
                        <p class="project__info__p">{{ postData.description_1 }}</p>
                        <p class="project__info__p">{{ postData.description_2 }}</p>
                    </div>
                </div>
                <div class="project__info__links-ctn">
                    <a :href="postData.url" target="_blank"  class="project__cta">
                        <div class="project__cta__span learn">{{ postData.label_button }}</div>
                        <div class="project__cta__span click">Click & Learn</div>
                    </a>
                </div>
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
            if(window.innerWidth > 1024) {
                this.$el.querySelector('.project__info').addEventListener('click', ()=> {
                    this.$el.classList.add('is-info')
                })
                
                this.$el.querySelector('.project__display').addEventListener('click', ()=> {
                    
                    if(!this.$el.classList.contains('is-info')) return
                    this.$el.classList.remove('is-info')
                })
            }
        },
    }
</script>