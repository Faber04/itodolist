import { Button, HStack, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { IToDoModalProps } from "../../types/types";

function ToDoModal({isOpen, onClose, newTitle, setNewTitle, handleAdd} : IToDoModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent mx={4}>
        <ModalHeader>Aggiungi nuova todo</ModalHeader>
        <ModalBody>
          <Input
            placeholder="Scrivi qui..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            size="md"
            borderRadius="md"
            autoFocus
          />
        </ModalBody>
        <ModalFooter>
          <HStack w="100%" justify="flex-end">
            <Button variant="ghost" onClick={onClose}>
              Annulla
            </Button>
            <Button colorScheme="teal" onClick={handleAdd}>
              Aggiungi
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ToDoModal;
