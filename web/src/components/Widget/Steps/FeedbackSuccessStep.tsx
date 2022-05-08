import { CloseButton } from "../CloseButton";
import successCheck from "../../../assets/images/enviado.svg";

interface FeedbackTypeStepProps {
  onFeedbackTypeRestarted: () => void;
}

export function FeedbackSuccessStep( { onFeedbackTypeRestarted }: FeedbackTypeStepProps ) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successCheck} alt="Sucesso"/>
        <span className="text-center text-zinc-800 text-xl mt-2 font-medium">Agradecemos o feedback!</span>
        <button
          onClick={onFeedbackTypeRestarted}
          className="py-2 px-6 mt-6 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-md border-transparent text-sm font-medium leading-6 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors focus-forms">
          Quero enviar outro
        </button>
      </div>
    </>
  )
}