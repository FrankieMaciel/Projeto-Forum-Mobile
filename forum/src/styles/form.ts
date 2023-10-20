import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
  containerView: {
    backgroundColor: '#171a30',
    flex: 1,
    alignItems: 'center',
  },
  cardView: {
    backgroundColor: '#232a55',
    borderRadius: 10,
    width: 300,
    marginTop: 100,
    padding: 20
  },
  label: {
    color: 'white',
    fontSize: 24,
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
    color: 'black'
  }
})