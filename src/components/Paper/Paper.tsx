import React from "react";
import classNames from "classnames";
// Types
import type { FC } from "react";
import type Props from "./types";
// Styles
import styles from "./Paper.module.scss";

const Paper: FC<Props> = ({
  children,
  className,
  full = false,
  padding = "none",
  as: Component = "div",
}) => (
  <Component
    className={classNames(
      styles.paper,
      {
        [styles[padding]]: padding,
        [styles.full]: full,
      },
      className,
    )}
  >
    {children}
  </Component>
);

export default Paper;
