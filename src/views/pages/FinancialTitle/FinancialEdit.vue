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
  import financial from "@/api/financial_title.js"; 
  
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
    mounted() {
      this.search();
    },
  
    methods: {
      async search(){
        financial.search(this.$route.params.id).then((result) => { 
          this.financialObject = result.dados;
        });
      },
    },
  };
  </script>