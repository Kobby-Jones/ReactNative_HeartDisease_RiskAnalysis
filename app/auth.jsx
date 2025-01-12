import * as SecureStore from 'expo-secure-store';

/**
 * Checks if a user is currently authenticated/logged in
 * Uses Expo's SecureStore to retrieve the 'isLoggedIn' value
 * Returns the stored login state from SecureStore
 * Returns null if no login state is stored
 * Returns 'false' if user is explicitly logged out
 */
export const isAuthenticated = async () => {
  const isLoggedIn = await SecureStore.getItemAsync('isLoggedIn');
  isloggedOut = isLoggedIn === null || isLoggedIn === 'false'
  return isLoggedIn;
};
