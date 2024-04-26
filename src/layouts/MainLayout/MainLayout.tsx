import Paper from "@/src/components/Paper";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function MainLayout({ className, children }: Props) {
  return (
    <Paper>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Paper>
  );
}
