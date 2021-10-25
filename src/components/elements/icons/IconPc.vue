<template>
    <div id="PC">
        <svg @click="startPC"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 100 100"
             width="100"
             height="100"
             id="iconPC"
             aria-labelledby="PC"
             role="presentation">
            <g id="destock">
                <g>
                    <path class="st0" d="M60.5,29.4c0.5,0,1-0.4,1-1v-2c0-0.5-0.5-1-1-1H32.1c-0.5,0-0.7,0.3-0.3,0.7l2.6,2.6c0.4,0.4,1.2,0.7,1.7,0.7
			H60.5z M22.3,27.3c0,0-0.1-0.1-0.4,0.4c-0.3,0.4-0.5,2.2-0.5,2.7v20c0,0.5-0.5,1-1,1h-2c-0.5,0-1,0.5-1,1v4c0,0.5,0.5,1,1,1h33.9
			l-6-6H26.5c-0.6,0-1-0.5-1-1c0,0,0-19.3,0-19.4c0-0.1,0.1-0.4,0.1-0.4L22.3,27.3z M64.4,33.8c-0.5-0.2-1.4-0.4-1.9-0.4h-10
			c-0.6,0-1.4,0.2-1.9,0.4l-0.7,0.7c-0.2,0.5-0.4,1.4-0.4,1.9v6.4c0,0.5,0.3,1.3,0.7,1.7l2.6,2.6c0.4,0.4,0.7,0.3,0.7-0.3v-8.4
			c0-0.5,0.4-1,1-1h6c0.5,0,1,0.5,1,1v12c0,0.5-0.5,1-1,1h-2.4c-0.5,0-0.7,0.3-0.3,0.7l4.6,4.6c0.4,0.4,0.8,0.7,0.9,0.7
			c0.1,0,0.6-0.2,1.1-0.4l0.7-0.7c0.2-0.5,0.4-1.4,0.4-1.9v-18c0-0.5-0.2-1.4-0.4-1.9L64.4,33.8z"/>
                </g>
            </g>
            <g id="line" ref="leftscissor">
                <polygon class="st3" points="60.2,59.5 57.4,62.3 18.5,23.5 21.3,20.7 	"/>
            </g>
            <g id="circle">
                <g>
                    <path class="st1" d="M41.5,81.8c-22.2,0-40.3-18.1-40.3-40.3S19.3,1.2,41.5,1.2s40.3,18.1,40.3,40.3S63.7,81.8,41.5,81.8z
			 M41.5,3.2C20.4,3.2,3.2,20.4,3.2,41.5s17.2,38.3,38.3,38.3s38.3-17.2,38.3-38.3S62.6,3.2,41.5,3.2z"/>
                </g>
            </g>
          </svg>
        </div>

</template>

<script>
    // import { TweenMax, Sine } from 'gsap'
    export default {
        name: "icon-pc",
        data: () => ({

        }),
        methods: {
            startPC() {
                this.scissorAnim(this.$refs.rightscissor, 30);
                this.scissorAnim(this.$refs.leftscissor, -30)
            },
            scissorAnim(el, rot) {
                TweenMax.to(el, 0.25, {
                    rotation: 0,
                    repeat: 3,
                    yoyo: true,
                    x:5,
                    y:-3,
                    ease: Sine.easeInOut
                })
            }
        },
    }
</script>


<style scoped  lang="sass">
    @import "../../../scss/utilities/variables"
    #iconPC
        margin: 0 auto
        display: table
        cursor: pointer
        width: 100%
        .st3, .st2
            fill: $blueLightHex
        .st0, .st1
            fill: $greenDarkHex
    .active
        #iconPC
            .st1
                fill: $blueLightHex
                transition: .3s

</style>
