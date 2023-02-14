import {Customer, CustomerAddress} from '@/entities/Customer'
import {customers} from '@/mock/customers'
import {create, SetState} from 'zustand'

type PersonalInfo = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

type Income = {
  birthDate?: Date
  cpf?: string
  monthlyIncome?: number
}

type Address = {
  zipCode?: string;
  street?: string;
  number?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}

interface State {
  currentCustomer: Customer
  setPersonalInfo: (customer: PersonalInfo) => void
  setAddress: (address: Address) => void
  setIncome: (income: Income) => void
}

export const useWizardStore = create<State>((set: SetState<State>) => {
  function setPersonalInfo(customer: PersonalInfo) {
    set(state => ({
      currentCustomer: {
        ...state.currentCustomer,
        ...customer
      }
    }))
  }

  function setAddress(address: Address) {
    set(state => ({
      currentCustomer: {
        ...state.currentCustomer,
        address: {
          ...state.currentCustomer.address,
          ...address
        }
      }
    }))
  }

  function setIncome(income: Income) {
    set(state => ({
      currentCustomer: {
        ...state.currentCustomer,
        ...income
      }
    }))
  }


  return {
    currentCustomer: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthDate: new Date(),
      cpf: '',
      monthlyIncome: 0,
      address: {
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        zipCode: '',
      }
    },
    setAddress,
    setIncome,
    setPersonalInfo
  }
})
