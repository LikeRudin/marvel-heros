import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ISquareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

import styles from "./SquareButton.module.css";

const SquareButton = ({ children, className, ...rest }: ISquareButtonProps) => (
  <button className={`${styles.squareButton} ${className}`} {...rest}>
    {children}
  </button>
);

export default SquareButton;
