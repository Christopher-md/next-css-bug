import React from "react";

import Field from "@/components/Field";

function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/** If you comment out this line, the duplicates will disappear */}
      <Field type="text" placeholder="Field from layout.tsx" />
      {children}
    </>
  );
}

export default Layout;
