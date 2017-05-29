import firebase from 'firebase';
// import FirebaseServer from 'firebase-server';
import 'firebase/auth';

import store from './store';
import fbConfig from '../helpers/firebaseConfig';

describe('actions and getters', () => {
  const fbApp = firebase.initializeApp(fbConfig);
  firebase.auth().onAuthStateChanged(user => store.dispatch('setUser', user));
  store.dispatch('setFbApp', fbApp);

  it('stocks authenticated users', () => {
    const user = {
      displayName: 'André',
      email: 'andre.agassi@epsi.fr',
    };

    store.dispatch('setUser', user);

    expect(store.getters.user).toEqual(user);
  });

  it('connects firebase', () => {
    expect(store.getters.fbApp).toBeTruthy();
  });
});

describe('mock database', () => {
  /* eslint-disable no-new */
  // new FirebaseServer(5754, '127.0.0.1', {
  //   courses: {
  //     a: { title: 'test', chips: ['test'] },
  //     b: { title: 'testb' },
  //     c: { title: 'testc' },
  //   },
  // });
});
