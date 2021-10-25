<template>
    <svg id="icon-google" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 364.8 372.3" style="enable-background:new 0 0 364.8 372.3;" xml:space="preserve">
        <g id="azuk">
            <g>
                <path class="st0" d="M309.4,327.1c-18-14-36-28.1-54-42.1c-1.6-1.2-3-2.6-4.4-3.9c12.2-9.3,22.4-20.3,29.1-34.3
                    c2.7-5.6,4.5-11.4,6.3-17.3c1.2-4.1,0.8-5.7-4.2-5.6c-30,0.3-60,0.1-90,0.1c-6.4,0-6.4,0-6.4-6.6c0-20.3,0.1-40.7-0.1-61
                    c0-3.9,0.7-5.4,5.1-5.4c55.3,0.2,110.6,0.1,165.9,0.1c3,0,4.9,0.2,5.4,3.8c6.9,48.4,1.4,94.6-24,137.3
                    C330.4,305.3,321.1,317.2,309.4,327.1z"/>
            </g>
        </g>
        <g id="vevrde">
            <path class="st1" d="M80.7,222.2c5.6,14.2,12.5,27.5,22.8,38.9c26.2,28.9,58.6,41.4,97.5,37.4c18.1-1.9,34.5-8,49.9-17.4
                c1.5,1.3,2.9,2.7,4.4,3.9c18,14.1,36,28.1,54,42.1c-19.9,18.9-43.3,31.4-69.7,38.1C177.5,381,120.1,371,69.2,330.8
                c-21.1-16.6-37.6-37.1-49.3-61.4C40.2,253.7,60.4,237.9,80.7,222.2z"/>
        </g>
        <g id="amarillo">
            <path class="st2" d="M80.7,222.2c-20.3,15.7-40.5,31.5-60.8,47.2C10,251,4.3,231.2,1.6,210.6c-4.6-35.7,0.5-70,15.6-102.7
                c0.8-1.8,1.9-3.5,2.8-5.2c19.4,14.9,38.8,29.9,58.2,44.8c0.9,0.7,1.9,1.3,2.9,1.9C73,173.6,73.4,197.9,80.7,222.2z"/>
        </g>
        <g id="rojo">
            <path class="st3" d="M20.1,102.7C27.7,86,38.4,71.4,51,58.2c28.5-29.8,63-49,103.8-55.5C211.9-6.4,263,7.1,307.2,45.1
                c2.8,2.4,3.5,3.8,0.4,6.8c-15.6,15.3-30.9,30.8-46.4,46.2c-1.6,1.6-2.7,3.5-5.5,0.9c-38.9-35.6-102.4-35.2-143.7,3.2
                c-14.2,13.2-24.3,29-30.9,47.1c-1-0.6-2-1.2-2.9-1.9C58.9,132.6,39.5,117.6,20.1,102.7z"/>
        </g>
    </svg>
</template>

<script>
    export default {
        name: "icon-google",
        data: () => ({

        }),
        methods: {

        },
    }
</script>


<style scoped  lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    #icon-google
        cursor: pointer
        width: 1.8rem
        .st0
            fill-rule: evenodd
            clip-rule: evenodd
        fill: #5D7FBE
        .st1
            fill-rule: evenodd
            clip-rule: evenodd
            fill: #45AC43

        .st2
            fill-rule: evenodd
            clip-rule: evenodd
            fill: #F4C300

        .st3
            fill-rule: evenodd
            clip-rule: evenodd
            fill: #D7282A
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

