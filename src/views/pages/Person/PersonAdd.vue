<template>
  
    <v-col>
      <base-button
        :isPrimary="true"
        text="Adicionar novo dispositivo"
        icon="mdi-plus"
        to="/dispositivo/cadastrar"
      >
      </base-button>
    </v-col>
    <v-sheet
      class="elevation-3 rounded text-body-2"
      rounded
      style="padding: 10px; margin: 10px"
    >
    </v-sheet>
    <v-row>
      <v-col>
        <v-table fixed-header over class="elevation-3 rounded text-body-2">
          <thead>
            <tr>
              <th class="text-left">Descrição</th>
              <th class="text-left">Marca</th>
              <th class="text-left">Modelo</th>
              <th class="text-left">Imei</th>
              <th class="text-left">Status</th>
              <th class="text-left">Tentativas</th>
              <th class="text-left">Ações</th>
            </tr>
          </thead>
          <!-- <tbody>
            <tr v-for="item in functions" :key="item.description">
              <td>{{ item.description }}</td>
              <td>{{ item.brand }}</td>
              <td>{{ item.model }}</td>
              <td>{{ item.imei }}</td>
              <td>{{ item.is_active ? "Ativo" : "Inativo" }}</td>
              <td></td>
  
              <td class="text-right">
                <btn-editar
                  v-show="item.permissions.update"
                  style="padding-right: 5px"
                  :href="`/dispositivo/${item.id}/editar`"
                />
                <btn-deletar
                  v-show="item.permissions.delete"
                  style="padding-left: 5px"
                  @click="showModalDelete(item.id)"
                />
              </td>
            </tr>
          </tbody> -->
        </v-table>
      </v-col>
    </v-row>
    <!-- <v-col align="center">
      <vue-awesome-paginate
        :total-items="pages"
        :items-per-page="1"
        :max-pages-shown="5"
        v-model="page"
        @click="changePage"
      />
    </v-col> -->
  </template>
    
    <script lang="ts">

  export default {
    data() {
      return {
      
      };
    },
    mounted() {
      this.build();
    },
    // methods: {
    //   async search(): Promise<void> {
    //     mobileDeviceApi.list(this.page, 15).then((result) => {
    //       if (result.ok) {
    //         this.functions = result.dados.data;
    //         this.pages = result.dados.meta.last_page;
    //       } else {
    //         this.$toasts.error(result.msg);
    //       }
    //     });
    //   },
  
    //   async changePage(pag: number): Promise<void> {
    //     this.page = pag;
    //     this.build();
    //   },
  
    //   async build(): Promise<void> {
    //     mobileDeviceApi.list(this.page, 15).then((result) => {
    //       if (result.ok) {
    //         this.functions = result.dados.data;
    //         this.pages = result.dados.meta.last_page;
    //       } else {
    //         this.$toasts.error(result.msg);
    //       }
    //     });
    //   },
  
    //   async deleteVehicle(): Promise<void> {
    //     mobileDeviceApi.delete(this.id_to_delete).then((result) => {
    //       this.build();
    //       if (result.ok) {
    //         this.$toasts.success(result.msg);
    //         this.modal_delete = false;
    //         this.build();
    //       } else {
    //         this.$toasts.error("Erro ao deletar função");
    //       }
    //     });
    //   },
  
    //   showModalDelete(id: String): void {
    //     this.id_to_delete = id;
    //     this.modal_delete = true;
    //   },
    // },
  };
  </script>
    <style lang="scss">
  </style>