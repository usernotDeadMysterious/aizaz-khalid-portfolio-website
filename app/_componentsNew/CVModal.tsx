import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

interface CVModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CVModal({ isOpen, onOpenChange }: CVModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      size="3xl"
      onOpenChange={onOpenChange}
      backdrop="blur"
      classNames={{
        base: "bg-black/80 border border-cyan-400/30 backdrop-blur-xl",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="pt-6">
              <iframe
                src="/cv.pdf"
                className="w-full h-[80vh] rounded-md border border-cyan-400/30"
                title="CV Document"
              />
            </ModalBody>

            <ModalFooter className="border-t border-cyan-400/20">
              <Button
                size="sm"
                variant="ghost"
                onPress={onClose}
                className="text-red-400 border border-red-400/30"
              >
                Close
              </Button>

              <a href="/cv.pdf" download>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-cyan-400 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,255,170,0.4)]"
                >
                  Download
                </Button>
              </a>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
