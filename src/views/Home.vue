<template lang="pug">
  div
    router-link(:to="{ name: 'viewer' }") Viewer

    form
      .form-group
        select.form-select
          option Style 1
          option Style 2
          option Style 3
          option Style 4
          option Style 5

      .form-group
        label.form-label File
        input.form-input(placeholder='File', type='file')

      .form-group
        button.btn(@click.prevent) Transfer style
</template>

<script>
export default {
  name: 'home'
}
</script>
