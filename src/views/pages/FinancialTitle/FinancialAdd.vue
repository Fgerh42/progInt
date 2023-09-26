<template> 
<div style="height: 20px;"></div> 
      <base-button
        :isPrimary="false"
        text="Voltar"
        icon="mdi-arrow-left"
        to="/financial"
      /> 
      <div style="height: 20px;"></div> 
  <FinancialForm :financial="financialObject" />
</template>

<script>
import FinancialForm from "@/views/pages/FinancialTitle/FinancialForm.vue"; 

export default {
  components: {
    FinancialForm,
  },

  data() {
    return {
      financialObject:{

      },
    };
  },
};
</script>