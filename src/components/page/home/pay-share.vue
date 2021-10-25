<template lang="pug">
  //Portfolio
  section#sectionShare.py__section
    b-container.text-left
      b-row(align-v='left')#sectionTitle
         b-col(xl='6', lg='6', md='12', sm='12', cols='12')
            div.w-100.wrapper-card
              b-container.container-fluid.p-1
                b-row.justify-content-between.align-items-center.p-2
                  b-col(sm='12', md='6', lg='6', xl='6')
                    img(src='@/assets/img-fruit.png', alt='up', width='100%')
                  b-col.text-left(sm='12', md='6', lg='6', xl='6')
                    p.title Snacks para perro
                    p.txt-und 1 Und
                    div.line-secon.p-2
                      div.wrapper-price
                        div.box-price
                          p.text-uppercase.text-shop Compra con un amigo
                          p.price-pack $4.800
                          p.price-uni UNIDAD A: $4.800
                        div.wrapper-dtc
                          p.max-dtc -50%
                    div.line-secon.p-2.mt-1
                      div.wrapper-price
                        div.box-price
                          p.text-uppercase.text-shop Compra con un amigo
                          p.price-pack $4.800
                          p.price-uni UNIDAD A: $4.800
                        div.wrapper-dtc
                          p -15%
         b-col(xl='6', lg='6', md='12', sm='12', cols='12').flex-column.d-flex.justify-content-center
          section-heading
            template(slot='text-heading')
              h2 Paga y comparte
          p.text-prg
           p.m-0
            strong Comparte tu compra con un amigo.
           | Tienen 2 horas para completar la compra con amigos y recibir el mayor descuento para ambos compradores.

</template>

<script>
import ButtonComp from "../../elements/Ui/Button/buttonComp"
import SectionHeading from "../../layout/heading/sectionHeading";


export default {
  name: 'pay-share',
  components: {ButtonComp, SectionHeading,},
  data: () => ({

  }),

  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="sass" scoped>
@import "../../../scss/utilities/variables"
#sectionShare
  .text-left
    text-align: left
  .text-prg
    margin-top: 2em
    max-width: 400px
  .wrapper-card
    p.title
      font-size: 1.2em
      font-weight: 800
      margin: 0
    .txt-und
      font-size: .9em
      font-weight: 300
    .line-secon
      border: 0.785729px solid #808080
      border-radius: 10px
      padding: .5em
      .wrapper-price
        display: flex
        align-items: center
        p
          margin: 0
        .box-price
          .text-shop
            font-size: .81em
          .price-pack
            font-size: 1.5em
          .price-uni
            font-size: .6em
      .wrapper-dtc
        p
          font-size: 1.5em
          &.max-dtc
            color: $blueLightHex
  img
    display: block
    width: 100%
    height: 100%
    object-fit: cover
</style>

<style lang="sass">
@import "../../../scss/utilities/variables"
@import "../../../scss/utilities/mixins"
$gap: 20px
#sectionShare
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
