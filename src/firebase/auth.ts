import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "./firebase"

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const logOut = () => {
  return auth.signOut();
}