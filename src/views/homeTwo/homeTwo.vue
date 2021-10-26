<template lang="pug">
  //Layout
  #content
    navigation-two
    main.prehome
      article
        home-banner-two
        categories
</template>

<script>

import navigationTwo from '@/components/layout/nav/navigation-two';
import homeBannerTwo from "@/components/page/home/homeBannerTwo";
import categories from "@/components/page/home/categories";

export default {
  name: 'home-two',
  components: {navigationTwo, homeBannerTwo, categories},
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

