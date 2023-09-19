<template>
  <v-btn color="blue">
    <v-icon v-if="icon"
      color="white"
      :icon="icon"
    >
    </v-icon>
    <p
      :style="`position:relative;margin:8px;
     color:white`"
    >
      {{ text }}
    </p>
    <slot name="loading">
      <i v-if="loading" class="fas fa-spinner fa-spin"></i>
    </slot>
    <slot></slot>
  </v-btn>
</template>

<script>

export default {
  name: "base-button",
  data() {
    return {
      loading: false,
    };
  },

  props: {
    text: String,
    disabled: Boolean,
    isPrimary: Boolean,
    icon: String,
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  }, 
};
</script>
  <style lang="scss">
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  i {
    padding: 0 3px;
  }
}
</style>
  