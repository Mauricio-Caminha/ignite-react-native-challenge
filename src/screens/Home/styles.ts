import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  logo: {
    width: 110,
    height: 32,
  },
  backgroundTop: {
    width: '100%',
    height: 175,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    width: 327,
    height: 54,
    padding: 16,
    borderRadius: 6,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    color: 'white',
    backgroundColor: '#262626',
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 24
  },
  button: {
    width: 52,
    height: 52,
    marginLeft: 4,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
