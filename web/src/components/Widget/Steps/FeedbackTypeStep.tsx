import { CloseButton } from "../CloseButton"
import { FeedbackType, feedbackTypes } from "../WidgetForm"

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-zinc-800 dark:text-zinc-100 text-xl leading-6 flex justify-center font-medium gap-2">
          Deixe seu feedback
        </span>
        <CloseButton/>
      </header>
      <div className="gap-2 flex py-8 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              type="button"
              key={key}
              title={value.descriprion}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center border-2 border-zinc-100 dark:border-zinc-800 hover:border-brand-500 focus:outline-none focus-forms"
            >
              <img src={value.icon.src} alt={value.icon.alt} />
              <span className="text-zinc-800 dark:text-zinc-100 font-medium">{value.label}</span>
            </button>
          )
        }) }
      </div>
    </>
  )
}