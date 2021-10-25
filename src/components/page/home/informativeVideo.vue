<template lang="pug">
    //Portfolio
    section#sectionVideoCorp.py__section
        b-container.pb-5
            section-heading
                template(slot='text-heading')
                    h5 {{ $t('home.when_where_how_want') }}
                template(slot='heading-text-btn')
                    button-comp(:eventClick='acces').button.btn.btn--orange
                        template(slot='general-text-btn') {{ $t('buttons.logout.read_free') }}
        b-container
                b-row
                    b-col(cols='12')
                        #app
                            .videos
                                ul.videos__list
                                    li.videos__item(v-for='(video, index) in videos', :key='index')
                                        LazyYoutubeVideo(:src='video.url', :preview-image-size='video.previewImageSize', :aspect-ratio='video.aspectRatio', :thumbnail-listeners='{ load: foo }')

</template>

<script>
    //import
    import 'vue-lazy-youtube-video/dist/style.css'
    import ButtonComp from "../../elements/Ui/Button/buttonComp"
    import LazyYoutubeVideo from 'vue-lazy-youtube-video'
    export default {
        //components: {  },
        name: 'informative-video',
        components: {ButtonComp, LazyYoutubeVideo },
        data: () => ({
            videos: [
                {
                    url: "https://www.youtube.com/embed/K3iuLmRDr_w",
                    previewImageSize: "maxresdefault"
                },
            ],
            thumbnailListeners: {
                load() {
                    console.log('load')
                },
            },
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

<style lang="sass">
    @import "../../../../../sass/frontend/utilities/variables"
    @import "../../../../../sass/frontend/utilities/mixins"
    $gap: 20px
    #sectionVideoCorp
        iframe
            height: 420px !important
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
