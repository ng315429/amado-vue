<template>
  <div id="app">
    <router-view></router-view>
    <base-spin v-if="showSpinCheck"></base-spin>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSpinCheck: false,
    };
  },
  components: {
    BaseSpin: () => import('@/components/BaseSpin'),
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'AMADO';
      },
    },
  },
  methods: {
    showSpin(show) {
      this.showSpinCheck = show;
    },
  },
  created() {
    this.$EventBus.$on('show-spin', this.showSpin);
  },
  destroyed() {
    this.$EventBus.$off('show-spin');
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
