<template lang="pug">
  nav.panel-nav
    ul.tab.tab-block
      li.tab-item(v-for='tab in tabs', :class="{ 'active': tab.isActive }")
        a(:href='tab.href', @click='selectTab(tab)') {{ tab.name }}
    .tabs-details
      slot
</template>

<script>
export default {
  data() {
    return {
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
}
</script>
