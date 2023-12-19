// AuthService.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore'; // Import setDoc and doc
import { auth, db } from './firebaseConfig'; // Ensure you import db from firebaseConfig

export const signUp = async (email, password, name, phone, userType) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save additional user data to Firestore
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      name,
      phone,
      userType
    });

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
