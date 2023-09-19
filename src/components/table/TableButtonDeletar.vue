<template>
  <v-btn
    icon
    small
  >
    <v-icon
      small
      @click="$emit('click')"
      v-text="'mdi-delete'"
    />
  </v-btn>
</template>

<script>
  export default { }
</script>
