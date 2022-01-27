import { useContext } from "react"
import {
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth"
import { AuthContext } from "../context/auth"

function useSignIn() {
  const { auth } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider()
  googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email")

  const signInGoogle = async () => {
    try {
      signInWithRedirect(auth, googleProvider)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    auth,
    googleProvider,
    signInGoogle
  }
}

export { useSignIn }
