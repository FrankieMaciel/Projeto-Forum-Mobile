import { StyleSheet } from "react-native";
import vars from "./root";

export const headerStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: vars.bg2,
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    paddingTop: 30
  },
  DarkHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: vars.bg,
    justifyContent: 'center',
    alignItems: "center",
    width: '100%',
    height: 80,
    paddingTop: 30
  },
  HeaderEmpty: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: vars.bg2,
    justifyContent: 'center',
    width: '100%',
    height: 100,
    paddingTop: 30
  },
  text: {
    position: 'absolute',
    color: vars.mainText,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    width: '100%',
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 10,
    zIndex: 5,
  },
  circleIcon: {
    borderRadius: 10,
    backgroundColor: 'white',
    width: 30,
    height: 30,
    zIndex: 5
  },
  forumPress: {
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    top: 10,
  },
  btnProfile: {
    alignSelf: 'center',
    marginHorizontal: 10,
  }
})