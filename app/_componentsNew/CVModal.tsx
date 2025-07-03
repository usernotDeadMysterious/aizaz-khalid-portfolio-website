
import {
    Modal,
    ModalContent,
    ModalHeader,
    Button,
    ModalBody,
    ModalFooter,
    
    useDisclosure,
  } from "@heroui/react";
import { Download, Eye, ScanEye, View, ViewIcon } from "lucide-react";
  import Image from "next/image";
import Link from "next/link";
  
//   interface ModalCustomProps {
//     sourcefile: string;
//   }
//   { sourcefile }: ModalCustomProps)
  export default function CVModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    function doNothing(){

    }
    return (
      <>
        
        <div 
        onClick={onOpen}
        className="flex flex-col justify-center items-center gap-0">
            <Eye className="w-6 h-7"/>
            <p className="text-xs" >View CV</p>
        </div>
        
        <Modal isOpen={isOpen} size={'3xl'}onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                {/* <ModalHeader className="flex flex-col gap-1">CV</ModalHeader> */}
                <div className="pt-6"></div>
                <ModalBody >
                  {/* <Image

                    src={'/my pic.png'}
                    alt="Certificate Image"
                    layout="responsive"
                    height={0}
                    width={0}
                    className="object-contain"
                  /> */}
                  <iframe
          src="/cv.pdf"
          className="w-full h-[80vh] rounded-md"
          title="CV Document"
        ></iframe>
                </ModalBody>
                <ModalFooter>
                  <Button  
                  size="sm"
                  variant="ghost"
                  color="danger"
                   onPress={onClose}>
                    Close
                  </Button>
                  <a href="/cv.pdf" download>
                  <Button  
                  size="sm"
                  variant="ghost"
                  color="danger"
                   onPress={doNothing}>
                    Download
                  </Button>
                  </a>  
                  
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  