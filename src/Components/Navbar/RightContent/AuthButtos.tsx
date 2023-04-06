import { authModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";

const AuthButtos: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant={"outline"}
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        //function onClick
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log in
      </Button>
      <Button
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        //function onClick
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Log out
      </Button>
    </>
  );
};
export default AuthButtos;
