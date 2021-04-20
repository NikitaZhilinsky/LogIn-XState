import { 
  StyleSheet, 
  ViewStyle, 
  TextStyle,
} from 'react-native';

type Styles = {
  container: ViewStyle,
  container_title: TextStyle,
  input_title: TextStyle,
  input_name: ViewStyle,
  input_surname: ViewStyle,
  button: ViewStyle,
  button_title: TextStyle,
  settings_button: TextStyle,
  modal: ViewStyle,
  modal_text: TextStyle,
}

export const styles = StyleSheet.create<Styles>({
  container: {
    paddingTop: 70,
    height: '100%',
  },
  container_title: {
    marginHorizontal: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3c3c3e',
    marginBottom: 25,
  },
  input_title: {
    marginLeft: 50,
    color: '#3c3c3e',
    fontSize: 18,
  },
  input_name: {
    height: 35,
    borderBottomWidth: 2,
    borderColor: '#3c3c3e',
    marginBottom: 20,
    marginHorizontal: 50,
    paddingLeft: 15,
    paddingBottom: 5,
    fontSize: 18,
  },
  input_surname: {
    height: 35,
    borderBottomWidth: 2,
    borderColor: '#3c3c3e',
    marginBottom: 45,
    marginHorizontal: 50,
    paddingLeft: 15,
    paddingBottom: 5,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#0660cb',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  button_title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 15,
  },
  settings_button: {
    color: '#3c3c3e',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 15,
  },
  modal: {
    backgroundColor: 'white', 
    padding: 25,
    margin: 15,
  },
  modal_text: {
    textAlign: 'center',
    fontSize: 22,
  }
})