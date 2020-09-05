<template>
  <div class="spin-wrap">
    <div class="spin">
      <a-spin size="large" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.spin-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  background-color: transparentize($black, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
