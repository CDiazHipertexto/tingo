<template lang="pug">
  //Layout
  #content
    navigation-two
    main.prehome
      article
        home-banner-two
        categories-two
        feature-product
</template>

<script>

import navigationTwo from '@/components/layout/nav/navigation-two';
import homeBannerTwo from "@/components/page/home/homeBannerTwo";
import categoriesTwo from "@/components/page/home/categoriesTwo";
import featureProduct from "@/components/page/home/feature-product";

export default {
  name: 'home-two',
  components: {navigationTwo, homeBannerTwo, categoriesTwo, featureProduct},
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  watch: {

  },
  mounted() {

  }
}
</script>

