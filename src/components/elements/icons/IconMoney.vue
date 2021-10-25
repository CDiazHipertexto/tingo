<template>
    <div id="Money">
        <svg @click="startMoney"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 100 100"
             width="100"
             height="100"
             id="iconMoney"
             aria-labelledby="Money"
             role="presentation"
        >
            <g id="Billlete">
                <g id="circleTicket">
                    <path class="st0" d="M41.4,48.4c0-0.2,0.1-0.3,0.1-0.5v-2.3c0-2.3-2-4.1-4.5-4.1h-6c0-4.1,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5
			C46,44.6,44.1,47.3,41.4,48.4"/>
                </g>
                <g id="Ticket">
                    <path class="st0" d="M17.5,28h42v27H41.3c0.1-0.4,0.2-0.7,0.2-1.1V52h9c0-3.3,2.7-6,6-6v-9c-3.3,0-6-2.7-6-6h-24c0,3.3-2.7,6-6,6
			v4.5H19c-0.5,0-1,0.1-1.5,0.2V28z"/>
                </g>
                <g id="TicketLine">
                    <polygon class="st0" points="65.5,22 65.5,52 62.5,52 62.5,25 20.5,25 20.5,22"/>
                </g>
            </g>
            <g id="Money">
                <g id="circle">
                    <path id="_x3C_Trazado-circle_x3E_" class="st3" d="M41.5,81.8c-22.2,0-40.3-18.1-40.3-40.3S19.3,1.2,41.5,1.2
			s40.3,18.1,40.3,40.3S63.7,81.8,41.5,81.8z M41.5,3.2C20.4,3.2,3.2,20.4,3.2,41.5s17.2,38.3,38.3,38.3s38.3-17.2,38.3-38.3
			S62.6,3.2,41.5,3.2z"/>
                </g>
            </g>
            <g id="currencyTres">
                <path class="st1" d="M19,55h18c0.8,0,1.5-0.5,1.5-1.1v-2.3c0-0.6-0.7-1.1-1.5-1.1H19c-0.8,0-1.5,0.5-1.5,1.1v2.3
		C17.5,54.5,18.2,55,19,55"/>
            </g>
            <g id="currencyDos" ref="leftmoney">
                <path class="st1" d="M19,61h18c0.8,0,1.5-0.5,1.5-1.1v-2.3c0-0.6-0.7-1.1-1.5-1.1H19c-0.8,0-1.5,0.5-1.5,1.1v2.3
		C17.5,60.5,18.2,61,19,61"/>
            </g>
            <g id="currencyUno" ref="rightmoney">
                <path class="st1" d="M19,49h18c0.8,0,1.5-0.5,1.5-1.1v-2.3c0-0.6-0.7-1.1-1.5-1.1H19c-0.8,0-1.5,0.5-1.5,1.1v2.3
		C17.5,48.5,18.2,49,19,49"/>
            </g>
        </svg>
    </div>

</template>

<script>
    import { TweenMax, Sine } from 'gsap'
    export default {
        name: "icon-money",
        data: () => ({

        }),
        methods: {
            startMoney() {
                this.moneyAnim(this.$refs.rightmoney, 20);
                this.moneyAnim(this.$refs.leftmoney, -20)
            },
            moneyAnim(el, rot) {
                TweenMax.to(el, 0.25, {
                    rotation: rot,
                    repeat: 3,
                    x:-5,
                    yoyo: true,
                    svgOrigin: '50 45',
                    ease: Sine.easeInOut
                })
            }
        },
    }
</script>

<style scoped  lang="sass">
    @import "../../../scss/utilities/variables"
    #iconMoney
        margin: 0 auto
        display: table
        cursor: pointer
        width: 100%
        .st1, .st2
            fill: $blueLightHex
        .st0, .st3
            fill: $greenDarkHex
    .active
        #iconMoney
            .st3
                fill: $blueLightHex
                transition: .3s
</style>
