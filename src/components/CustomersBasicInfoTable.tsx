import {Customer} from "@/entities/Customer"
import {formatStandardDate} from "@/utils/date"
import {formatCPF, formatPhone} from "@/utils/number"

interface Props {
  data: Customer[]
  classes?: string,
  onItemClick?: (customer: Customer) => void
}

const CustomerBasicInfoTable = ({classes, data, onItemClick}: Props) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className={`table ${classes} w-full`}>
        <thead>
          <tr>
            <th></th>
            <th>E-mail</th>
            <th>Name</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>Data de nascimento</th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer, index) => {
            const currentId = index + 1
            const isEven = index % 2 === 0

            return (
              <tr
                onClick={() => onItemClick?.(customer)}
                className={isEven ? 'active cursor-pointer' : 'cursor-pointer'}
                key={customer.id}>
                <th>{currentId}</th>
                <td>{customer.email}</td>
                <td>{`${customer.firstName} ${customer.lastName}`}</td>
                <td>{formatPhone(customer.phone)}</td>
                <td>{formatCPF(customer.cpf)}</td>
                <td>{formatStandardDate(customer.birthDate)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default CustomerBasicInfoTable;
