"use client";

import React, {useEffect} from "react";

import SomeModal from "@/components/SomeModal";
import {useModalContext} from "@/contexts/ModalContext";

export default function Header() {
  const {openModal} = useModalContext();

  const onHandleOpenModal = () => {
    openModal({
      key: "SomeUniqueKey",
      Modal: SomeModal,
      params: {}
    });
  }

  return (
    <header>
      <button onClick={onHandleOpenModal}>Button</button>
    </header>
  )
}
