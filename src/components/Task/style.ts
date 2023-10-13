import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 64,
    flexDirection: 'row',
    backgroundColor: '#262626',
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  containerCheckBox: {
    padding: 8,
  },
  containerText: {
    flex: 1,
  },
  containerDelete: {
    padding: 8,
  },
  checkBox: {
    width: 18,
    height: 18,
    marginLeft: 12,
  },
  deleteButton: {
    width: 32,
    height: 32,
  },
})