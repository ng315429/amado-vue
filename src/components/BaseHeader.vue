<template>
  <header class="header-wrap">
    <div class="side">
      <router-link to="/">
        <a-icon type="home" />
      </router-link>
    </div>
    <h1 class="title">AMADO</h1>
    <div class="side">
      <router-link to="/mypage">
        <!-- <a-icon type="user" /> -->
        <a-icon type="setting" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-wrap {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  height: 50px;
  @include border-bottom-solid(1px, $border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  background-color: $white;

  .side {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    color: $main-color;
  }
  .anticon {
    font-size: 18px;
    color: $black;
  }
}
</style>
