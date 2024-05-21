import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCgcDMmFELEnZVamPDqqSLAR_uIhHDxTBs",
    authDomain: "pacificmanpower-ab621.firebaseapp.com",
    databaseURL: "https://pacificmanpower-ab621-default-rtdb.firebaseio.com",
    projectId: "pacificmanpower-ab621",
    storageBucket: "pacificmanpower-ab621.appspot.com",
    messagingSenderId: "315103283935",
    appId: "1:315103283935:web:8e2a03a0c2b3228897776a",
    measurementId: "G-FVPNBNTS43"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;
//   const fireDb=firebase.initializeApp(firebaseConfig)
//   export default fireDb.database().ref()