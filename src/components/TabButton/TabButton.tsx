import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./TabButton.module.css";

interface ITabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSelected: boolean;
}

const TabButton = ({ isSelected, children, ...rest }: ITabButtonProps) => {
  return (
    <button
      className={`${styles.button} ${
        isSelected ? styles.selected : styles.notSelected
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TabButton;
