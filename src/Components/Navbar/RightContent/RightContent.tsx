import AuthModel from "@/Components/Model/Auth/AuthModel";
import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtos from "./AuthButtos";

type RightContentProps = {
  //user : any
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <Flex justifyContent="center" align="center">
        <AuthModel />
        <AuthButtos />
      </Flex>
    </>
  );
};
export default RightContent;
