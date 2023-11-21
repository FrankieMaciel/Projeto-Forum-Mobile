import { StyleSheet } from "react-native";
import vars from "./root";

export const searchStyles = StyleSheet.create({
  containerView: {
    backgroundColor: vars.bg,
    height: '100%',
    alignItems: 'center',
  },
  text: {
    color: "#fff",
  },
  input: {
    height: 40,
    width: "auto",
    backgroundColor: vars.bgWhite,
    marginHorizontal: "10%",
    borderRadius: 50,
    marginTop: 20,
    padding: 10,
    paddingRight: 50,
  },
  ViewOnTop: {
    width: "100%",
    height: 130,
    marginTop: 30,
    backgroundColor: vars.bg2,
    justifyContent: "space-between"
  },
  sillyButtons: {
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    marginHorizontal: "10%",
    margin: 20,
  },
  button: {
    backgroundColor: vars.bgWhite,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    width: 90,
    height: 30,
    // marginHorizontal: "8%",
  },
  searchIcon: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: vars.bgWhite,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    top: 25,
    right: 45,
  },
  searchArea: {

  }
})