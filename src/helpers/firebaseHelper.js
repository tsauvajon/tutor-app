import firebase from 'firebase';
import 'firebase/auth';

import fbConfig from '../helpers/firebaseConfig';

const fbInit = (func) => {
  firebase.initializeApp(fbConfig);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      func(true, user);
    } else {
      func(false);
    }
    /* eslint-disable no-console */
  }, err => console.log(err));
};

export default fbInit;
