<template lang="pug">
    //Benefits Pay
    section#sectionBenefitsRead.py__section
        b-container.sectionBenefitsRead__title.pb-5
            b-row
                b-col(cols='12')
                    section-heading
                        template(slot='text-heading')
                            p {{ $t('home.text_read_benefits') }}
                        template(slot='heading-text-btn')
                            button-comp(:eventClick='acces').button.btn.btn--orange
                                template(slot='general-text-btn') {{ $t('buttons.logout.read_free') }}
        b-container.sectionBenefitsRead__body.py-5
            b-row
                b-col(cols='12')
                    b-row
                        b-col(cols='12', sm='12', md='4', lg='4').text-center.sectionBenefitsRead__item
                            img(src='img/frontend/benefits/tablet.png', alt='pasala-la-página', width='200px')
                            p.pt-5.bold.tabletBenefits--textUppercase {{ $t('home.read_tablet') }}
                            p.pt-2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloremque in odio odit quas.
                        b-col(cols='12', sm='12', md='4', lg='4').text-center.sectionBenefitsRead__item
                            img(src='img/frontend/benefits/phone.png', alt='pasala-la-página', width='200px')
                            p.pt-5.bold.tabletBenefits--textUppercase {{ $t('home.read_movil') }}
                            p.pt-2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloremque in odio odit quas.
                        b-col(cols='12', sm='12', md='4', lg='4').text-center.sectionBenefitsRead__item
                            img(src='img/frontend/benefits/desktop.png', alt='pasala-la-página', width='200px')
                            p.pt-5.bold.tabletBenefits--textUppercase {{ $t('home.read_pc') }}
                            p.pt-2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloremque in odio odit quas.

</template>

<script>
    import ButtonComp from "../../elements/Ui/Button/buttonComp";
    export default {
        name: "Read-benefits-plans",
        components: {ButtonComp},
        data: () => ({

        }),
        methods: {
            acces () {
                console.log ( "Acces home")
            },

        },
    }
</script>

<style lang="sass">
    @import "../../../scss/utilities/variables"
    @import "../../../scss/utilities/mixins"
    #sectionBenefitsRead
        hr
            display: none
        .sectionBenefitsRead
            //@include media(tab-port-767)
                &__item
                    &:nth-child(2)
                        margin-top: 2rem
                        margin-bottom: 2rem
            &__body
                img
                    height: 20rem
                    width: auto
                    opacity: .8
                p
                    font-size: 1.5rem
                    font-weight: 300
                .bold
                    font-weight: 900

</style>
