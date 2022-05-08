import { ArrowLeft} from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../../../lib/api";
import { CloseButton } from "../CloseButton";
import { Loading } from "../Loading";
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

  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitComment(evt: FormEvent) {
    evt.preventDefault();
    
    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }
  return (
    <>
      <header>
        <button title="Volta para a tela anterior" type="button" className="top-5 left-5 navgation-btn">
          <ArrowLeft onClick={ onFeedbackTypeRestarted } className="w-4 h-4" weight="bold" />
        </button>
        <span className="text-zinc-900 dark:text-zinc-100 text-xl leading-6 flex justify-center font-medium gap-2">
          <img src={feedbackTypeInfo.icon.src} alt={feedbackTypeInfo.icon.alt} className="w-6 h-6" />
          {feedbackTypeInfo.label}
        </span>
        <CloseButton/>
      </header>
      <form onSubmit={handleSubmitComment} className="my-4 w-full flex flex-col">
        <textarea
          onChange={(e) => setComment(e.target.value)}
          title="Conte o que aconteceu"
          placeholder="Conte o que aconteceu"
          className="min-w-[304px] max-w-full min-h-[112px] bg-transparent py-2 px-3 text-sm text-zinc-800 dark:text-zinc-400 border-[1px] border-zinc-300 dark:border-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-400 rounded-[4px] focus:ring-brand-500 focus:ring-1 focus:outline-none focus:border-brand-500 scrollbar scrollbar-thumb-brand-500 scrollbar-track-transparent scrollbar-thin"
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTaken={setScreenshot}
          />
          <button
            disabled={comment.length === 0 || isSendingFeedback}
            type="submit"
            title={comment.length === 0 ? 'Você precisa contar o que aconteceu antes para enviar sua mensagem' : 'Envie seu Feedback'} 
            className="bg-brand-500 p-2 rounded-[4px] border-transparent flex-1 flex justify-center items-center text-sm font-medium text-white hover:brightness-90 focus-forms transition-colors disabled:brightness-75">
            {isSendingFeedback ? <Loading /> : 'Enviar feedback' }
          </button>
        </footer>
      </form>
    </>
  )
}