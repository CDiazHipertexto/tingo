<template>
    <div id="Glasses">
        <svg @click="startGlasses"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 100 100"
             width="100"
             height="100"
             id="iconGlasses"
             aria-labelledby="Glasses"
             role="presentation">
            <g id="circle">
                <g>
                    <path class="st0" d="M41.5,81.8c-22.2,0-40.3-18.1-40.3-40.3S19.3,1.2,41.5,1.2c22.2,0,40.3,18.1,40.3,40.3S63.7,81.8,41.5,81.8z
			 M41.5,3.2C20.4,3.2,3.2,20.4,3.2,41.5c0,21.1,17.2,38.3,38.3,38.3c21.1,0,38.3-17.2,38.3-38.3C79.8,20.4,62.6,3.2,41.5,3.2z"/>
                </g>
            </g>
            <g id="glass">
                <path id="_x3C_Trazado_x3E_" class="st1" d="M65.5,23.5c0-3.4-2.6-6-6-6c-1.2,0-2,0.8-2,2c0,1.2,0.8,2,2,2s2,0.8,2,2v22.6
                            c-2-1.6-4.4-2.6-7-2.6c-2.8,0-5.2,1-7.2,2.6c-1.4-1.6-3.4-2.6-5.8-2.6s-4.4,1-5.8,2.6c-2-1.6-4.4-2.6-7.2-2.6c-2.6,0-5,1-7,2.6
                            V23.5c0-1.2,0.8-2,2-2s2-0.8,2-2c0-1.2-0.8-2-2-2c-3.4,0-6,2.6-6,6v30v1c0,6,5,11,11,11s11-5,11-11c0-1.8-0.6-4.6-2.4-6.8
                            c0.6-1.4,2.2-2.2,4.4-2.2s3.6,1.2,4.4,2.2c-1.8,2.2-2.4,5-2.4,6.8c0,6,5,11,11,11s11-5,11-11v-1V23.5z M28.5,61.5c-3.8,0-7-3.2-7-7
                            c0-3.8,3.2-7,7-7s7,3.2,7,7C35.5,58.3,32.3,61.5,28.5,61.5 M54.5,61.5c-3.8,0-7-3.2-7-7c0-3.8,3.2-7,7-7s7,3.2,7,7
                            C61.5,58.3,58.3,61.5,54.5,61.5"/>
            </g>
            <g id="ojoDos" ref="rightscissor">
                <path class="st2" d="M55.5,49.7v2c1.2,0.4,2,1.6,2,2.8c0,0.4,0,0.6-0.2,1h2c0-0.4,0.2-0.6,0.2-1C59.5,52.1,57.7,50.1,55.5,49.7"/>
            </g>
            <g id="ojoUno" ref="leftscissor">
                <path class="st2" d="M29.5,49.7v2c1.2,0.4,2,1.6,2,2.8c0,0.4,0,0.6-0.2,1h2c0.2-0.4,0.2-0.6,0.2-1C33.5,52.1,31.7,50.1,29.5,49.7"/>
            </g>

        </svg>
        </div>

</template>

<script>
    import { TweenMax, Sine } from 'gsap'
    export default {
        name: "icon-glasses",
        data: () => ({

        }),
        methods: {
            startGlasses() {
                this.scissorAnim(this.$refs.rightscissor, 30);
                this.scissorAnim(this.$refs.leftscissor, -30)
            },
            scissorAnim(el) {
                TweenMax.to(el, 0.25, {
                    rotation: 0,
                    repeat: 3,
                    x:-6,
                    yoyo: true,
                    ease: Sine.easeInOut
                })
            }
        },
    }
</script>

<style scoped  lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    #iconGlasses
        margin: 0 auto
        display: table
        cursor: pointer
        width: 100%
        .st2
            fill: $blueLightHex
        .st0, .st1
            fill: $greenDarkHex
    .active
        #iconGlasses
            .st0
                fill: $blueLightHex
                transition: .3s
</style>
