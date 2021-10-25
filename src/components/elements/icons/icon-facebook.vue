<template>
    <svg version="1.1" id="icon-facebook" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 264 512" style="enable-background:new 0 0 264 512;" xml:space="preserve">
            <path class="st0" d="M76.7,512V283H0v-91h76.7v-71.7C76.7,42.4,124.3,0,193.8,0c33.3,0,61.9,2.5,70.2,3.6V85h-48.2
        c-37.8,0-45.1,18-45.1,44.3V192H256l-11.7,91h-73.6v229"/>
    </svg>
</template>

<script>
    export default {
        name: "icon-facebook",
        data: () => ({

        }),
        methods: {

        },
    }
</script>


<style scoped  lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    #icon-facebook
        cursor: pointer
        width: .85rem
        .st0
            fill: #2E64BE
        #background
            opacity: 0
    .sticky-nav
        transition: .7s
        padding: 0
        svg
            width: 18rem !important
            .st1, .st2
                transition: 1s
                fill: $blueLightHex !important
                fill: #676767 !important
            .st1-l, st1-a
                transition: 1s
                fill: #ffffff !important
                fill: #676767 !important
            #background
                transition: 1s
                opacity: 1
                opacity: 0
</style>

