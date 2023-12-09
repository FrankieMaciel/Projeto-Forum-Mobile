import { StyleSheet } from "react-native";
import vars from "./root";

export const homeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: vars.bg
  },
  containerView: {
    // flex: 1,
    // backgroundColor: vars.bg,
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: '5%',
    marginBottom: 50
  },
  searchContainerView: {
    // flex: 1,
    backgroundColor: vars.bg,
    alignItems: 'center',
    height: '100%',
    marginBottom: 50
  },
  postListView: {
    marginTop: 80
  },
  text: {
    color: "#fff",
  }
})