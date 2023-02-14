import {Customer} from '@/entities/Customer'
import {customers} from '@/mock/customers'
import {create, SetState} from 'zustand'

export enum StepsEnum {
  PersonalInfo = 'PersonalInfo',
  Address = 'Address',
  Income = 'Income',
  End = 'End',
}
interface State {
  currentStep: StepsEnum
  prevStep: () => void
  nextStep: () => void
  reset: () => void
  checkStepEnabled: (step: StepsEnum, currentStep: StepsEnum) => boolean
}

const nextStateMachine: Record<StepsEnum, StepsEnum> = {
  [StepsEnum.PersonalInfo]: StepsEnum.Address,
  [StepsEnum.Address]: StepsEnum.Income,
  [StepsEnum.Income]: StepsEnum.End,
  [StepsEnum.End]: StepsEnum.End,
}

const prevStateMachine: Record<StepsEnum, StepsEnum> = {
  [StepsEnum.End]: StepsEnum.Income,
  [StepsEnum.Income]: StepsEnum.Address,
  [StepsEnum.Address]: StepsEnum.PersonalInfo,
  [StepsEnum.PersonalInfo]: StepsEnum.PersonalInfo,
}

export const useStepStore = create<State>((set: SetState<State>) => {

  function prevStep() {
    set(state => ({
      currentStep: prevStateMachine[state.currentStep]
    }))
  }

  function nextStep() {
    set(state => ({
      currentStep: nextStateMachine[state.currentStep]
    }))
  }

  function checkStepEnabled(step: StepsEnum, currentStep: StepsEnum) {
    let enabled = false

    // @TODO: refactor this for better step handling
    // this logic handles step state machine
    if (currentStep === StepsEnum.End) {
      enabled = true
    }

    if (currentStep === StepsEnum.Income) {
      if (step === StepsEnum.Income) {
        enabled = true
      }
      if (step === StepsEnum.Address) {
        enabled = true
      }
      if (step === StepsEnum.PersonalInfo) {
        enabled = true
      }
    }

    if (currentStep === StepsEnum.Address) {
      if (step === StepsEnum.Address) {
        enabled = true
      }
      if (step === StepsEnum.PersonalInfo) {
        enabled = true
      }
    }

    if (currentStep === StepsEnum.PersonalInfo) {
      if (step === StepsEnum.PersonalInfo) {
        enabled = true
      }
    }

    return enabled
  }

  function reset() {
    set(state => ({
      currentStep: StepsEnum.PersonalInfo
    }))
  }

  return {
    currentStep: StepsEnum.PersonalInfo,
    prevStep,
    nextStep,
    checkStepEnabled,
    reset
  }
})
