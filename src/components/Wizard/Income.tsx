import {useWizardStore} from "@/stores/wizard"

const Income = () => {
  const {setIncome} = useWizardStore()

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncome({
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex flex-col w-full md:w-[50%]">
        <label className="label flex flex-col items-start">
          Data de nascimento
          <input
            onChange={update}
            name="birthDate"
            type="date" className="input input-bordered w-full" />
        </label>
        <label className="label flex flex-col items-start">
          CPF
          <input
            onChange={update}
            name="cpf"
            maxLength={11}
            type="number" placeholder="Seu CPF" className="input input-bordered w-full" />
        </label>
      </div>
      <div className="flex flex-col w-full md:w-[50%]">
        <label className="label flex flex-col items-start w-full">
          Renda mensal
          <input
            onChange={update}
            name="monthlyIncome"
            type="text" placeholder="Sua renda" className="w-full input input-bordered w-full" />
        </label>
      </div>
    </div>
  )
}

export default Income 
