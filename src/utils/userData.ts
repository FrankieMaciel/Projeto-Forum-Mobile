import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserData {
  id: string;
  username: string;
  email: string;
  score: number;
  profileURL: string;
}

const _retrieveData = async () => {
  try {
    const data = await AsyncStorage.getItem('@UserData:key');
    if (data !== null) return JSON.parse(data);
    // console.error('Nenhum usuário encontrado.');
  } catch (error) {
    // console.error('Erro ao recuperar dados do usuário: ', error);
  }
};

const _storeData = async (data: IUserData) => {
  try {
    await AsyncStorage.setItem('@UserData:key', JSON.stringify(data));
  } catch (error) {
    // console.error('Erro ao armazenar dados do usuário: ', error);
  }
};

const _deleteData = async () => {
  try {
    await AsyncStorage.removeItem('@UserData:key');
    console.log(await AsyncStorage.getItem('@UserData:key'));

  } catch (error) {
    // console.error('Erro ao deletar dados do usuário: ', error);
  }
};

export {
  IUserData,
  _retrieveData,
  _storeData,
  _deleteData
};
