import { StyleSheet } from 'react-native';
import vars from './root';

export const formStyles = StyleSheet.create({
  containerView: {
    backgroundColor: vars.bg,
    flex: 1,
    alignItems: 'center',
  },
  cardView: {
    backgroundColor: vars.bg2,
    borderRadius: 10,
    width: 370,
    marginTop: 100,
    padding: 20
  },
  cardTitle: {
  },
  title: {
    color: '#fff',
    fontSize: vars.fontSizeTitle,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    color: vars.mainText,
    fontSize: vars.mainFontSize,
    textAlign: 'center'
  },
  label: {
    color: 'white',
    fontSize: vars.mainFontSize,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 5
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 20,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 150,
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center'
  },
  bntText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: vars.innerText
  }
})