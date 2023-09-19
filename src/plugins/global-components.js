import ButtonEditar from "@/components/button/ButtonEditar.vue";
import ButtonDeletar from "@/components/button/ButtonDeletar.vue";
import BaseButton from "@/components/base/BaseButton.vue";
export function registerGlobalComponents(app) {
  app.component("btn-editar", ButtonEditar);
  app.component("btn-deletar", ButtonDeletar);
  app.component("base-button", BaseButton);
}
