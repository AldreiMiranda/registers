import {Customer} from "@/entities/Customer"
import {useWizardStore} from "@/stores/wizard"
import {useState} from "react"


const PersonalInfo = () => {
  const {setPersonalInfo} = useWizardStore()

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex flex-col w-full md:w-[50%]">
        <label className="label flex flex-col items-start">
          Nome
          <input
            onChange={update}
            type="text"
            name="firstName"
            placeholder="Seu nome"
            className="input input-bordered w-full" />
        </label>
        <label className="label flex flex-col items-start">
          Sobrenome
          <input
            onChange={update}
            name="lastName"
            type="text" placeholder="Seu sobrenome" className="input input-bordered w-full" />
        </label>
      </div>
      <div className="flex flex-col w-full md:w-[50%]">
        <label className="label flex flex-col items-start w-full">
          Email
          <input

            onChange={update}
            name="email"
            type="text" placeholder="Seu email" className="w-full input input-bordered w-full" />
        </label>
        <label className="label flex flex-col items-start w-full">
          Telefone
          <input
            onChange={update}
            name="phone"
            maxLength={11}
            type="tel" placeholder="Seu telefone" className="w-full input input-bordered w-full" />
        </label>
      </div>
    </div>
  )
}

export default PersonalInfo
