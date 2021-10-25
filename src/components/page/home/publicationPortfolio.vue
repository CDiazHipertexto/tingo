<template lang="pug">
    //Portfolio
    section#sectionPortfolio.py__section
        b-container.pb-5.pry
            section-heading
                template(slot='text-heading')
                    h5 {{ $t('home.publication_heading') }}
                template(slot='heading-text-btn')
                    button-comp(:eventClick='acces').button.btn.btn--orange
                        template(slot='general-text-btn') {{ $t('buttons.logout.read_free') }}
        b-container(fluid='')
            b-row
                b-col
                    vueper-slides.no-shadow(:breakpoints='breakpoints', :bullets='false', slide-multiple='', :fixed-height='true', :visible-slides='6', :arrows='false', :gap='1', :dragging-distance='1',  autoplay='', :infinite='true', :transitionSpeed='600',  :slide-ratio='1 / 4', :always-refresh-clones='true', )
                        vueper-slide(v-for='(slide, i) in slides',
                            :key='i',
                            :image="slide.image")
</template>
<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import SectionHeading from "../../layout/heading/sectionHeading";
    import ButtonComp from "../../elements/Ui/Button/buttonComp";

    export default {
        name: 'publication-portfolio',
        components: {ButtonComp, SectionHeading, VueperSlides, VueperSlide },
        // In your Vue.js component.
        data: () => ({
            slides: [],
            mediaGroups:[],
            breakpoints: {
                800: {
                    visibleSlides: 4
                },
            },
            randon: '',
        }),

        methods: {
            acces () {
              console.log ( "Acces home")
            },
            fillSlides() {
                let slides = [];
                this.mediaGroups.forEach((mediaGroup) => {
                    slides.push({
                        title:mediaGroup.latest_media.data.number,
                        image:mediaGroup.latest_media.data.cover,
                    })
                });
                this.slides = _.shuffle(slides);

            }
        },

        mounted() {

            let self = this;
            axios
                .get( baseApiUrl + 'media-groups' )
                .then( response => {
                    //console.log (response.data.data);
                    self.mediaGroups = response.data.data;
                    self.fillSlides();
                });

        },
        created () {
            // const idx = Math.floor(Math.random() * this.images.length);
            // console.log (this.images);
            // this.selectedImage = this.images[idx]
        }

    }
</script>
<style scoped lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    @import "../../../../../sass/frontend/utilities/mixins"
    @import '~vueperslides/dist/vueperslides.css'

    #sectionPortfolio
        background-color: #f0f5f9
        .vueperslide
            background-repeat: no-repeat
            background-size: contain
        .vueperslides
            &--fixed-height
                height: 50vh
                margin-bottom: 0
                @include responsive(big-desktop)
                    height: 35vh
                @include responsive(tab-land)
                    height: 30vh
                @include responsive(tab-port)
                    height: 25vh
                @include responsive(phone)
                    height: 20vh
                @include responsive(phoneXs)
                    height: 13vh

</style>
<style lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    #sectionPortfolio
        .vueperslides
            &--fixed-height
                height: 400px
            &__bullet
                .default
                    background-color: rgba(255, 255, 255, 0.3)
                    box-shadow: none
                    transition: 0.3s
                    border: 1px solid #99b3bb
            &__bullet--active
                .default
                    background-color: #19b0d5
        @media all and (max-width: 1280px)
            .pry
                padding-top: 0 !important
</style>



