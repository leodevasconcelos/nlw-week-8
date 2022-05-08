import iconBug from "../../assets/images/problema.svg";
import iconIdea from "../../assets/images/ideia.svg";
import iconOther from "../../assets/images/outro.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { Footer } from "./Footer";

export const feedbackTypes = {
  BUG: {
    label: "Problema",
    descriprion: "Envie um problema que está acontecendo",
    icon: {
      src: iconBug,
      alt: "Icone de um problema",
    }
  },
  IDEA: {
    label: "Ideia",
    descriprion: "Envie uma ideia que pode nos ajudar",
    icon: {
      src: iconIdea,
      alt: "Icone de ideia",
    }
  },
  OTHER: {
    label: "Outro",
    descriprion: "Envie alguma outra coisa que você queira",
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
      <Footer/>
    </>
  )
  
}