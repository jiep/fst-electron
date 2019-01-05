<template lang="pug">
  div(id="app")
    Bar/
    router-view/
</template>

<script>
import Bar from '@/components/Bar'

export default {
  name: 'app',
  components: {
    Bar
  }
}
</script>

<style lang="sass">
#app
  height: 100%
  width: 100%
</style>
