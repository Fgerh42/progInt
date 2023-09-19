<template>
    <v-sheet style="padding: 20px">
      <v-form @submit.prevent ref="form">
        <v-row>
          <v-col style="text-align: center" cols="12" sm="12">
            <p v-if="!person" style="font-size: 28px">Novo Cadastro</p>
  
            <p v-if="person" style="font-size: 28px">{{ person.name }}</p>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12">
            <v-text-field
              :rules="geralRule"
              v-model="form.name"
              label="Nome"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              :rules="geralRule"
              v-model="form.phone"
              type="tel"
              label="Telefone"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              :rules="geralRule"
              v-model="form.email"
              label="E-mail"
            ></v-text-field>
          </v-col>
        </v-row>
          <v-col cols="12" sm="6">
            <v-text-field
             hint="dd/mm/aaaa"
             type="tel"
             v-mask="`##/##/####`"
             label="Data nascimento"
             required
             :rules="geralRule" 
            ></v-text-field>
          </v-col>

        <v-col align="right">
          <base-button :isPrimary="true" text="Salvar" @click="validate()" />
        </v-col>
      </v-form>
    </v-sheet>
  </template>
  
  <script lang="ts">
  import person from "@/api/person";
  import { geralRule, selectorRule } from "@/plugins/validationRules";
  import { PropType } from "vue";
  
  export default {
    props: {
      person: {
        type: Object,
        required: false,
      },
    },
    data() {
      return {
        form: {
            name:'',
            phone:'',
            email:'',
            date:''
        },
        geralRule,
        selectorRule,
      };
    },
  
    methods: {
      async validate(): Promise<void> {
        const { valid } = await this.$refs.form.validate();
        if (valid) this.save();
      },
  
      async save(): Promise<void> {
        if (this.$route.params.id) {
          person.edit(this.form, this.$route.params.id).then(
            (result) => {
              if (result.ok) {
                this.$toasts.success(result.msg);
                this.$router.push("/dispositivo");
              } else {
                this.form.days_week = [];
                this.$toasts.error(result.msg);
              }
            }
          );
        } else {
          person.save(this.form).then((result) => {
            if (result.ok) {
              this.$toasts.success(result.msg);
              this.$router.push("/dispositivo");
            } else {
              this.form.days_week = [];
              this.$toasts.error(result.msg);
            }
          });
        }
      },
    },
    watch: {
      device(val) {
        if (val) {
          this.form = {
            id : val.id,
            name : val.name,
            phone : val.phone,
            email : val.email, 
            date : val.date, 
          }
        }
      },
    }, 
  };
  </script>