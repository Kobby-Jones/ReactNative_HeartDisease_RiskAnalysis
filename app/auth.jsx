import * as SecureStore from 'expo-secure-store';


export const isAuthenticated = async () => {
  const isLoggedIn = await SecureStore.getItemAsync('isLoggedIn');
  return isLoggedIn === 'true';
};
