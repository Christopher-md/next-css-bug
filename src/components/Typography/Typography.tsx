import React from "react";
import classNames from "classnames";

import type { ReactNode, DOMAttributes } from "react";

import styles from "./Typography.module.scss";

export type Props = {
  children?: ReactNode;
  tag: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
  /**
   * <pre>
   *    display-l: 60px
   *    display-m: 48px
   *    display-s: 36px
   *    body-l: 30px
   *    body-m: 24px
   *    body-s: 18px
   *    body-xs: 12px
   * </pre>
   */
  size:
    | "display-l"
    | "display-m"
    | "display-s"
    | "body-l"
    | "body-m"
    | "body-s"
    | "body-xs";
  color: "default" | "sun" | "gray" | "error";
  isTextual?: boolean;
  className?: string;
  dangerouslySetInnerHTML?: DOMAttributes<never>["dangerouslySetInnerHTML"];
};
const Typography: React.FC<Props> = ({
  children,
  tag: Tag,
  size,
  color,
  isTextual,
  className,
  dangerouslySetInnerHTML,
}) => (
  <Tag
    className={classNames(
      styles.typography,
      styles[size],
      styles[color],
      {
        [styles.textual]: isTextual,
      },
      className,
    )}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
  >
    {children}
  </Tag>
);
export default Typography;
