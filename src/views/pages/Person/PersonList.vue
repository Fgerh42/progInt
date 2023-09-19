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
        to="/person/register"
      >
      </base-button>

      <div style="height: 20px;"></div>
    <v-row>
      <v-col>
        <v-table fixed-header over class="elevation-3 rounded text-body-2">
          <thead>
            <tr>
              <th class="text-left">Nome</th>
              <th class="text-left">E-mail</th>
              <th class="text-left">Telefone</th>
              <th class="text-left">Data nascimento</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in people" :key="item.description">
              <td>{{ item.nome }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.telefone }}</td>
              <td>{{ item.data_nascimento }}</td> 
              <td></td>
  
              <td class="text-right">
                <btn-editar
                  style="padding-right: 5px"
                  :href="`/person/${item.id}/edit`"
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
    
    <script lang="ts">

import person from "@/api/person";
  export default {
    data() {
        return {
          id_to_delete: 0,
          modal_delete: false,
          people: [],
    };
    },
    mounted() {
      this.build();
    },
    methods: {
      async build(): Promise<void> {
        person.list().then((result) => {
          if (result.ok) {
            this.people = result.dados; 
          } else {
            this.$toasts.error(result.msg);
          }
        });
      },
  
      async deletePerson(): Promise<void> {
        person.delete(this.id_to_delete).then((result) => {
          this.build();
          if (result.ok) {
            this.$toasts.success(result.msg);
            this.modal_delete = false;
            this.build();
          } else {
            this.$toasts.error("Erro ao deletar função");
          }
        });
      },
  
      showModalDelete(id): void {
        this.id_to_delete = id;
        this.modal_delete = true;
      },
    },
  };
  </script>
    <style lang="scss">
  </style>