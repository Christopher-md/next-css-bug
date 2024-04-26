"use client";

import {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";

import type { ElementType, FC } from "react";
import type { State, ModalContextValue, ModalProviderProps, ModalProps } from "./types";
import {createPortal} from "react-dom";

const Context = createContext<ModalContextValue | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(Context);

  if (context) return context;

  throw new Error("Context must be used within Provider!");
};

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<State<ElementType>>(new Map());

  useEffect(() => {
    if (modals.size > 0) {
      document.body.classList.add("mode-modal");
    } else {
      document.body.classList.remove("mode-modal");
    }
  }, [modals]);

  const openModal = useCallback(<T extends ElementType>(data: ModalProps<T>) => {
    setModals((prevState) => {
      const value = new Map(prevState);

      value.set(data.key, data);

      return value;
    });
  }, []);

  const closeModal = useCallback((key: string) => {
    setModals((prevStack) => {
      const value = new Map(prevStack);

      if (value.has(key)) value.delete(key);

      return value;
    });
  }, []);

  return (
    <Context.Provider value={{ openModal, closeModal }}>
      {children}
      {Array.from(modals).map((element, index) => {
        const [key, Modal] = element;

        return (
          <Modal.Modal
            key={`${key}-${index}`}
            {...Modal.params}
          />
        );
      })}
    </Context.Provider>
  );
};
