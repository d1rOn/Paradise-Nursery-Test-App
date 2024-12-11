import { FC, ReactNode, useState } from "react";
import clsx from "clsx";

import { Dialog, Transition } from "@headlessui/react";

import Box from "./Box";

import { TypeSetState } from "~/types/setState.type";

import s from "./Popup.module.scss";


interface PopupProps {
  className?: string;
  children: ReactNode;
  button?: ReactNode;
  forceOpen?: boolean;
  setForceOpen?: TypeSetState<boolean>;
}

const Popup: FC<PopupProps> = ({
  className,
  children,
  button,
  forceOpen,
  setForceOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isForceOpenIsUndefine = typeof forceOpen === "undefined";
  const isForceOpen = !isForceOpenIsUndefine && setForceOpen;

  const handleOpen = () => {
    if (isForceOpen) {
      setForceOpen(true);
    } else {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    if (isForceOpen) {
      setForceOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  const show = isForceOpen ? forceOpen : isOpen;

  return (
    <>
      {button && <div className={clsx(className, s.popup)}>
        <button className={s.popup__button} type="button" onClick={handleOpen}>
          {button}
        </button>
      </div>}
      <Transition appear show={show}>
        <Dialog
          className={clsx(className, s.popup)}
          onClose={handleClose}
        >
          <div className={s.popup__body}>
            <Transition.Child
              className={s.popup__bg}
              enter={s.popup__enter}
              enterFrom={s.popup__enterFrom}
              enterTo={s.popup__enterTo}
              leave={s.popup__leave}
              leaveFrom={s.popup__leaveFrom}
              leaveTo={s.popup__leaveTo}
            />
            <Transition.Child
              className={s.popup__content}
              enter={clsx(s.popup__enter, s.popup__enter_content)}
              enterFrom={clsx(s.popup__enterFrom, s.popup__enterFrom_content)}
              enterTo={clsx(s.popup__enterTo, s.popup__enterTo_content)}
              leave={clsx(s.popup__leave, s.popup__Leave_content)}
              leaveFrom={clsx(s.popup__leaveFrom, s.popup__leaveFrom_content)}
              leaveTo={clsx(s.popup__leaveTo, s.popup__leaveTo_content)}
            >
              <Box onClose={handleClose}>{children}</Box>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Popup;
