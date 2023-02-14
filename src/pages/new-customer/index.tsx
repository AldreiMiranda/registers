import Head from 'next/head'
import PageWrapper from "@/components/PageWrapper"
import StepGuide from "@/components/Wizard/StepGuide"
import {StepsEnum, useStepStore} from "@/stores/step"
import Wizard from '@/components/Wizard'

const NewCustomer = () => {
  const {prevStep, nextStep, currentStep} = useStepStore()

  return (
    <PageWrapper title="🤩 Novo cliente" subTitle="Cadastre um novo cliente.">
      <Head>
        <title>Novo cliente</title>
      </Head>
      <div className="card w-full md:w-[700px] bg-gray-100 self-center">
        <Wizard classes="mt-10" />
      </div>
    </PageWrapper>
  )
}

export default NewCustomer
