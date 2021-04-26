import { 
  StyleSheet, 
  ViewStyle, 
  TextStyle,
} from 'react-native';

type Styles = {
  settings_screen: ViewStyle,
  edit_container: ViewStyle,
  title: TextStyle,
  input_container: ViewStyle,
  input_title: TextStyle,
  input_name: ViewStyle,
  input_surname: ViewStyle,
  button: ViewStyle,
  button_title: TextStyle,
  home_button: TextStyle,
}

export const styles = StyleSheet.create<Styles>({
  settings_screen: {
    flex: 1,
    backgroundColor: '#2c3640',
  },
  edit_container: {
    marginHorizontal: 50,
  },
  title: {
    paddingTop: 70,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e3e8e6',
    marginBottom: 33,
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input_title: {
    color: '#8d96a1',
    fontSize: 22,
  },
  input_name: {
    height: 50,
    width: 180,
    borderWidth: 2,
    borderColor: '#8d96a1',
    paddingHorizontal: 10,
    fontSize: 22,
    color: '#e3e8e6',
  },
  input_surname: {
    height: 50,
    width: 180,
    borderWidth: 2,
    borderColor: '#8d96a1',
    paddingHorizontal: 10,
    fontSize: 22,
    color: '#e3e8e6',
  },
  button: {
    backgroundColor: '#18af8a',
    alignItems: 'center',
    marginTop: 30,
  },
  button_title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 15,
  },
  home_button: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 15,
  },
})