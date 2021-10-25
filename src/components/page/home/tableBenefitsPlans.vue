<template lang="pug">
    //Table Benefits Plans
    b-container#tabletBenefits.table
        b-row.pb-3.tabletBenefits__heading
            b-col(cols='12')
                b-container.bv-row
                    b-row(align-v='center')
                        b-col(cols='12', sm='12', md='5', lg='5')
                            b-row.table--center.table--right
                                b-col(cols='12')
                                    p.tabletBenefits--textUppercase {{ $t('home.select_affiliation_plan') }}
                        b-col(cols='12', sm='12', md='7', lg='7')
                            b-row.text-center
                                b-col(cols='4', sm='4').table--backColor
                                    p.textplan__title {{ $t('home.freemium') }}
                                    hr.line--blue
                                    p.textplan__secun {{ $t('home.only_mobile_tablet') }}
                                b-col(cols='4', sm='4').table--backColor
                                    p.textplan__title  {{ $t('home.platinum') }}
                                    hr.line--gray
                                    p.textplan__secun {{ $t('home.recommended') }}
                                b-col(cols='4', sm='4').table--backColor
                                    p.textplan__title {{ $t('home.personal') }}
                                    hr.line--green
                                    p.textplan__secun &nbsp;
        b-row.color.py-3.table__list
            b-col(cols='12')
                b-container.bv-row
                    b-row
                        b-col(cols='12', sm='12', md='5', lg='5')
                            b-row.table--center
                                b-col(cols='12')
                                    p {{ $t('home.you_online_hours_day') }}
                        b-col(cols='12', sm='12', md='7', lg='7')
                            b-row.text-center
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
        b-row.color.py-3.table__list
            b-col(cols='12')
                b-container.bv-row
                    b-row(align-v='center')
                        b-col(cols='12', sm='12', md='5', lg='5')
                            b-row.table--center
                                b-col(cols='12')
                                    p {{ $t('home.you_read_magazine') }}
                        b-col(cols='12', sm='12', md='7', lg='7')
                            b-row.text-center
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
                                b-col(cols='4', sm='4').table--backColor
                                    p

                                b-col(cols='4', sm='4').table--backColor
                                    p
        b-row.color.py-3.table__list
            b-col(cols='12')
                b-container.bv-row
                    b-row(align-v='center')
                        b-col(cols='12', sm='12', md='5', lg='5')
                            b-row.table--center
                                b-col(cols='12')
                                    p {{ $t('home.all_devices') }}
                        b-col(cols='12', sm='12', md='7', lg='7')
                            b-row.text-center
                                b-col(cols='4', sm='4').table--backColor
                                    p

                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
        b-row.color.py-3.table__list
            b-col(cols='12')
                b-container.headerTable
                    b-row(align-v='center')
                        b-col(cols='12', sm='12', md='5', lg='5')
                            b-row.table--center
                                b-col(cols='12')
                                    p {{ $t('home.benefit_one') }}
                        b-col(cols='12', sm='12', md='7', lg='7')
                            b-row.text-center
                                b-col(cols='4', sm='4').table--backColor
                                    p

                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
        b-row.color.py-3.table__list
            b-col(cols='12')
                b-container.bv-row
                    b-row(align-v='center')
                        b-col(cols='12', sm='12', md='5', lg='5')
                            b-row.table--center
                                b-col(cols='12')
                                    p {{ $t('home.benefit_two') }}
                        b-col(cols='12', sm='12', md='7', lg='7')
                            b-row.text-center
                                b-col(cols='4', sm='4').table--backColor
                                    p

                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
        b-row.color.py-3.table__list
            b-col(cols='12')
                b-container.bv-row
                    b-row(align-v='center')
                        b-col(cols='12', sm='12', md='5', lg='5')
                            b-row.table--center
                                b-col(cols='12')
                                    p {{ $t('home.benefit_three') }}
                        b-col(cols='12', sm='12', md='7', lg='7')
                            b-row.text-center
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
                                b-col(cols='4', sm='4').table--backColor
                                    p
        b-row.color.py-3.table__list
            b-col(cols='12')
                b-container.bv-row
                    b-row(align-v='center')
                        b-col(cols='12', sm='12', md='5', lg='5')
                            b-row.table--center
                                b-col(cols='12')
                                    p {{ $t('home.benefit_four') }}
                        b-col(cols='12', sm='12', md='7', lg='7')
                            b-row.text-center
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                b-col(cols='4', sm='4').table--backColor
                                    p
                                        i.fas.fa-circle
                                b-col(cols='4', sm='4').table--backColor
                                    p
        b-row.pt-4.tabletBenefits__footer
            b-col(cols='12')
                b-container.bv-row
                    b-row(align-v='center')
                        b-col(cols='12', sm='12', md='5', lg='5')
                            b-row.table--center.table--right
                                b-col(cols='12')
                                    p.tabletBenefits--textUppercase {{ $t('home.plan_value') }}
                        b-col(cols='12', sm='12', md='7', lg='7')
                            b-row.text-center
                                b-col(cols='4', sm='4').table--backColor
                                    p.textplan__title {{ $t('home.price_freemium') }}
                                b-col(cols='4', sm='4').table--backColor
                                    p.textplan__title  {{ $t('home.price_platinum') }}
                                b-col(cols='4', sm='4').table--backColor
                                    p.textplan__title {{ $t('home.price_personal') }}
</template>

<script>
    export default {
        name: "table-benefits-plans",
        data: () => ({

        }),
        methods: {

        },
    }
</script>

<style lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    #tabletBenefits
        hr
            border: 0
            width: 50%
            margin: .5em auto
        .line--blue
            border-top: 5px solid rgb(0, 215, 255)
        .line--gray
            border-top: 5px solid rgb(195, 196, 196)
        .line--green
            border-top: 5px solid rgb(121, 146, 89)
        .color:nth-child(2n+2)
            background: #0f4251
        p
            margin: 0
        .textplan
            &__title
                text-transform: uppercase
            &__secun
                font-size: .8em
        .table
            &--right
                text-align: right

        @media all and (max-width: 767px)
            .table
                &--center
                    text-align: center
                    padding: 1em 0
                &--backColor:nth-child(2n+1)
                    background: #0f4251
                &--backColor:nth-child(2n+2)
                    background: #17576a
                &--backColor
                    padding: 1em 0.1em
            .color:nth-child(2n+2)
                background: transparent
            .color
                padding: 0 0 0 0 !important
</style>
