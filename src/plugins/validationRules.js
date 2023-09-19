export const geralRule = [
  (v) => {
    if (v && v.length >= 1) return true;
    return "Preencha o campo";
  },
];

export const selectorRule = [(v) => !!v || "Escolha um item"];
