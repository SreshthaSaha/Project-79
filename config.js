import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBE80XLVhyFcdFGE7YzdOvL_VDgTk3s4Kk",
    authDomain: "book-santa-app-96e04.firebaseapp.com",
    projectId: "book-santa-app-96e04",
    storageBucket: "book-santa-app-96e04.appspot.com",
    messagingSenderId: "1032964437707",
    appId: "1:1032964437707:web:e4231197b5613323004d4e"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();