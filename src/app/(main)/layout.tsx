import React from "react";

import SomeComponent from "@/components/SomeComponent";
import MainLayout from "@/layouts/MainLayout/MainLayout";

function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      {/** If you comment out this line, the duplicates will disappear */}
      <SomeComponent />
      {children}
    </MainLayout>
  );
}

export default Layout;
