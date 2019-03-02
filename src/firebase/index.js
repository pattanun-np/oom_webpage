import firebase from 'firebase/app';
import 'firebase/storage';
   
var config = {
    apiKey: "AIzaSyDO6axPzzBni1drkSb_xlqpbvjst-MSGOg",
    authDomain: "web-sever-217114.firebaseapp.com",
    databaseURL: "https://web-sever-217114.firebaseio.com",
    projectId: "web-sever-217114",
    storageBucket: "web-sever-217114.appspot.com",
    messagingSenderId: "186058268724"
  };
  firebase.initializeApp(config);
  
  const storage = firebase.storage();
  
  export {
      storage, firebase as default