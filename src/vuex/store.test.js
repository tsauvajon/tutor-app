import store from './store';

it('authenticates users', () => {
  const user = {
    displayName: 'André',
    email: 'andre.agassi@epsi.fr',
  };

  store.dispatch('setUser', user);

  expect(store.getters.user).toEqual(user);
});
