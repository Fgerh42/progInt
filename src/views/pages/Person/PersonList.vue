<template>
  
    <v-col>
      <base-button
        :isPrimary="true"
        text="Adicionar novo cadastro"
        icon="mdi-plus"
        to="/person/register"
      >
      </base-button>
    </v-col>
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
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.birthday }}</td> 
              <td></td>
  
              <td class="text-right">
                <btn-editar
                  v-show="item.permissions.update"
                  style="padding-right: 5px"
                  :href="`/person/${item.id}/edit`"
                />
                <btn-deletar
                  v-show="item.permissions.delete"
                  style="padding-left: 5px"
                  @click="showModalDelete(item.id)"
                />
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-col align="center">
      <vue-awesome-paginate
        :total-items="pages"
        :items-per-page="1"
        :max-pages-shown="5"
        v-model="page"
        @click="changePage"
      />
    </v-col>
  </template>
    
    <script lang="ts">

import person from "@/api/person";
  export default {
    data() {
        return {
      people: [],
      pages: 0,
      page: 1,
    };
    },
    mounted() {
      this.build();
    },
    methods: {
      async search(): Promise<void> {
        person.list(this.page, 15).then((result) => {
          if (result.ok) {
            this.people = result.dados.data;
            this.pages = result.dados.meta.last_page;
          } else {
            this.$toasts.error(result.msg);
          }
        });
      },
  
      async changePage(pag: number): Promise<void> {
        this.page = pag;
        this.build();
      },
  
      async build(): Promise<void> {
        person.list(this.page, 15).then((result) => {
          if (result.ok) {
            this.functions = result.dados.data;
            this.pages = result.dados.meta.last_page;
          } else {
            this.$toasts.error(result.msg);
          }
        });
      },
  
      async deleteVehicle(): Promise<void> {
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
  
      showModalDelete(id: String): void {
        this.id_to_delete = id;
        this.modal_delete = true;
      },
    },
  };
  </script>
    <style lang="scss">
  </style>