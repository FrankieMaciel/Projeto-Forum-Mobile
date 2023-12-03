import AsyncStorage from "@react-native-async-storage/async-storage";

const _retrieveData = async () => {
  try {
    const token = await AsyncStorage.getItem('@AcessToken:key');
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
      '@AcessToken:key',
      token,
    );
  } catch (error) {
    console.log(error);
  }
};

export {
  _retrieveData,
  _storeData
}