<template>
<!--    //Benefits Pay-->
<!--    section#sectionAppStores.py__section-->
        <div id="sectionAppStores">
            <div class="sectionAppStores__padding" >
                <a href="#">
                    <img src="img/frontend/pre-home/google-play-badge.svg" alt="" width="200">
                </a>
                <a href="#">
                    <img src="img/frontend/pre-home/app-store-badge.svg" alt="" width="200">
                </a>
            </div>
        </div>
</template>

<script>
    export default {
        name: "app-stores-download",
        components: {  },
        data: () => ({

        }),
        methods: {

        }
    }
</script>

<style lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    @import "../../../../../sass/frontend/utilities/mixins"
    #sectionAppStores
        margin-bottom: 0
        text-align: center
        img
            width: 17rem
        .sectionAppStores__padding
            padding-bottom: 5rem
            padding-top: 5rem
</style>
