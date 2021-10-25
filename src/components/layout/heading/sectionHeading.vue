<template lang="pug">
    //Heading Text
    b-row(align-v='center')#sectionTitle
        b-col(xl='9', lg='9', md='8', sm='12', cols='12').sectionTitle--text
            .sectionTitle__block
                slot(name='text-heading')
                    h4 {{ $t('message.hello') }}
                hr.sectionTitle--line
        b-col(xl='3', lg='3', md='4', sm='12', cols='12', align-self='start',).sectionTitle--button
            slot(name='heading-text-btn')
                button-comp(:eventClick='acces')
</template>

<script>
    import ButtonComp from "../../elements/Ui/Button/buttonComp";
    export default {
        name: "section-heading",
        components: {ButtonComp},
        data: () => ({

        }),
        methods: {
            acces () {
                console.log ( "Acces home")
            }
        },
        mounted() {
            //console.log(this.$i18n.messages.es)
        }
    }
</script>

<style scoped lang="sass">
    @import "../../../scss/utilities/variables"
    h4
        color: $greenDarkHex
        text-transform: uppercase
</style>
