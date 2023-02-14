export const formatCPF = (cpf: string) => {
  if (!cpf) return 'invalid_cpf';
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export const formatPhone = (phone: string) => {
  if (!phone) return 'invalid_phone';
  return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $4-$4");
}

export const formatZipCode = (zipCode: string) => {
  if (!zipCode) return 'invalid_zip_code';
  return zipCode.replace(/(\d{5})(\d{3})/, "$1-$2");
}

export const formatCurrencyBRL = (value: number) => {
  if (!value) return 'invalid_value';
  if (Number.isNaN(value)) return 0;
  return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value);
}
