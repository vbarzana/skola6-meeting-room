import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdEKtw_0ol1cfVAbcXYqf25GrVT5DLYck",
  authDomain: "skola6-meeting-room.firebaseapp.com",
  projectId: "skola6-meeting-room",
  storageBucket: "skola6-meeting-room.appspot.com",
  messagingSenderId: "765135845345",
  appId: "1:765135845345:web:495a288fea56d9f3c1c4a0",
  measurementId: "G-K7RHMX00F4"
};

if (getApps().length === 0) initializeApp(firebaseConfig);