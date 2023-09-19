<template>
  <router-link :to="href" class="text-decoration-none">
    <v-icon small icon="mdi-lock-open" color="black" />
  </router-link>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "",
    },
  },
};
</script>
