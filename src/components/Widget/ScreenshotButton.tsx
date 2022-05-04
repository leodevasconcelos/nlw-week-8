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
      <button type="button" className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 hover:transition-colors"
      onClick={() => onScreenshotTaken(null)}
      style={{
        backgroundImage: `url(${screenshot})`,
      }}>
        <Trash/>
      </button>
    )
  }

  return (
    <button type="button" 
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 focus-forms rounded-[4px] border-trannsparent hover:bg-zinc-700 transition-colors text-zinc-100">
      { isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6"/> }
    </button>
  )
}