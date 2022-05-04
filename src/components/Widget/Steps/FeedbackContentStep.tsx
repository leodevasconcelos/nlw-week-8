import { ArrowLeft} from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackTypeRestarted: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({ 
  feedbackType, 
  onFeedbackTypeRestarted,
  onFeedbackSent,
}: FeedbackContentStepProps) {

  const [screenshot, setScreenshot] = useState<string | null>(null);

  const [comment, setComment] = useState("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitComment(evt: FormEvent) {
    evt.preventDefault();
    console.log({
      screenshot,
      comment,
    })
    onFeedbackSent();
  }
  return (
    <>
      <header>
        <button type="button" className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100">
          <ArrowLeft onClick={ onFeedbackTypeRestarted } className="w-4 h-4" weight="bold" />
        </button>
        <span className="text-xl leading-6 flex justify-center font-medium gap-2">
          <img src={feedbackTypeInfo.icon.src} alt={feedbackTypeInfo.icon.alt} className="w-6 h-6" />
          {feedbackTypeInfo.label}
        </span>
        <CloseButton/>
      </header>
      <form onSubmit={handleSubmitComment} className="my-4 w-full">
        <textarea
          onChange={(e) => setComment(e.target.value)}
          placeholder="Conte o que aconteceu"
          className="min-w-[304px] max-w-full min-h-[112px] bg-zinc-900 py-2 px-3 text-sm text-zinc-100 border-[1px] border-zinc-600 placeholder-zinc-400 rounded-[4px] focus:ring-brand-500 focus:ring-1 focus:outline-none focus:border-brand-500 scrollbar scrollbar-thumb-brand-500 scrollbar-track-transparent scrollbar-thin"
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton 
            screenshot={screenshot}
            onScreenshotTaken={setScreenshot}
          />
          <button
            disabled={comment.length === 0}
            type="submit" 
            className="bg-brand-500 p-2 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm text-zinc-100 hover:brightness-90 focus-forms transition-colors disabled:brightness-75">
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}