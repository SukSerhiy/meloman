/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";

export interface IUseSelectConfig {
  onClose?: () => void;
}

const useSelect = <
  TriggerElement extends HTMLElement = any,
  DropElement extends HTMLElement = any
>(
  config: IUseSelectConfig = {}
) => {
  const { onClose } = config;

  const [open, setOpen] = useState(false);
  const triggerRef = useRef<TriggerElement>(null);
  const dropRef = useRef<DropElement>(null);

  const toggleOpen = () => setOpen((state) => !state);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const composed = e.composedPath();
      if (
        (triggerRef.current && composed.includes(triggerRef.current)) ||
        (dropRef.current && composed.includes(dropRef.current))
      ) {
        return;
      }
      setOpen(false);
      onClose?.();
    };

    if (open) {
      window.addEventListener("click", handleClick, true);
    }
    return () => window.removeEventListener("click", handleClick, true);
  }, [open, onClose]);

  return {
    open,
    setOpen,
    toggleOpen,
    triggerRef,
    dropRef,
  };
};

export default useSelect;
