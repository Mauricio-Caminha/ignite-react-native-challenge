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
    position: 'absolute',
    width: '100%',
    marginTop: 142,
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
    width: 16,
    height: 16,
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
  info: {
    flexDirection: 'row',
    height: 50,
    top: 20,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoCounter: {
    width: 25,
    height: 19,
    marginLeft: 8,
    borderRadius: 999,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tasks: {
    flex: 1,
    margin: 24,
    alignItems: 'center',
  },
  clipboard: {
    width: 56,
    height: 56,
    marginTop: 48,
    marginBottom: 16,
  }
});
