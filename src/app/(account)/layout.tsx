import React from "react";
import type { Metadata } from "next";

import MainLayout from "@/src/layouts/MainLayout/MainLayout";

export const metadata: Metadata = {
  title: "Account",
  openGraph: {
    type: "profile",
  },
};

function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}

export default Layout;
