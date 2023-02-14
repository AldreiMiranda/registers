import {useStepStore} from "@/stores/step"
import {CheckCircleIcon} from "@heroicons/react/24/solid"
import Link from "next/link"
import {useRouter} from "next/router"


const End = () => {
  const {reset} = useStepStore()
  const router = useRouter()

  const resetStepAndGoListing = async () => {
    router.push("/all-customers")

    // workaround to reset after router push
    await new Promise(resolve => setTimeout(resolve, 1000))
    reset()
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col w-full  justify-center items-center">
        <span className="text-6xl">🎉</span>
        <h3 className="font-semibold text-xl text-grey-600">Quase lá!</h3>
        <p className="font-medium text-lg text-grey-600">Finalize o cadastro no botão abaixo!</p>

        <button
          onClick={() => resetStepAndGoListing()}
          className="btn btn-ghost text-gray-600 mt-5 btn-sm">
          Voltar a listagem
        </button>
      </div>
    </div>
  )
}

export default End
