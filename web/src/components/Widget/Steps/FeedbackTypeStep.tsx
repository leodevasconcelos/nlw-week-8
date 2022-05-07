import { CloseButton } from "../CloseButton"
import { FeedbackType, feedbackTypes } from "../WidgetForm"

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6 flex justify-center font-medium gap-2">
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
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="gap-2 bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center border-2 border-zinc-800 hover:border-brand-500 focus:outline-none focus-forms"
            >
              <img src={value.icon.src} alt={value.icon.alt} />
              <span>{value.label}</span>
            </button>
          )
        }) }
      </div>
    </>
  )
}