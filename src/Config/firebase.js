// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABiBs4VKkSpcpW8Y5UzSaiJgKjvY0WrtY",
  authDomain: "rodinea-foods.firebaseapp.com",
  projectId: "rodinea-foods",
  storageBucket: "rodinea-foods.firebasestorage.app",
  messagingSenderId: "191011106804",
  appId: "1:191011106804:web:72153833c6b892bea293a1",
  measurementId: "G-CE6LWPWMHZ",
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)

