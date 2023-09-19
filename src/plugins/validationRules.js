export const geralRule = [
  (v) => {
    if (v && v.length >= 3) return true;
    return "Preencha o campo com pelo menos 3 digito";
  },
];

export const selectorRule = [(v) => !!v || "Escolha um item"];
