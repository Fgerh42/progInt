<template> 
<div style="height: 20px;"></div> 
      <base-button
        :isPrimary="false"
        text="Voltar"
        icon="mdi-arrow-left"
        to="/person"
      /> 
      <div style="height: 20px;"></div> 
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
};
</script>