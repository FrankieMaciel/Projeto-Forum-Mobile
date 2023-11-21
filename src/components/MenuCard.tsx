import { View, Text } from "react-native";
import { X } from 'react-native-feather';
import vars from "../styles/root";

export function MenuCard() {


  return (
    <View>
      <Text>Criar conta</Text>
      <Text>Entrar</Text>
      <X
        stroke={vars.mainText} 
        fill="#00000000" 
        width={20} 
        height={20}

      />
    </View>
  )
}