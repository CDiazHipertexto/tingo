<template lang="pug">
    // Navigation
    nav#mainNav(:class='{sticky:active}').navbar-light.navbar-expand-lg.navbar
        #nav-container.container(:class='toggleNavClass()')
            .container
                a.navbar-brand.js-scroll-trigger(href='page-top')
                    logo-pasalapagina
                button.navbar-toggler.navbar-toggler-right
                    span.navbar-toggler-icon
                #navbarResponsive.collapse.navbar-collapse.text-right(type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation')
                    ul.navbar-nav.ml-auto.my-2.my-lg-0
                        li.nav-item
                            button-href-comp(:href="href").button.btn.large.btn-navigation
                                template(slot='txt')
                                    | CUAS NONA
</template>

<script>
    import IconPc from "../../elements/icons/IconPc";
    import ButtonComp from "../../elements/Ui/Button/buttonComp";
    import ButtonHrefComp from "../../elements/Ui/Button/buttonHrefComp";
    export default {
        components: {ButtonHrefComp, ButtonComp, IconPc },
        name: 'navigation',
        data() {
            return {
                active: false
            }
        },
        methods: {
            toggleNavClass(){
                if(this.active == false){
                    return 'nav'
                } else {
                    return 'sticky-nav'
                }

            }
        },
        mounted(){
            window.document.onscroll = () => {
                let navBar = document.getElementById('mainNav');
                if(window.scrollY > navBar.offsetTop){
                    this.active = true;
                } else {
                    this.active = false;
                }
            }
        },
        computed: {
        },
    }
</script>
<style scoped  lang="sass">
    @import "../../../scss/utilities/variables"
    #mainNav *
        transition: all .6s ease
    .nav
        padding: 25px 0
    .sticky-nav
        padding: 0
        svg
            .st1, .st2
                fill: blue !important
    #mainNav
        width: 100%
        position: fixed
        top: 0
        z-index: 9999
        background: rgb(28 32 48 / 30%)
        &.sticky
            box-shadow: 0 0 27px -14px #7b7b7b
            background-color: #ffffff
            border-bottom: 1px solid #e4e4e4
            .btn-navigation
                background: $blueLightHex
                color: rgb(255, 255, 255, 1)
                border: $blueLightHex 1px solid
                padding: 0.7rem 3rem !important
            .navbar
                &-toggler-icon
                    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 18 16' style='enable-background:new 0 0 18 16;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;fill:%230C3440;%7D%0A%3C/style%3E%3Cpath class='st0' d='M3,1c0-0.6,0.4-1,1-1h13c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1H4C3.4,2,3,1.6,3,1z M7,15c0-0.6,0.4-1,1-1h9 c0.6,0,1,0.4,1,1s-0.4,1-1,1H8C7.4,16,7,15.6,7,15z M1,7C0.4,7,0,7.4,0,8s0.4,1,1,1h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H1z'/%3E%3C/svg%3E") !important
        .btn-navigation
            background: rgba(0, 0, 0, 0.4)
            color: #ffffff
        .navbar
            &-toggler
                border: 0
            &-toggler-icon
                background-image: url("data:image/svg+xml,%3Csvg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3 1C3 0.447716 3.44772 0 4 0H17C17.5523 0 18 0.447716 18 1C18 1.55228 17.5523 2 17 2H4C3.44772 2 3 1.55228 3 1ZM7 15C7 14.4477 7.44772 14 8 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H8C7.44772 16 7 15.5523 7 15ZM1 7C0.447723 7 0 7.44772 0 8C0 8.55228 0.447723 9 1 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H1Z' fill='white'/%3E%3C/svg%3E") !important
                width: 2.5rem
                height: 2.5rem
</style>

