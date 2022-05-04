import iconBug from "../../assets/images/problema.svg";
import iconIdea from "../../assets/images/ideia.svg";
import iconOther from "../../assets/images/outro.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    label: "Problema",
    icon: {
      src: iconBug,
      alt: "Icone de um problema",
    }
  },
  IDEA: {
    label: "Ideia",
    icon: {
      src: iconIdea,
      alt: "Icone de ideia",
    }
  },
  OTHER: {
    label: "Outro",
    icon: {
      src: iconOther,
      alt: "Icone de outro",
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <>
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackTypeRestarted={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep 
              feedbackType={feedbackType} 
              onFeedbackTypeRestarted={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      ) }
      <footer className="flex justify-center text-xs font-medium">
        <p>Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/leodevasconcelos">Rocketseat</a></p>
      </footer>
    </>
  )
  
}