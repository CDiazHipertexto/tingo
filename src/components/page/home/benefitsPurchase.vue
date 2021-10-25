<template lang="pug">
    //Benefits Purchase
    section#sectionBenefits.py__section
        b-container(fluid='')
            b-row
                b-col.sectionBenefits--padding-x
                    b-tabs(content-class='mt-0 line--top', fill='', card='', no-body='')
                        b-tab(no-body='', active='')
                            template(v-slot:title='')
                                icon-pc
                                h6 {{ $t('home.cancel_whenever_want') }}
                            b-container.bg-dark__PLP(fluid='')
                                b-row
                                    b-col(cols='12', lg='12')
                                        benefits-pay
                        b-tab(no-body='')
                            template(v-slot:title='')
                                icon-glasses
                                h6 {{ $t('home.read_wherever_want') }}
                            b-container.bg-dark__PLP(fluid='')
                                b-row
                                    b-col(cols='12', lg='12')
                                        read-benefits-plans
                        b-tab(no-body='')
                            template(v-slot:title='')
                                icon-money
                                h6 {{ $t('home.pay_as_want') }}
                            b-container.bg-dark__PLP(fluid='')
                                b-row
                                    b-col(cols='12', lg='12')
                                        read-benefits-plans
</template>

<script>
    import VueMaterial from 'vue-material'
    import { TabsPlugin } from 'bootstrap-vue'
    import IconGlasses from "../../elements/icons/IconGlasses";
    import IconBase from "../../elements/icons/IconBase";
    import IconMoney from "../../elements/icons/IconMoney";
    import IconPc from "../../elements/icons/IconPc";
    import BenefitsPay from "./benefitsPay";
    import ReadBenefitsPlans from "./readBenefits";

    export default {
        name: "benefitsPurchase",
        components: { ReadBenefitsPlans, BenefitsPay, IconPc, IconMoney, IconBase, IconGlasses, VueMaterial, TabsPlugin },
        data: () => ({

        }),
        mounted() {

            this.keelItWithFire();
        },
        methods: {
            keelItWithFire() {
                document.querySelector(".card-header").classList.add("container");
            }
        },
    }
</script>

<style scoped lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    #sectionBenefits
        .bg-dark__PLP
            background: $greenDarkHex
    .py__section
        padding-bottom: 0
</style>

<style lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    #sectionBenefits
        .line--top
            border-top: 3px solid $blueLightHex
            margin-right: -15px
            margin-left: -15px
        .card-header
            background-color: rgb(255, 255, 255, 1)!important
        p
            color: #ffffff
        a
            text-decoration: none
            text-transform: uppercase
            opacity: 0.8
            filter: grayscale(1)
            transition-property: filter
            transition-duration: .3s
            padding-bottom: 3rem
            padding-top: 3rem
        h5
            font-size: 1rem
        .tabs
            .card-header
                margin-bottom: -3px
                padding-left: 0
                padding-right: 0
        .nav-tabs
            .nav-link.active, .nav-item.show .nav-link
                color: $blueLightHex
                background-color: #ffffff
                border-color: #ffffff #ffffff #ffffff
                border-bottom: 3px solid $OrangeHex
                box-shadow: 0 17px 30px rgba(0,0,0,.07)
                opacity: 1
                box-shadow: 0 15px 45px rgba(16,30,54,.15)
                filter: grayscale(0)
                transition-property: filter
                transition-duration: .3s
                h6
                    font-weight: 500
                    transition: .3s
    .md-theme-default a:not(.md-button)
        color: $greenDarkHex
    .md-theme-default a:not(.md-button):hover
        color: $greenDarkHex
        border-color: #ffffff #ffffff #ffffff
        transition: transform 0.2s
    .md-tab
        background: #0c3440
    .tab-content > .active
        transition: opacity .3s ease
        opacity: 1
        transform: translateY(0rem)
</style>
