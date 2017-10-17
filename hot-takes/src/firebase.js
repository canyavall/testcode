import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCT_yqrqzZ47sNf6vryqROk7WLpPFd0TCo",
    authDomain: "fir-test-ea70d.firebaseapp.com",
    databaseURL: "https://fir-test-ea70d.firebaseio.com",
    projectId: "fir-test-ea70d",
    storageBucket: "fir-test-ea70d.appspot.com",
    messagingSenderId: "825561625374"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
