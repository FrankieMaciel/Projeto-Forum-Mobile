import { StyleSheet } from "react-native";
import vars from "./root";

export const postStyles = StyleSheet.create({
  containerView: {
    display: 'flex',
    backgroundColor: vars.bg,
    borderColor: vars.mainOutline,
    borderWidth: vars.mainBorderWidth,
    // minHeight: '22%',
    // width: '95%',
    marginTop: 20,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
  },
  headerTitle: {
    color: vars.mainText,
    fontWeight: 'bold',
  },
  date: {
    color: vars.textLight,
  },
  textBG: {
    backgroundColor: vars.bg,
    borderColor: vars.mainText,
    borderWidth: vars.mainBorderWidth,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: vars.bgWhite,
    borderRadius: 100,
  },
  postTitle: {
    color: vars.mainText,
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
  postContent: {
    color: vars.mainText
  },
  commentsBtn: {
      borderColor: vars.mainButton,
      borderWidth: vars.mainBorderWidth,
      borderRadius: 5,
      width: '35%',
      marginTop: 10,
      padding: 3,
  },
  btnPressed: {
      backgroundColor: vars.mainButton,
  },
  commentsText: {
    color: vars.mainText,
    textAlign: 'center',
  }
})