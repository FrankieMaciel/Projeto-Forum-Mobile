import { StyleSheet } from "react-native";
import vars from "./root";

export const postStyles = StyleSheet.create({
  containerView: {
    display: 'flex',
    backgroundColor: vars.bg,
    borderBottomColor: vars.mainOutline,
    borderBottomWidth: vars.mainBorderWidth,
    // minHeight: '22%',
    // width: '95%',
    marginTop: 20,
    // borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: '5%',
    paddingHorizontal: '2%',
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    marginBottom: 10,
  },
  headerTitle: {
    color: vars.mainText,
    fontWeight: 'bold',
  },
  date: {
    color: vars.textLight,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: vars.bgWhite,
    borderColor: vars.mainButton,
    borderWidth: vars.mainBorderWidth,
    borderRadius: 100,
  },
  textBG: {
    backgroundColor: vars.bg,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginTop: '2.5%',
  },
  postTitle: {
    color: vars.mainText,
    fontWeight: 'bold',
    // borderBottomColor: vars.mainText,
    // borderBottomWidth: vars.mainBorderWidth,
    paddingBottom: 2,
    marginBottom: 1,
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
    alignSelf: 'flex-end'
  },
  btnPressed: {
    backgroundColor: vars.mainButton,
  },

  // Comments
  commentScreen: {
    backgroundColor: vars.bg,
    height: '100%'
  },
  commentsPost: {
    paddingHorizontal: '5%',
  },
  commentsText: {
    color: vars.mainText,
    textAlign: 'center',
  },
  commentBtn: {
    backgroundColor: vars.mainButton,
    borderRadius: 10,
    width: 150,
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
    position: 'absolute',
    right: 25,
  },
  commentBtnText: {
    textAlign: 'center'
  },
  commentsContainer: {
    marginTop: 80,
    marginHorizontal: '5%'
  },
  noComments: {
    color: vars.textLighter,
    fontSize: 20,
    textAlign: 'center',
    marginTop: '5%'
  }
});