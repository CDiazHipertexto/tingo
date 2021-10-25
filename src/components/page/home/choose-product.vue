<template lang="pug">
    //Portfolio
    section#sectionVideoCorp.py__section.bg-dark
        b-container.text-white.text-left
            b-row(align-v='left')#sectionTitle
              b-col(xl='6', lg='6', md='12', sm='12', cols='12')
                section-heading
                    template(slot='text-heading')
                        h2 Elige tu producto
              b-col(xl='6', lg='6', md='12', sm='12', cols='12')
</template>

<script>
    import ButtonComp from "../../elements/Ui/Button/buttonComp"
    import SectionHeading from "../../layout/heading/sectionHeading";
    export default {
        name: 'choose-product',
        components: {ButtonComp, SectionHeading},
        data: () => ({

        }),
        methods: {
            acces () {
                console.log ( "Acces home")
            },
            foo() {
                console.log("bar");
            }
        },
    }
</script>

<style lang="sass" scoped>
  @import "../../../scss/utilities/variables"
  .bg-dark
    background-color: $greenDarkHex
  .py__section
    padding-bottom: 0
    padding-top: 0
  #sectionVideoCorp
    .text-left
      text-align: left
</style>

<style lang="sass">
    @import "../../../scss/utilities/variables"
    @import "../../../scss/utilities/mixins"
    $gap: 20px
    #sectionVideoCorp
        @media all and (max-width: 1280px)
            .pry
                padding-top: 0 !important
        #app
            font-family: sans-serif
            .h1
                text-align: center
                color: #34495e
            p
                text-align: center
            .videos
                &__list
                    display: flex
                    flex-wrap: wrap
                    justify-content: space-between
                    padding-left: 0
                    margin:
                        top: 0
                        bottom: 0
                    list-style: none
                    box-shadow: 0 50px 75px rgba(0,0,0,.2)
                &__item
                    width: calc(100% - #{$gap / 2})
                    &:nth-child(n + 3)
                        margin-top: $gap
</style>
