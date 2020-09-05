<template>
  <main class="layout-wrap">
    <base-header></base-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    BaseHeader: () => import('@/components/BaseHeader'),
  },
};
</script>

<style lang="scss" scoped>
.layout-wrap {
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  @include border-side-solid(1px, $border-color);

  .container {
    padding: 10px 10px;
  }
  // 미디어쿼리
  @include mobile-media {
    // max-width: $tablet - 1px;
    max-width: $mobile;
    .container {
      padding: 20px 20px;
    }
  }
  @include tablet-media {
    max-width: $tablet;
    .container {
      padding: 30px 30px;
    }
  }
}
</style>
