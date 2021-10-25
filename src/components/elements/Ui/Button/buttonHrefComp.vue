<template lang="pug">
    // Button href Component Slot
    a(:href='href')
        slot(name='txt') Click Aquí
</template>

<script>
    export default {
        name: "button-href-comp",
        props: ['href']
    }
</script>

<style scoped>
    a:hover {
        color: #000000 !important;
        background: #ffffff !important;
        transform: translate3d(0, -2px, 0) !important;
        box-shadow: 0 18px 35px rgb(50 50 93 / 1%), 0 8px 15px rgba(0, 0, 0, 0.07) !important;
        transition: .3s !important;
    }
</style>
