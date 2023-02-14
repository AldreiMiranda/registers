import {Customer} from '@/entities/Customer'
import {customers} from '@/mock/customers'
import {create, SetState} from 'zustand'

interface State {
  customers: Customer[]
  addCustomer(customer: Customer): void
}

export const useCustomerStore = create<State>((set: SetState<State>) => {
  function addCustomer(customer: Customer) {
    set(state => ({
      customers: [...state.customers, customer]
    }))
  }

  return {
    customers: customers,
    addCustomer,
  }
})
