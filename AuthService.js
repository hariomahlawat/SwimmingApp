// AuthService.js
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // You can add additional logic here if needed, like updating the user profile or database
      return userCredential.user;
    } catch (error) {
      console.error(error);
      throw error; // You can handle the error differently if needed
    }
  };

  export const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // After successful login, you might want to navigate to a different screen
      return userCredential.user;
    } catch (error) {
      console.error(error);
      throw error; // You can handle the error differently if needed
    }
  };
