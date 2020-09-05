<template>
  <div>
    <ul>
      <li v-for="(item, index) in postsList" :key="index">
        <posts-item :posts="item"></posts-item>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postsList: [{ title: 'title1' }],
    };
  },
  components: {
    PostsItem: () => import('@/components/posts/PostsItem'),
  },
};
</script>

<style></style>
