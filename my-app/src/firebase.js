import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDsprrZjGvB3bbKq1oxzhn4gM_1aAZ4l4k",
  authDomain: "studybudd-30626.firebaseapp.com",
  databaseURL: "https://studybudd-30626.firebaseio.com",
  projectId: "studybudd-30626",
  storageBucket: "studybudd-30626.appspot.com",
  messagingSenderId: "691099760663",
  appId: "1:691099760663:web:b64fdf5c8a0dfd87260452",
  measurementId: "G-YDZB3YFRPM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
