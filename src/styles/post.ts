import { StyleSheet } from "react-native";
import vars from "./root";

export const postStyles = StyleSheet.create({
  containerView: {
    display: 'flex',
    backgroundColor: vars.bg3,
    minHeight: '30%',
    width: '95%',
    marginTop: 20,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20
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
    backgroundColor: vars.bgLight,
    minHeight: '14.2%',
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
    fontWeight: 'bold',
    marginBottom: 10
  },
  comments: {
    height: 20,
    backgroundColor: vars.bgWhite,
    width: '35%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
})