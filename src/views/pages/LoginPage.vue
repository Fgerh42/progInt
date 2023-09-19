<template>
  <v-app>
    <v-container
      fluid
      class="grey lighten-3 fill-height"
      style="background-color: lightblue"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" md="4" justify="center">
          <v-card
            style="
              margin: 50px;
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 300;
              height: 300;
            "
          >
            <v-toolbar color="cyan" flat dark>
              <v-toolbar-title> Login </v-toolbar-title>
            </v-toolbar>

            <v-card-text class="pa-4">
              <v-form @submit="login">
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="form.usuario"
                      outlined
                      hide-details="auto"
                      label="Usuário"
                      class="mb-4"
                      autocomplete="nope"
                      prepend-icon="mdi-account-circle"
                    />
                    <v-text-field
                      v-model="form.senha"
                      outlined
                      hide-details="auto"
                      :type="showPassword ? 'text' : 'password'"
                      label="Senha"
                      prepend-icon="mdi-lock"
                      append-inner-icon="mdi-eye"
                      @click:append-inner="showPassword = !showPassword"
                    />
                  </v-col>
                </v-row>
                <v-row class="mt-4">
                  <v-col class="text-center">
                    <v-btn color="black" dark outlined @click="login()">
                      <v-icon class="mr-2"> mdi-login </v-icon>
                      Entrar
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import auth from "@/api/auth.js";
import logo from "@/assets/images/logo.png";
export default {
  name: "Login",
  data() {
    return {
      form: {
        usuario: null,
        senha: null,
      },
      showPassword: false,
      disableButton: false,
    };
  },
  methods: {
    login() {
      this.disableButton = true;


      auth.login(this.form).then((result) => {
        if (result.ok) {
          this.$toasts.success(result.msg);
          this.$router.push("/");
          localStorage.setItem("data", JSON.stringify(result.dados.data));
        } else {
          this.$toasts.error(result.msg);
        }
      });
    },
  },
  mounted() {
    this.loginButton = this.$refs.loginButton;
  },
};
</script>
<style lang="scss">
@use "@/style.scss" as tema;

body {
  background-color: #333333 !important;
}

.forgot-password {
  float: right;
  color: #ffffff;
  text-decoration: none;
}

.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#login-form {
  width: 400px;
}

.login-input {
  border-color: tema.$primary;
  margin-bottom: 10px;
}

#enviar {
  color: #ffffff;
  background-color: tema.$primary;
  font-weight: 700;
  border: none;
  width: 100%;
  margin-bottom: 50px;
  padding: 15px;
  border-radius: 5px;
}

.logo {
  display: block;
  width: 60%;
}

.lembrar-senha {
  display: none;
}

.desc {
  color: #ffffff;
  font-size: 16pt;
  text-align: center;
  margin-bottom: 20px;
}
</style>