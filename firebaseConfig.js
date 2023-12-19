// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZ04_fy2Yyr6k3a6tTyUDLQAn8AIZsk-8",
    authDomain: "connect-459b9.firebaseapp.com",
    projectId: "connect-459b9",
    storageBucket: "connect-459b9.appspot.com",
    messagingSenderId: "173991039659",
    appId: "1:173991039659:web:f41c69a1b5bb4f7c785dee",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
