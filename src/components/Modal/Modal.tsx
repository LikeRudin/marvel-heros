import type { ReactNode, HtmlHTMLAttributes, MouseEventHandler } from "react";

import styles from "./Modal.module.css";

interface IModalProps extends HtmlHTMLAttributes<HTMLDivElement> {
  show: boolean;
  children: ReactNode;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
}

const Modal = ({ show, children, ...rest }: IModalProps) => {
  return (
    <div
      className={`${styles.wrapper} ${
        show ? styles.modalVisible : styles.modalHidden
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Modal;
