import type { FirebaseOptions } from "firebase/app";

export const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyBSYPtrO2epyTqzUPLNPImvuhm3mNQ7dpQ",
    authDomain: "sudoku-duel-5ea35.firebaseapp.com",
    databaseURL: "https://sudoku-duel-5ea35-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sudoku-duel-5ea35",
    storageBucket: "sudoku-duel-5ea35.firebasestorage.app",
    messagingSenderId: "115243796177",
    appId: "1:115243796177:web:55c762dc83e8493236a7f0"
};
export const IS_FIREBASE_CONFIGURED = true;
export function isFirebaseConfigured(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
      firebaseConfig.authDomain &&
      firebaseConfig.databaseURL &&
      firebaseConfig.projectId &&
      firebaseConfig.appId,
  );
}
