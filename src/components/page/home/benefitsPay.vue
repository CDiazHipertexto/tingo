<template lang="pug">
    //Benefits Pay
    section#sectionBenefitsPay.py__section
        b-container.pb-5
            b-row
                b-col(cols='12')
                    section-heading
                        template(slot='text-heading')
                            p {{ $t('home.text_payment_benefits') }}
                        template(slot='heading-text-btn')
                            button-comp(:eventClick='acces').button.btn.btn--orange
                                template(slot='general-text-btn') {{ $t('buttons.logout.read_free') }}
        b-container(fluid='').py-5
            b-row
                b-col(fluid="").px-0
                    table-benefits-plans

</template>

<script>
    import TableBenefitsPlans from "./tableBenefitsPlans";
    import ButtonComp from "../../elements/Ui/Button/buttonComp";
    export default {
        name: "benefitsPay",
        components: {ButtonComp, TableBenefitsPlans},

        methods: {
            acces () {
                console.log ( "Acces home")
            },
        },
    }
</script>

<style lang="sass">
    #sectionBenefitsPay
        .sectionTitle--line
            display: none
</style>
