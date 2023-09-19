<template>
  <v-app-bar color="white" density="compact">
    <v-app-bar-title>{{ this.$route.query.page }}</v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "CoreAppBar",

  data: () => ({}),
};
</script>