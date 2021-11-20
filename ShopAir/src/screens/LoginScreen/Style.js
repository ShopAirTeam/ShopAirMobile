import {Colors} from '@assets';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLogin,
  },

  loginTitle: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.black,
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
    marginLeft: 20,
    marginRight: 20,
  },
  inputUsername: {
    backgroundColor: Colors.gray4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 10,
    marginTop: 10,
  },
  inputPassword: {
    backgroundColor: Colors.gray4,
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
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  titleLogin: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3,
    color: Colors.whiteLight2,
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonRegister: {
    color: Colors.red2,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
