import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "./Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot, 
  onScreenshotTaken
}: ScreenshotButtonProps ) {
  const [isTakingScreenshot, setisTakingScreenshot] = useState(false);
  async function handleTakeScreenshot() {
    setisTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const dataUrl = canvas.toDataURL("image/png");

    onScreenshotTaken(dataUrl);
    setisTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button title="Remover captura de tela" type="button" className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 hover:transition-colors"
      onClick={() => onScreenshotTaken(null)}
      style={{
        backgroundImage: `url(${screenshot})`,
      }}>
        <Trash className="text-main-500 w-4 h-4" weight="bold"/>
      </button>
    )
  }

  return (
    <button type="button" 
      onClick={handleTakeScreenshot}
      title="Fazer captura da tela"
      className="p-2 bg-zinc-100 dark:bg-zinc-800 focus-forms rounded-[4px] border-trannsparent hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-800 dark:text-zinc-100">
      { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6"/> }
    </button>
  )
}