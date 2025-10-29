import { Box, Text } from "@chakra-ui/react";
import { IHeaderProps } from "../../types/types";

function ToDoHeader({children}: IHeaderProps) {
  return (
    <Box textAlign="center" mb={6}>
      <Text fontSize="2xl" fontWeight="bold" color="teal.500">
        { children }
      </Text>
    </Box>
  );
}

export default ToDoHeader;
