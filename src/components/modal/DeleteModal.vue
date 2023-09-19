<template>
  <v-dialog
    v-model="modalState"
    max-width="500px"
    @click:outside="closeModal()"
  >
    <v-card>
      <v-card-title class="headline">Deletar</v-card-title>
      <v-card-text>Você tem certeza que quer deletar?</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="red" text @click="deleteItem()"> Deletar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modal: {},
  },

  data() {
    return {
      modalState: false,
    };
  },

  watch: {
    modal(newVal) {
      this.modalState = newVal;
    },
  },

  methods: {
    deleteItem() {
      this.$emit("deleteItem");
    },
    closeModal(){
      this.$emit("closeModal");
      
    }
  },
};
</script>

<style></style>
