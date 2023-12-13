import { StyleSheet } from "react-native";
import vars from "./root";

export const profileStyles = StyleSheet.create({
  background: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    // alignItems: 'center',
    backgroundColor: vars.bg,
    // borderRadius: 20,
    width: '91%',
    margin: '5%',
    paddingBottom: '5%',
    borderBottomColor: vars.mainOutline,
    borderBottomWidth: vars.mainBorderWidth
  },
  picture: {
    borderRadius: 20,
    width: 100,
    height: 100
  },
  info: {
    justifyContent: 'space-between'
  },
  name: {
    color: vars.mainText,
    // textAlign: 'center',
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