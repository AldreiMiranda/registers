import {Customer} from "@/entities/Customer";

export const customers: Customer[] = [
  {
    id: "123",
    firstName: 'John',
    lastName: 'Doe',
    email: 'teste@test.com',
    phone: '11999999999',
    birthDate: new Date(),
    cpf: '12345678901',
    monthlyIncome: 2000,
    address: {
      street: 'Rua teste',
      number: '123',
      neighborhood: 'Bairro teste',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '12345678'
    }
  },
  {
    id: "321",
    firstName: 'John',
    lastName: 'Doe',
    email: 'teste@test.com',
    phone: '11999999999',
    birthDate: new Date(),
    cpf: '12345678901',
    monthlyIncome: 2000,
    address: {
      street: 'Rua teste',
      number: '123',
      neighborhood: 'Bairro teste',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '12345678'
    }
  },
  {
    id: "231",
    firstName: 'John',
    lastName: 'Doe',
    email: 'teste@test.com',
    phone: '11999999999',
    birthDate: new Date(),
    cpf: '12345678901',
    monthlyIncome: 2000,
    address: {
      street: 'Rua teste',
      number: '123',
      neighborhood: 'Bairro teste',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '12345678'
    }
  }
]
