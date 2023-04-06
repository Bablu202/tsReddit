import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
  CheckboxIcon,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

type SearchInputProps = {
  //user
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" mb={1} />}
        />
        <Input
          type="tel"
          placeholder="search"
          fontSize="10pt"
          _placeholder={{ color: "gery.500" }}
          _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="grey.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
