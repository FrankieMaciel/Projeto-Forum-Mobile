import AsyncStorage from "@react-native-async-storage/async-storage";

const _retrieveData = async () => {
  try {
    const token = await AsyncStorage.getItem('@AccessToken:key');
    if (token !== null) {
      return token;
    } else {
      console.log('Nenhum token encontrado.');
    }
  } catch (error) {
    console.error('Erro ao recuperar o token:', error);
  }
};

const _storeData = async (token: string) => {
  try {
    await AsyncStorage.setItem(
      '@AccessToken:key',
      token,
    );
  } catch (error) {
    console.error('Erro ao armazenar token: ', error);
  }
};

const _deleteData = async () => {
  try {
    await AsyncStorage.removeItem('@AccessToken:key');
  } catch (error) {
    console.error('Erro ao deletar token: ', error);
  }
}

export {
  _retrieveData,
  _storeData,
  _deleteData
}