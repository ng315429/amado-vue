<template>
  <main class="layout-wrap">
    <router-view></router-view>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.layout-wrap {
  width: 100%;
  max-width: $tablet;
  margin: 0 auto;
  background-color: #fff;
}
</style>
