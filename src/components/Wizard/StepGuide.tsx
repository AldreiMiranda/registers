import {StepsEnum, useStepStore} from "@/stores/step"
import {useCallback, useMemo} from "react"

interface Props {
  classes?: string
}

const StepGuide = ({classes}: Props) => {
  const {currentStep, checkStepEnabled} = useStepStore()

  return (
    <div className={classes}>
      <ul className="steps w-full">
        <li className={`step ${checkStepEnabled(StepsEnum.PersonalInfo, currentStep) ? 'step-primary' : ''}`}>Dados pessoais</li>
        <li className={`step ${checkStepEnabled(StepsEnum.Address, currentStep) ? 'step-primary' : ''}`}>Endereço</li>
        <li className={`step ${checkStepEnabled(StepsEnum.Income, currentStep) ? 'step-primary' : ''}`}>Renda</li>
        <li data-content="✓" className={`step ${checkStepEnabled(StepsEnum.End, currentStep) ? 'step-primary' : ''}`}>Conclusão</li>
      </ul>
    </div>
  )
}

export default StepGuide
