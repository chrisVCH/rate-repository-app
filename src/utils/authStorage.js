import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken = async () => {
    // Get the access token for the storage
    const accessToken = await AsyncStorage.getItem(
        `${this.namespace}:token`,
      );
  
    return accessToken ? JSON.parse(accessToken) : '';
  }

  setAccessToken = async (accessToken) => {
    await AsyncStorage.setItem(
      `${this.namespace}:token`, 
      JSON.stringify(accessToken),
    );
  }

  removeAccessToken = async () =>  {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;