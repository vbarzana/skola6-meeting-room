import { createContext } from "react"
import { initializeApp, getApps } from "firebase/app"
import { getAuth, User, Auth } from "firebase/auth"
import { RECORD } from "../utils/interfaces"
import { Timestamp } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdEKtw_0ol1cfVAbcXYqf25GrVT5DLYck",
  authDomain: "skola6-meeting-room.firebaseapp.com",
  projectId: "skola6-meeting-room",
  storageBucket: "skola6-meeting-room.appspot.com",
  messagingSenderId: "765135845345",
  appId: "1:765135845345:web:495a288fea56d9f3c1c4a0",
  measurementId: "G-K7RHMX00F4"
};

if (getApps().length === 0) initializeApp(firebaseConfig)

const AuthContext = createContext<{
  auth: Auth
  currentUser: User | null
  records: RECORD[]
  recycledTotal: number
  convertedRecords: { items: number; date: Timestamp }[] | undefined
  updateUser: (newUser: User) => void
}>({
  auth: getAuth(),
  currentUser: null,
  records: [],
  recycledTotal: 0,
  convertedRecords: undefined,
  updateUser: () => {},
})

export { AuthContext }
