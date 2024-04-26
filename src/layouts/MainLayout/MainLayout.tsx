import React from "react";

import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
