import {useWizardStore} from "@/stores/wizard"

const Address = () => {
  const {setAddress} = useWizardStore()

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex flex-col w-full md:w-[50%]">
        <label className="label flex flex-col items-start">
          CEP
          <input
            onChange={update}
            name="zipCode"
            maxLength={8}
            type="number" placeholder="Seu CEP" className="input input-bordered w-full" />
        </label>
        <label className="label flex flex-col items-start">
          Rua
          <input
            onChange={update}
            name="street"
            type="text" placeholder="Sua rua" className="input input-bordered w-full" />
        </label>
        <label className="label flex flex-col items-start">
          Número
          <input
            onChange={update}
            name="number"
            type="number" placeholder="Sua rua" className="input input-bordered w-full" />
        </label>
      </div>
      <div className="flex flex-col w-full md:w-[50%]">
        <label className="label flex flex-col items-start w-full">
          Bairro
          <input
            onChange={update}
            name="neighborhood"
            type="text" placeholder="Seu bairro" className="w-full input input-bordered w-full" />
        </label>
        <label className="label flex flex-col items-start w-full">
          Cidade
          <input
            onChange={update}
            name="city"
            type="text" placeholder="Sua cidade" className="w-full input input-bordered w-full" />
        </label>
        <label className="label flex flex-col items-start w-full">
          Estado
          <input
            onChange={update}
            name="state"
            type="text" placeholder="Seu estado" className="w-full input input-bordered w-full" />
        </label>
      </div>
    </div>
  )
}

export default Address 
