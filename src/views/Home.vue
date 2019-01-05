<template lang="pug">
.panel
  .panel-header.text-center
    figure.avatar.avatar-lg
      img(src='@/assets/logo.png', alt='Logo')
    .panel-title.h5.mt-10 FST-ELECTRON

  Tabs
    Tab(name='Image', :selected='true')
      .empty
        .empty-icon
          i.icon.icon-people
        p.empty-title.h5 You have not selected an image!
        p.empty-subtitle Click the button to select a image.
        .empty-action
          input(type='file', @change="selectImage", ref="selectImage")/

      img(:src='selectedImage', height='100%', width='100%', v-if='selectedImage')/
    Tab(name='Models')
      .panel-body
        .tile.tile-centered
          .tile-icon
            .example-tile-icon
              img(src='@/assets/logo.png', width='48', height='48')
          .tile-content
            .tile-title udnie
            small.tile-subtitle.text-gray 14MB · Public · 1 Jan, 2017
          .tile-action
            .form-group
              label.form-switch
                input(v-model="udnie", type='checkbox', @change="selectModel('udnie')")
                i.form-icon

        .tile.tile-centered
          .tile-icon
            .example-tile-icon
              img(src='@/assets/logo.png', width='48', height='48')
          .tile-content
            .tile-title udnie2
            small.tile-subtitle.text-gray 14MB · Public · 1 Jan, 2017
          .tile-action
            .form-group
              label.form-switch
                input(v-model="udnie2", type='checkbox', @change="selectModel('udnie2')")
                i.form-icon
      .panel-footer
        button.btn.btn-primary.btn-block Save

    Tab(name='Results')
      .comparison-slider
        figure.comparison-before
          img(src="https://picturepan2.github.io/spectre/img/macos-sierra-2.jpg")/
          .comparison-label Original

        figure.comparison-after
          img(src="https://picturepan2.github.io/spectre/img/macos-sierra-2.jpg")/
          .comparison-label Transfer style
          textarea.comparison-resizer(readonly)/
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Tabs from '@/components/Tabs'
import Tab from '@/components/Tab'

export default {
  name: 'home',
  components: {
    Tabs,
    Tab
  },
  data() {
    return {
      selectedImage: '',
      selectedModels: [],
      udnie: false,
      udnie2: false
    }
  },
  methods: {
    ...mapMutations([
      'SELECT_IMAGE',
      'SELECT_MODEL'
    ]),
    ...mapActions([
      'selectImage',
      'selectModel'
    ]),
    selectImage() {
      this.selectedImage = URL.createObjectURL(this.$refs.selectImage.files[0])
      this.SELECT_IMAGE(this.selectedImage)
    },
    selectModel(model) {
      this.selectedModels.push(model)
      this.SELECT_MODEL(model)
    }
  }
}
</script>
