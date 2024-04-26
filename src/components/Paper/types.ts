import type React from "react";

type Paddings = "xl" | "l" | "m" | "s" | "none";

type Elements = "div" | "article" | "section" | "aside";

type Props = {
  as?: Elements;
  full?: boolean
  /**
   * Sizes in px:
   * <pre>
   *     xl: 60px
   *     l: 32px
   *     m: 24px
   *     s: 18px
   *     none: 0
   * </pre>
   */
  padding?: Paddings;
  className?: string;
  children: React.ReactNode;
};

export default Props;
