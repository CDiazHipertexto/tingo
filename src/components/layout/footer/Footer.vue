<template lang="pug">
    // Navigation
    footer#footer
        section.FooterContainer__up.FooterContainer__padding
            b-container
                b-row
                    b-col(cols='12', sm='12', md='12', lg="8")
                        .logos-pago
                            ul
                                li
                                    a(href='#')
                                        img(src='img/frontend/footer/logo-visa.png', alt='Metodos-de-pago pasala-la-página', width='200px')
                                li
                                    a(href='#')
                                        img(src='img/frontend/footer/logo-mastercard.png', alt='Metodos-de-pago pasala-la-página', width='200px')
                                li
                                    a(href='#')
                                        img(src='img/frontend/footer/logo-diners.png', alt='Metodos-de-pago pasala-la-página', width='200px')
                                li
                                    a(href='#')
                                        img(src='img/frontend/footer/logo-american.png', alt='Metodos-de-pago pasala-la-página', width='200px')
                                li
                                    a(href='#')
                                        img(src='img/frontend/footer/logo-via-baloto.png', alt='Metodos-de-pago pasala-la-página', width='200px')
                                li
                                    a(href='#')
                                        img(src='img/frontend/footer/logo-pse.png', alt='Metodos-de-pago pasala-la-página', width='200px')
                    b-col(cols='12', sm='12', md='12', lg="4")
                        .logos-afiliados
                            .logos-afiliados--texto
                                p {{ $t('home.affiliated_to') }}
                            ul
                                li
                                    a(href='#')
                                        img(src='img/frontend/footer/logo-ccb.png', alt='Metodos-de-pago pasala-la-página', width='200px')
                                li
                                    a(href='#')
                                        img(src='img/frontend/footer/logo-iab.png', alt='Metodos-de-pago pasala-la-página', width='200px')

        section.FooterContainer__mid.FooterContainer__padding
            b-container
                b-row
                    b-col.FooterContainer--col-pb.FooterContainer--text-aling(	cols='6', sm='6', md='3', lg="3" )
                        h6.FooterContainer__mid--textUppercase.mb-2 {{ $t('home.fo_heading_plans') }}
                        b-list-group
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_plans') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_catalogue') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_give_away') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_account') }}
                    b-col.FooterContainer--col-pb.FooterContainer--text-aling(	cols='6', sm='6', md='3', lg="3" )
                        h6.FooterContainer__mid--textUppercase.mb-2 {{ $t('home.fo_body_we') }}
                        b-list-group
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_what_plp') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_press') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_awards') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_our_team') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_contacts') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_foundation') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_help') }}
                    b-col.FooterContainer--text-aling(	cols='6', sm='6', md='3', lg="3" )
                        h6.FooterContainer__mid--textUppercase.mb-2 {{ $t('home.fo_body_contact') }}
                        b-list-group
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_location') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_facebook') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_twitter') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_youToBe') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_instagram') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_linkedIn') }}
                    b-col.FooterContainer--text-aling(	cols='6', sm='6', md='3', lg="3" )
                        h6.FooterContainer__mid--textUppercase.mb-2 {{ $t('home.fo_body_legal') }}
                        b-list-group
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_site_map') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_terms_conditions') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_privacy_policies') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_digital_publications') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_addresses') }}
                            b-list-group-item
                                p
                                    a(href='#') {{ $t('home.fo_body_phone') }}
        section.FooterContainer__bottom.py-5
            .container
                .row
                    .col-md-12
                        p.mb-2 {{ $t('home.fo_dos_body_legal') }}
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    @import "../../../../../sass/frontend/utilities/mixins"
    footer
        .FooterContainer
            &__up
                background: #313c42
                .logos-pago
                    ul
                        display: flex
                        margin: 0
                        padding: 0
                        justify-content: space-between
                        flex-wrap: wrap
                        li
                            margin: 0 1em 0 0
                            list-style: none
                            img
                                height: 28px
                                width: auto
            &__mid
                background: #1f272a
            &__bottom
                background: #1d1d1d
        .list-group
            color: $whiteHex
            .list-group-item
                background: transparent
                padding: 0
                font-size: .9rem
                border: 0
                p
                    margin: 0
                    a
                        color: #808b90
                        padding: 0
                        white-space: nowrap
                        overflow: hidden
                        letter-spacing: .14px
                        transition: all .2s ease
                        display: list-item
                        @include text(null, 3.7rem, 400)
                        &:hover
                            color: $whiteHex
        h5, h6, p
            color: #ffffff
        .logos-afiliados
            display: flex
            align-items: center
            &--texto
                width: 30%
                text-align: right
            ul
                display: flex
                margin: 0
                padding: 0
                justify-content: space-evenly
                align-items: center
                float: left
                width: 80%
                li
                    margin: 0 1em 0 0
                    list-style: none
                    img
                        height: 28px
                        width: auto
</style>
