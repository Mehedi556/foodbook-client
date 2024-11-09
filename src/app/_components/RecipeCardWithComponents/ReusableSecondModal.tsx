import React, { ReactNode } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/modal";

type ReusableModalProps = {
  size?: string;
  title: string;
  trigger: (onOpen: () => void) => ReactNode; // The trigger button that opens the modal
  children: (onClose: () => void) => ReactNode; // The modal body content that can close the modal
};

const ReusableSecondModal = ({ size = 'xl', title, trigger, children }: ReusableModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* Trigger the modal open */}
      {trigger(onOpen)}
      
      <Modal size={size as any} isOpen={isOpen} onOpenChange={onOpenChange} className='w-full'>
        <ModalContent className='bg-solid text-colorPrimary w-full'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">{title}</ModalHeader>
              <ModalBody className='w-full'>
                {/* The body content that will use onClose to close the modal */}
                {children(onClose)}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReusableSecondModal;
