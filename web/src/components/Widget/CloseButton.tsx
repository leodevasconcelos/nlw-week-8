import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button className="top-5 right-5 navgation-btn" title="Fechar">
        <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  );
}