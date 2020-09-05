<template>
  <div>
    <login-form></login-form>
  </div>
</template>

<script>
export default {
  components: {
    LoginForm: () => import('@/components/LoginForm'),
  },
};
</script>

<style></style>
