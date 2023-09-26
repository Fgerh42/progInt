import "@/views/pages/FinancialTitle/FinancialAdd.vue" 
import "@/views/pages/FinancialTitle/FinancialList.vue" 
import "@/views/pages/FinancialTitle/FinancialEdit.vue" 

export default [
  {
    name: "Financeiro",
    path: "/financial",
    component: () => import("@/views/pages/FinancialTitle/FinancialList.vue"),
    meta: { needAuth: true },
  }, 
  {
    name: "Financeiro Cadastrar",
    path: "/financial/register",
    component: () => import("@/views/pages/FinancialTitle/FinancialAdd.vue" ),
    meta: { needAuth: true },
    },
    {
    name: "Financeiro Editar",
    path: "/financial/:id/edit",
    component: () => import("@/views/pages/FinancialTitle/FinancialEdit.vue"),
    meta: { needAuth: true },
    },
]; 
