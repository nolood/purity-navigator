import { ReactNode } from "react";

const Modal = ({
  visible,
  children,
  closeFn,
}: {
  visible?: boolean;
  children?: ReactNode;
  closeFn: () => void;
}) => {
  const handleClick = () => {
    closeFn();
  };

  if (visible)
    return (
      <div
        onClick={handleClick}
        className="bg-[#00000030] fixed top-0 left-0 w-screen h-screen flex items-center justify-center"
      >
        {children}
      </div>
    );
};

export default Modal;
