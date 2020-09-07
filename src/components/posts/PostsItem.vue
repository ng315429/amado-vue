<template>
  <div>
    {{ posts.title }}
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
