import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  loginTitle: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
  },
  forgotPass: {
    margin: 10,
  },
  textForgot: {
    fontSize: 14,
  },
  inputContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  inputUsername: {
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    marginTop: 10,
  },
  inputPassword: {
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    marginTop: 10,
  },
  inputText: {
    flex: 1,
  },
  icon: {
    margin: 10,
  },
  closeButtonParent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  styleButton: {
    alignItems: 'center',
  },

  styleLogin: {
    width: width * 0.7,
    height: 50,
    borderRadius: 24,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  titleLogin: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#f3f8ff',
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  styleRegister: {
    bottom: 30,
  },
  buttonNetwork: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 100,
  },
});
