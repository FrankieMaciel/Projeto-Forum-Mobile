import { StyleSheet } from "react-native";
import vars from "./root";

export const profileStyles = StyleSheet.create({
  background: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    backgroundColor: vars.bg2,
    borderRadius: 20,
    width: '91%',
    margin: 20,
    padding: 10
  },
  picture: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 80,
    height: 80
  },
  info: {
    justifyContent: 'space-between'
  },
  name: {
    color: vars.mainText,
    fontWeight: 'bold',
    fontSize: 17
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  optionsBtn: {
    backgroundColor: vars.bgWhite,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  btnText: {},
  deletePfBtn: {
    backgroundColor: vars.danger
  },
  deleteBtnText: {
    color: vars.mainText
  },
  posts: {}
})