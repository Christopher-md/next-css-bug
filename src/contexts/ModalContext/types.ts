import type { ComponentProps, ElementType, ReactNode } from "react";

type State<T extends ElementType> = Map<string, ModalProps<T>>;

interface ModalProps<T extends ElementType> {
  Modal: T;
  /**
   * A unique key for the modal window.
   * It is necessary for correct operation (Opening/Closing) of a specific modal window
   */
  key: string;
  params: ComponentProps<T>;
}

interface ModalContextValue {
  /**
   * Function to close the currently open modal.
   * Calling this function will dismiss the modal that is currently displayed.
   */
  closeModal: (key: string) => void;

  /**
   * Function to open a modal with specified modalProps.
   * This function takes a generic type T that extends ElementType, representing the type of the modal component to be rendered.
   *
   * @param modalProps - An object containing information about the modal to be opened. It includes the modal component type (T) and its associated parameters.
   * @template T - A generic type representing the type of the modal component.
   *
   * @example
   * import Alert from "@/components/Alert";
   *
   * const Example = () => {
   *     const { openModal, closeModal } = useModalContext();
   *
   *     const onHandleClick = () => {
   *         openModal({
   *             Modal: Alert,
   *             key: "Alert",
   *             params: { message: "Alert!" }
   *         });
   *     }
   *
   *     return (
   *         <button onClick={onHandleClick}>
   *             Open
   *         </button>
   *     );
   * }
   */
  openModal: <T extends ElementType>(data: ModalProps<T>) => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export type {
  State,
  ModalProps,
  ModalContextValue,
  ModalProviderProps,
};
