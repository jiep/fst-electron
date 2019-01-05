<template lang="pug">
  .comparison-slider
    figure.comparison-before
      img(src="https://picturepan2.github.io/spectre/img/macos-sierra-2.jpg")/
      .comparison-label Original

    figure.comparison-after
      img(src="https://picturepan2.github.io/spectre/img/macos-sierra-2.jpg")/
      .comparison-label Transfer style
      textarea.comparison-resizer(readonly)/
</template>

<style lang="sass" scoped>
  .comparison-slider
    height: 100%
</style>
