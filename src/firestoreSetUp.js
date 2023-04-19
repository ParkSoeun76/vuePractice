import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

var config = {
    apiKey: "AIzaSyC-OtsnTBh_8kiml9n8pTE-I2y3AVpgXfg",
    authDomain: "vuepractice-b6a09.firebaseapp.com",
    projectId: "vuepractice-b6a09",
    storageBucket: "vuepractice-b6a09.appspot.com",
    messagingSenderId: "710025249250",
    appId: "1:710025249250:web:fdba61c8eca95c97c279bb",
    measurementId: "G-SYMH6NHHXN"
};
const app = initializeApp(config);

const db = getFirestore(app);


export {
db
};