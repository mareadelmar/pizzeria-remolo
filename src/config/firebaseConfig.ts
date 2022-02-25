import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBDDWSkzyveKgXKite3wv_vxu0SPzzP-ic",
	authDomain: "remolo-pizzeria.firebaseapp.com",
	projectId: "remolo-pizzeria",
	storageBucket: "remolo-pizzeria.appspot.com",
	messagingSenderId: "858988689822",
	appId: "1:858988689822:web:fba9c34137d4227ed47e8f",
};

const firebaseInit = firebase.initializeApp(firebaseConfig);

const db:any = firebaseInit.firestore();

export { db };
