import "@/views/pages/Person/PersonAdd.vue" 
import "@/views/pages/Person/PersonList.vue" 
import "@/views/pages/Person/PersonEdit.vue" 

export default [
  {
    name: "Pessoa",
    path: "/person",
    component: () => import("@/views/pages/Person/PersonList.vue"),
    meta: { needAuth: true },
  }, 
  {
    name: "Pessoa Cadastrar",
    path: "/person/register",
    component: () => import("@/views/pages/Person/PersonAdd.vue"),
    meta: { needAuth: true },
    },
    {
    name: "Pessoa Editar",
    path: "/person/:id/edit",
    component: () => import("@/views/pages/Person/PersonEdit.vue"),
    meta: { needAuth: true },
    },
]; 
