import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIAk2gr11BksAh7odCMwS66CsmROXiQ38",
  authDomain: "server-36325.firebaseapp.com",
  projectId: "server-36325",
  storageBucket: "server-36325.appspot.com",
  messagingSenderId: "375543464635",
  appId: "1:375543464635:web:d86a994a1a695a6ac31f9e"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

