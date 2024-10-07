import React, { ReactNode } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Button } from '@nextui-org/button';

const ReusableModal = ({buttonText, size='xl', title, children}:{buttonText: string, size:string, title: string, children:ReactNode}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
    <Button variant="solid" radius="sm" className="w-full bg-[#884D80]" onPress={onOpen}>{buttonText}</Button>
    <Modal size={size as any} isOpen={isOpen} onOpenChange={onOpenChange} className='w-full'>
      <ModalContent className='bg-gradientSecondary w-full'>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">{title}</ModalHeader>
            <ModalBody className='w-full'>
              {children}
            </ModalBody>
            {/* <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter> */}
          </>
        )}
      </ModalContent>
    </Modal>
  </>
  )
}

export default ReusableModal