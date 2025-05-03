
import {
    Modal,
    ModalContent,
    ModalHeader,
    Button,
    ModalBody,
    ModalFooter,
    
    useDisclosure,
  } from "@heroui/react";
  import Image from "next/image";
  
  interface ModalCustomProps {
    sourcefile: string;
  }
  
  export default function ModalCustom({ sourcefile }: ModalCustomProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
    return (
      <>
        <Button size="sm" variant="ghost" color="success" onPress={onOpen}>View Certificate</Button>
        <Modal isOpen={isOpen} size={'3xl'}onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Certificate</ModalHeader>
                <ModalBody>
                  <Image
                    src={sourcefile}
                    alt="Certificate Image"
                    layout="responsive"
                    height={0}
                    width={0}
                    className="object-contain"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button  
                  size="sm"
                  variant="ghost"
                  color="danger"
                   onPress={onClose}>
                    Close
                  </Button>
                  
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  