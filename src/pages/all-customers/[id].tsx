import Head from 'next/head'
import PageWrapper from "@/components/PageWrapper"
import Widget from "@/components/Widget"
import {Customer} from "@/entities/Customer"
import {useCustomerStore} from "@/stores/customer"
import {formatStandardDate} from "@/utils/date"
import {formatCPF, formatCurrencyBRL, formatPhone, formatZipCode} from "@/utils/number"
import {useRouter} from "next/router"
import {Ref, useEffect, useMemo, useRef, useState} from "react"

const CustomerDetail = () => {
  const {customers} = useCustomerStore()
  const [customer, setCustomer] = useState<Customer | undefined>()
  const router = useRouter()

  useEffect(() => {
    const id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id
    const c = customers.find(customer => customer.id === id)
    setCustomer(c)
  }, [router.query.id])

  const fullName = useMemo<string>(() => {
    return `${customer?.firstName} ${customer?.lastName}`
  }, [customer])

  const fullAddress = useMemo(() => {
    return `${customer?.address.street}, ${customer?.address.number} - ${customer?.address.neighborhood} (${formatZipCode(customer?.address.zipCode ?? '')})`
  }, [customer])

  if (!customer) {
    return <h1>Cliente não encontrado</h1>
  }

  return (
    <PageWrapper>
      <Head>
        <title>{fullName} - Detalhes do cliente</title>
      </Head>

      <Widget title="😌 Informações básicas">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[33%]">
            <p className="font-medium text-body">Nome</p>
            <p className="font-bold text-lg">{fullName}</p>
          </div>
          <div className="w-full md:w-[33%] mt-3 md:mt-0">
            <p className="font-medium text-body">Email</p>
            <p className="font-bold text-lg">{customer.email}</p>
          </div>
          <div className="w-full md:w-[33%] mt-3 md:mt-0">
            <p className="font-medium text-body">CPF</p>
            <p className="font-bold text-lg">{formatCPF(customer.cpf)}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="w-full md:w-[33%]">
            <p className="font-medium text-body">Telefone</p>
            <p className="font-bold text-lg">{formatPhone(customer.phone)}</p>
          </div>
          <div className="w-full md:w-[33%] mt-3 md:mt-0">
            <p className="font-medium text-body">Data de nascimento</p>
            <p className="font-bold text-lg">{formatStandardDate(customer.birthDate)}</p>
          </div>
          <div className="w-full md:w-[33%] mt-3 md:mt-0">
            <p className="font-medium text-body">Renda mensal</p>
            <p className="font-bold text-lg">{formatCurrencyBRL(customer.monthlyIncome)}</p>
          </div>
        </div>
      </Widget>

      <Widget title="🏡 Endereço" classes="mt-10">
        <p className="font-medium text-lg">{fullAddress}</p>
      </Widget>
    </PageWrapper>
  )
}

export default CustomerDetail
