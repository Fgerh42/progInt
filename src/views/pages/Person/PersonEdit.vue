<template>
    <v-row style="padding-bottom: 20px">
      <v-col>
        <base-button
          :isPrimary="false"
          text="Voltar"
          icon="mdi-arrow-left"
          to="/person"
        />
      </v-col>
    </v-row>
    <PersonForm :person="personObject" />
  </template>
  
  <script lang="ts">
  import PersonForm from "@/views/pages/Person/PersonForm.vue";
  import person from "@/api/person.js"; 
  
  export default {
    components: {
        PersonForm,
    },
  
    data() {
      return {
        personObject:{

        },
      };
    },
    mounted() {
      this.search();
    },
  
    methods: {
      async search(): Promise<void> {
        person.search(this.$route.params.id).then((result) => {
          this.personObject = result.dados.data;
        });
      },
    },
  };
  </script>