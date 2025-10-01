import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const saveUserToFirestore = async (user, data) => {
  if (!user?.uid) throw new Error("User UID is missing");

  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    ...data,
    createdAt: new Date().toISOString(),
  });
};
