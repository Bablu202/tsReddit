import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditLogo.png" height="5rem" />
      </Flex>
    </Flex>
  );
};
export default Navbar;
