<template lang="pug">
  //Layout
  #content
    navigation
    main.prehome
      article
        home-banner
        categories
        choose-product
</template>

<script>

import navigation from '@/components/layout/nav/navigation';
import homeBanner from "@/components/page/home/homeBanner";
import categories from "@/components/page/home/categories";
import chooseProduct from "@/components/page/home/choose-product";

export default {
  name: 'home-one',
  components: {navigation, homeBanner, categories, chooseProduct},
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
<style lang="sass" scoped>
  h1
    background-color: blue
</style>
