<template lang="pug">
  //Layout
  #content
    navigation
    main.prehome
      article
        home-banner
        categories
</template>

<script>

import navigation from '@/components/layout/nav/navigation';
import homeBanner from "@/components/page/home/homeBanner";

export default {
  name: 'home-one',
  components: {navigation, homeBanner},
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
