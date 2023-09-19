import { createApp } from "vue";
import "@/style.scss";
import App from "@/App.vue";
import "vuetify/styles";
import { router } from "@/router/Index.js";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import Toast from "@/components/core/CoreToast.vue";
import VueMyToasts from "vue-my-toasts";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import VueAwesomePaginate from "vue-awesome-paginate";
import VueTheMask from "vue-the-mask";
import { registerGlobalComponents } from "@/plugins/global-components";
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

registerGlobalComponents(app);

app.use(router);
app.use(vuetify);
app.use(VueAwesomePaginate);
app.use(useValidate);
app.use(required);
app.use(VueTheMask);
app.use(VueMyToasts, {
  component: Toast,
  options: {
    width: "20%",
    position: "top-right",
    padding: "1rem",
  },
});

app.mount("#app");
