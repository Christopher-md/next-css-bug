import React from "react";

import MainLayout from "@/layouts/MainLayout/MainLayout";
import SomeComponent from "@/components/SomeComponent";

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
