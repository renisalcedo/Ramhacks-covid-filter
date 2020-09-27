// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: constants.apiKey,
    authDomain: constants.authDomain,
    databaseURL: constants.databaseURL,
    projectId: constants.projectId,
    storageBucket: constants.storageBucket,
    messagingSenderId: constants.messagingSenderId,
    appId: constants.appId,
    measurementId: constants.measurementId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);