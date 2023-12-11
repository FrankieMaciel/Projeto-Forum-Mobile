import { StyleSheet } from "react-native";
import vars from "./root";

export const profileStyles = StyleSheet.create({
  background: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    backgroundColor: vars.bg2,
    borderRadius: 20,
    width: '91%',
    margin: 20,
    padding: 10
  },
  picture: {
    backgroundColor: 'white',
    borderRadius: 40,
    width: 200,
    height: 200
  },
  info: {
    justifyContent: 'space-between'
  },
  name: {
    color: vars.mainText,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  },
  infoText: {
    color: vars.textLight,
    fontSize: 18
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    marginTop: 10
  },
  optionsBtn: {
    backgroundColor: vars.mainButton,
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
  seePostsBtn: {

  },
  seePostsBtnText: {
    fontSize: 20
  }
})