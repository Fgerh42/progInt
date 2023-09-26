<template>
    <v-sheet style="padding: 20px">
      <v-form @submit.prevent ref="form">
        <v-row>
          <v-col style="text-align: center" cols="12" sm="12">
            <p v-if="!financial" style="font-size: 28px">Novo Cadastro</p>
  
            <p v-if="financial" style="font-size: 28px">Editar Financeiro</p>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12">
            <v-autocomplete
            v-model="form.pessoa_id"
            label="Pessoa"
            :items="people"
            item-title="nome"
            item-value="id" 
          />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
             hint="aaaa/mm/dd"
             type="tel"
             v-model="form.data_vencimento"
             v-mask="`####-##-##`"
             label="Data vencimento"
             required
             :rules="geralRule" 
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
             hint="aaaa/mm/dd"
             type="tel"
             v-model="form.data_pagamento"
             v-mask="`####-##-##`"
             label="Data pagamento"
             required
             :rules="geralRule" 
            ></v-text-field>
          </v-col>
        </v-row> 
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              :rules="geralRule"
              v-model="form.valor_devido"
              label="Valor devido"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              :rules="geralRule"
              v-model="form.valor_pago"
              label="Valor pago"
            />
          </v-col>
        </v-row> 
        <v-col align="right">
          <base-button :isPrimary="true" text="Salvar" @click="save()" />
        </v-col>
      </v-form>
    </v-sheet>
  </template>
  
  <script>
  import person from "@/api/person";
  import financial from "@/api/financial_title";  
  import { geralRule, selectorRule } from "@/plugins/validationRules"; 
  
  export default {
    props: {
      financial: {
        type: Object,
        required: false,
      },
    },
    data() {
      return {
        form: {
            pessoa_id:'',
            data_vencimento:'',
            data_pagamento:'',
            valor_devido:'',
            valor_pago:''
        },
        geralRule,
        selectorRule,
        people:[]
      };
    },
  
    mounted() {
      this.listPeople();
    },
    methods: {
      async validate(){
        const { valid } = await this.$refs.form.validate();
        if (valid) this.save();
      },
  
      async save() {
        if (this.$route.params.id) {
          financial.edit(this.form).then(
            (result) => {
              if (result.ok) {
                this.$toasts.success(result.msg);
                this.$router.push("/financial");
              } else {
                this.$toasts.error(result.msg);
              }
            }
          );
        } else {
          financial.save(this.form).then((result) => {
            if (result.ok) {
              this.$toasts.success(result.msg);
              this.$router.push("/financial");
            } else {
              this.$toasts.error(result.msg);
            }
          });
        }
      },
      async listPeople(){
      person.list().then((result) => {
        if (result.ok) {
          this.people = result.dados;
        } else {
          this.$toasts.error(result.msg);
        }
      });
    },

    },
    watch: {
      financial(val) {
        if (val) {
          this.form = {
            id : val.id,
            nome : val.nome,
            pessoa_id: val.pessoa_id,
            data_vencimento : val.data_vencimento, 
            data_pagamento : val.data_pagamento, 
            valor_devido : val.valor_devido, 
            valor_pago: val.valor_pago, 
          }
        }
      },
    }, 
  };
  </script>