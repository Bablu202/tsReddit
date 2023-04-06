import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  view: "login" | "signin" | "resetPassword";
}

const defaultModelState: AuthModalState = {
  open: false,
  view: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModelState,
});
