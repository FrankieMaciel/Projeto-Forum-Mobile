import { StyleSheet } from "react-native";
import vars from "./root";

export const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: vars.bg2,
    width: '100%',
    height: 100
  },
  headerText: {
    color: vars.mainText,
    textAlign: 'center'
  }
})