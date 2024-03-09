import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 60,
    backgroundColor: '#3498DB',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  appName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 8,
  },
  body: {
    flex: 1,
  },
  bodyContent: {
    padding: 10,
  },
  messageItem: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.4,
    alignSelf: 'center',
    margin: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginEnd: 16,
    height: 48,
  },
  sendButton: {
    height: 48,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageStyle: {
    borderTopEndRadius: 4,
    borderTopStartRadius: 4,
    margin: 8,
    padding: 4,
    width: 'auto',
    justifyContent: 'center',
  },
});

export default styles;
