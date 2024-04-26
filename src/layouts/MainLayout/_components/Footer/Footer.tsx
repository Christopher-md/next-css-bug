"use client";

import React, {useEffect} from "react";

import SomeModal from "@/components/SomeModal";
import {useModalContext} from "@/contexts/ModalContext";

export default function Footer() {
  const {openModal} = useModalContext();

  useEffect(() => {
    openModal({
      key: "SomeKey",
      Modal: SomeModal,
      params: {}
    })
  }, [openModal]);

  return (
    <footer>
      Footer
    </footer>
  )
}
