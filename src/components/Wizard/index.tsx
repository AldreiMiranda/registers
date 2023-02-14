import {Customer, CustomerAddress} from "@/entities/Customer"
import {useCustomerStore} from "@/stores/customer"
import {StepsEnum, useStepStore} from "@/stores/step"
import {useWizardStore} from "@/stores/wizard"
import {useRouter} from "next/router"
import {useState} from "react"
import Address from "./Address"
import End from "./End"
import Income from "./Income"
import PersonalInfo from "./PersonalInfo"
import StepGuide from "./StepGuide"

interface Props {
  classes?: string
}

const Wizard = ({classes}: Props) => {
  const router = useRouter()
  const {prevStep, nextStep, reset, currentStep} = useStepStore()
  const {currentCustomer} = useWizardStore()
  const {addCustomer} = useCustomerStore()

  const submit = async () => {
    if (currentStep === StepsEnum.End) {
      addCustomer({
        ...currentCustomer,
        id: Math.random().toString(36).substr(2, 9),
      })
      router.push("/all-customers")
      // workaround to reset after router push
      await new Promise(resolve => setTimeout(resolve, 1000))
      reset()
      return
    }

    nextStep()
  }

  return (
    <div className={`w-full h-full flex flex-col ${classes}`}>
      <StepGuide classes="w-full" />

      <div className="px-10 w-full h-full flex flex-row justify-center items-center">
        {currentStep === StepsEnum.PersonalInfo && <PersonalInfo />}
        {currentStep === StepsEnum.Address && <Address />}
        {currentStep === StepsEnum.Income && <Income />}
        {currentStep === StepsEnum.End && <End />}
      </div>


      <div className="btn-group flex w-full px-10 mb-5">
        <button className="btn w-1/2" onClick={prevStep}>Voltar</button>
        <button className="btn btn-active w-1/2" onClick={submit}>
          {currentStep === StepsEnum.End ? 'Finalizar' : 'Próximo'}
        </button>
      </div>
    </div>
  )
}


export default Wizard
