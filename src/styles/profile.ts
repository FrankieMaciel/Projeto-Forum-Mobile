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
    borderBottomWidth: vars.mainBorderWidth,
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
    backgroundColor: vars.bg,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '90%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 20,
    borderWidth: vars.mainBorderWidth,
    borderColor: vars.mainOutline,
  },
  btnText: {
    fontSize: 15,
    color: vars.mainText,
  },
  deletePfBtn: {
    backgroundColor: vars.bg,
    marginTop: 20,
    borderColor: vars.danger,
  },
  deleteBtnText: {
    fontWeight: 'bold',
    color: vars.danger,
  },
  seePostsBtn: {

  },
  mapView: {
    width: '100%',
    height: '80%',
    borderWidth: 1,
    borderColor: vars.innerText,
    marginBottom: 10,
  },
  mapCard: {
    display: 'flex',
    backgroundColor: vars.bg,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    marginHorizontal: 22.5,
    top: '10%',
    height: '80%',
  },
  map: {
    width: '100%',
    // NÃO TIRAR ESSA LINHA PELO AMOR DE DEUS
    ...StyleSheet.absoluteFillObject,
    marginBottom: 10,
    height: '100%',
  },
});