import firebase from "firebase";
  
var firebaseConfig = {
  apiKey: "AIzaSyAWfUfBXVVwXZqnCLhKbsKlJT9e0AgSN4s",
  authDomain: "mycourseschedules.firebaseapp.com",
  projectId: "mycourseschedules",
  storageBucket: "mycourseschedules.appspot.com",
  messagingSenderId: "291023482243",
  appId: "1:291023482243:web:f248854f7893a10223dab6",
  measurementId: "G-0C8BVYPC5X"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
