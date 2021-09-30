<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_light.png" />
    <HelloWorld msg="Welcome to Vue Unit Test" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>

<style lang="scss">
.home {
  img {
    height: 250px;
  }
}
</style>
