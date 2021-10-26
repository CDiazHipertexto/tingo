<template lang="pug">
  //Layout
  #content
    navigation-two
    main.prehome
      article
        home-banner-two
        categories
        choose-product
        pay-share
        immedi-delivery
        cta-home-two
</template>

<script>

import navigationTwo from '@/components/layout/nav/navigation-two';
import homeBannerTwo from "@/components/page/home/homeBannerTwo";
import categories from "@/components/page/home/categories";
import chooseProduct from "@/components/page/home/choose-product";
import payShare from "@/components/page/home/pay-share";
import immediDelivery from "@/components/page/home/immedi-delivery";
import ctaHomeTwo from "@/components/page/home/cta-home-two";

export default {
  name: 'home-two',
  components: {navigationTwo, homeBannerTwo, categories, chooseProduct, payShare, immediDelivery, ctaHomeTwo},
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

