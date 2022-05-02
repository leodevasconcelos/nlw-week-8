import { ChatTeardropDots } from "phosphor-react"; "phosphor-react";
import { Popover } from "@headlessui/react";

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4">
      <Popover.Panel>Olá, Rocketseat!</Popover.Panel>
      <Popover.Button className="btn-brand group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">
            Feedback
          </span>
        </span>
      </Popover.Button>
    </Popover>
  );
}