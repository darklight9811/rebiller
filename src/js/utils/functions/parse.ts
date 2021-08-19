export const parseMoney = (value: string | number) => Number(parseFloat(`${value}`.replace(/\./g, "").replace(/,/g, "."))).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })