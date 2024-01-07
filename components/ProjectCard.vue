<template>

    <div class="project">
        <div class="project__subtitle">WOOM. INTERACTION</div>
        <div class="project__holder">
            <div class="project__display">
                <img src="https://raw.githubusercontent.com/Efetivos/gallery/master/houses/house1.jpg" loading="lazy" alt="" class="project__display__img">
                <div class="project__video"></div>
            </div>
            <div class="project__info">
                <div class="project__info__ctn">
                    <h1 class="project__info__h1">WOOM. Interaction</h1>
                    <div class="project__info__texts">
                        <p class="project__info__p">Established with a vision to provide artists with an immersive and creative environment, we offer top-tier recording equipment, acoustically treated rooms</p>
                        <p class="project__info__p">Established with a vision to provide artists with an immersive and creative environment, we offer top-tier recording equipment, acoustically treated rooms</p>
                    </div>
                </div>
                <div class="project__info__links-ctn">
                    <button class="project__cta">
                        <div class="project__cta__span">Get Started</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['postData'],
        mounted() {
            // console.log(this.postData)
            //console.log([this.uid, this.type])
        },
    }
</script>