<template>
  <v-navigation-drawer expand-on-hover color="white" rail>
    <v-list>
      <v-list-item
        prepend-avatar="src/assets/images/user.png"
        title="Admin"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        to="/person"
        prepend-icon="mdi-account"
        title="Pessoas"
        value="person"
      /> 
    </v-list>

    <template v-slot:append>
      <v-list-item class="ma-1 rad rounded-sm" @click="logout">
        <template v-slot:prepend>
          <v-icon icon="mdi-logout"></v-icon>
        </template>
        <v-list-item-title>
          <span>Sair</span>
        </v-list-item-title>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "CoreDrawer",

  data: () => ({}),

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
      this.$toasts.base("Logout!");
    },
  },
};
</script>
