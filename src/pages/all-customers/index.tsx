import Head from 'next/head'
import {Customer} from "@/entities/Customer"
import CustomersBasicInfoTable from '@/components/CustomersBasicInfoTable'
import {useCustomerStore} from "@/stores/customer"
import {useRouter} from "next/router"
import PageWrapper from "@/components/PageWrapper"

const AllCustomers = () => {
  const {customers} = useCustomerStore()
  const router = useRouter()

  const goDetail = ({id}: Customer) => {
    router.push(`/all-customers/${id}`)
  }

  return (
    <PageWrapper title="🥸 Lista de clientes" subTitle="Todos os clientes cadastrados" >
      <Head>
        <title>Lista de clientes</title>
      </Head>
      <CustomersBasicInfoTable
        data={customers}
        onItemClick={goDetail} />
    </PageWrapper >
  )
}

export default AllCustomers
