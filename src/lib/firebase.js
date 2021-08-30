import firebase from "firebase";
import "firebase/firestore";
//import * as firebase from "firebase/app";

import "firebase/auth";
/*
const firebaseConfig = {
  apiKey: "AIzaSyATOkzZ8M03JDlexVfextL5fkPTW7jhL6Q",
  authDomain: "yt-classroom-clone.firebaseapp.com",
  projectId: "yt-classroom-clone",
  storageBucket: "yt-classroom-clone.appspot.com",
  messagingSenderId: "170227524980",
  appId: "1:170227524980:web:78806688690ce40a7d3821",
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyBYSuj0GXWgf913HNFvxi7-PA0MsiSDQKY",
  authDomain: "jareer-meetings.firebaseapp.com",
  projectId: "jareer-meetings",
  storageBucket: "jareer-meetings.appspot.com",
  messagingSenderId: "152169367576",
  appId: "1:152169367576:web:a9a75fc9a7dd3933529b6d",
  measurementId: "G-0BVKK52K96"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage , google};
export default db;




//const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

//export { auth, google };
