import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="fixed bottom-4 right-4 z-20 flex flex-col items-end">
      <Popover.Panel className="bg-zinc-900 mb-2 p-4 rounded-2xl text-gray-400 text-sm w-[calc(100vw-2rem)] md:w-auto">
        <WidgetForm></WidgetForm>
      </Popover.Panel>
      <div className="flex justify-end">
        <Popover.Button className="btn-brand group self-end">
          <ChatTeardropDots className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="pl-2">
              Feedback
            </span>
          </span>
        </Popover.Button>
      </div>
    </Popover>
  );
}