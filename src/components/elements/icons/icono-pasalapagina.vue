<template>
    <svg id="icono-pasalapagina" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 372 372" style="enable-background:new 0 0 372 372;" xml:space="preserve">

        <g id="bg">
            <rect class="st0" width="372" height="372"/>
        </g>
        <g id="p">
            <path class="st1" d="M213.9,121.6c-6.7-9.5-16.6-14.4-29.2-14.4c-12.1,0-21.7,4.8-28.5,14.3c-6.2,8.6-9.3,21.5-9.3,39.5
                c0,16.5,3.4,29.1,10,37.6c6.7,9.5,16.6,14.3,29.2,14.3c11.8,0,21.2-4.8,27.9-14.4c6.6-9.4,10-22,9.9-37.5
                C223.9,144.2,220.5,130.9,213.9,121.6z"/>
                    <path class="st1" d="M185.8,37.2c-68.9,0-124.8,56-124.8,125c0,40.2,18.9,75.9,48.3,98.8V150.3c0-28.5,8.3-48,25-58.4
                c16.6-10.4,34.8-15.6,54.3-15.6c10.1,0,20.4,1.9,30.8,5.8c10.4,3.9,18.6,9.5,24.7,16.8c12.2,15.9,18.3,36.2,18.5,61.2
                c0,25.7-6.1,46.5-18.3,62.4c-12.2,15.5-27.9,23.2-47,23.2c-10.2,0-19.2-1.8-26.9-5.5c-8.1-4.1-14.6-10.4-19.5-19v60.5
                c0,0.2,0,0.4,0,0.5c11.1,3.2,22.8,5,34.9,5c68.9,0,124.8-56,124.8-125S254.7,37.2,185.8,37.2z"/>
        </g>
        <g id="ola">
            <path class="st2" d="M0,331.6V372h323.4H372v-40.4c-0.2,0-48.4,0-48.6,0c-64.6-0.5-98.9-34.8-137.7,1.1
                c-35.7-35.8-77.4-0.4-138.1-1.1"/>
        </g>
    </svg>

</template>

<script>
    export default {
        name: "icono-pasalapagina",
        data: () => ({

        }),
        methods: {

        },
    }
</script>


<style scoped  lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    #icono-pasalapagina
        cursor: pointer
        width: 10rem
        .st0
            fill: #050411
        .st1
            fill: #19B0D5

        .st2
            fill: #F58429
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

