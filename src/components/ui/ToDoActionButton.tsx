import { AddIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { ActionButtonProps } from "../../types/types";

function ToDoActionButton({ onOpen }: ActionButtonProps) {
  return (
    <Box position="fixed" bottom="5" right="5" zIndex="10">
      <Button
        onClick={onOpen}
        colorScheme="teal"
        borderRadius="full"
        boxShadow="lg"
        width="56px"
        height="56px"
        p={0}
      >
        <AddIcon boxSize={5} />
      </Button>
    </Box>
  );
}

export default ToDoActionButton;
