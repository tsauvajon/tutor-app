import firebase from 'firebase';
import 'firebase/auth';

import fbConfig from '../private/.firebaserc';

const fbInit = (func) => {
  firebase.initializeApp(fbConfig);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      func(true, user);
    } else {
      func(false);
    }
  }, (err) => console.log(err));
};

export default fbInit;
