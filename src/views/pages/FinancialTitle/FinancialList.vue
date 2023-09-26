<template>
  
  <v-dialog
    v-model="modal_delete"
    max-width="500px"
  >
    <v-card>
      <v-card-title class="headline">Deletar</v-card-title>
      <v-card-text>Você tem certeza que quer deletar?</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="red" text @click="deletePerson()"> Deletar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

      <div style="height: 20px;"></div>

      <base-button
        :isPrimary="true"
        text="Adicionar novo cadastro"
        icon="mdi-plus"
        to="/financial/register"
      >
      </base-button>

      <div style="height: 20px;"></div>
    <v-row>
      <v-col>
        <v-table fixed-header over class="elevation-3 rounded text-body-2">
          <thead>
            <tr>
              <th class="text-left">Pessoa</th>
              <th class="text-left">Vencimento</th>
              <th class="text-left">Pagamento</th>
              <th class="text-left">Valor devido</th>
              <th class="text-left">Valor pago</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in financials" :key="item.id">
              <td>{{ item.pessoa_nome }}</td>
              <td>{{ item.data_vencimento }}</td>
              <td>{{ item.data_pagamento }}</td>
              <td>{{ item.valor_devido }}</td>
              <td>{{ item.valor_pago }}</td> 
              <td></td>
  
              <td class="text-right">
                <btn-editar
                  style="padding-right: 5px"
                  :href="`/financial/${item.id}/edit`"
                />
                <btn-deletar
                  style="padding-left: 5px"
                  @click="showModalDelete(item.id)"
                />
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </template>
    
<script>

import financial_title from "@/api/financial_title.js";
  export default {
    data() {
        return {
          id_to_delete: 0,
          modal_delete: false,
          financials: [],
    };
    },
    mounted() {
      this.build();
    },
    methods: {
      async build() {
        financial_title.list().then((result) => {
          if (result.ok) {
            this.financials = result.dados; 
          } else {
            this.$toasts.error(result.msg);
          }
        });
      },
  
      async deletePerson(){
        financial_title.delete(this.id_to_delete).then((result) => {
          this.build();
          if (result.ok) {
            this.$toasts.success(result.msg);
            this.modal_delete = false;
            this.build();
          } else {
            this.$toasts.error("Erro ao deletar financeiro");
          }
        });
      },
  
      showModalDelete(id){
        this.id_to_delete = id;
        this.modal_delete = true;
      },
    },
  };
  </script>
    <style lang="scss">
  </style>