<template>

    <div :class="theme" class="marquee">
        <div class="marquee__travel">
            <div class="marquee__travel__item">{{ text }}</div>
            <div class="marquee__travel__item">{{ text }}</div>
            <div class="marquee__travel__item">{{ text }}</div>
            <div class="marquee__travel__item">{{ text }}</div>
            <div class="marquee__travel__item">{{ text }}</div>
            <div class="marquee__travel__item">{{ text }}</div>
            <div class="marquee__travel__item">{{ text }}</div>
            <div class="marquee__travel__item">{{ text }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['text', 'theme'],
    }
</script>
