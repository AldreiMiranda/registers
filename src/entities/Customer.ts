export interface CustomerAddress {
  zipCode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: CustomerAddress
  birthDate: Date;
  monthlyIncome: number;
  cpf: string;
}
