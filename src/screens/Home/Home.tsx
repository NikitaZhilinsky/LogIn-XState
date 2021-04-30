import React, { useContext, useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { 
  Modal, 
  Portal,
  Provider,
} from 'react-native-paper';
import { styles } from './style';
import { HomeProps } from '../../navigation/types';
import { useMachine } from '@xstate/react';
import { machineConfig } from '../../XState/machineConfig';
import { LogInMachineContext } from '../../XState/context';

export const Home = ({ navigation }: HomeProps) => {

  // const [machine, setMachine] = useMachine(machineConfig);
  const [machine, setMachine] = useContext(LogInMachineContext);
  console.log(machine.value);
  console.log(machine.context);

  const updateName = (e: string) => {
    setMachine({ type: 'CHANGE_NAME', data: e });
  }

  const updateSurname = (e: string) => {
    setMachine({ type: 'CHANGE_SURNAME', data: e });
  }

  const [visible, setVisible] = useState(false);

  const hideModal = () => setVisible(false);

  const submitClick = () => {
    setVisible(true);
    setMachine('SUBMIT');
  }

  const settingsClick = () => {
    navigation.navigate('Settings');
  }

  const okClick = () => {
    setMachine('REGISTER');
    setVisible(false);
  }

  const editClick = () => {
    setMachine('CHANGE');
    setVisible(false);
    navigation.navigate('Settings');
  }
  
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0660cb" />
      <Text style={styles.container_title}>Log In</Text>
      <Text style={styles.input_title}>Name:</Text>
      <TextInput 
        style={styles.input_name}
        placeholder="type here your name..."
        onChangeText={updateName}
        onEndEditing={() => setMachine('NAME_BLUR')}
        value={machine.context.name}
      />
      <Text style={styles.input_title}>Surname:</Text>
      <TextInput 
        style={styles.input_surname}
        placeholder="type here your surname..."
        onChangeText={updateSurname}
        onEndEditing={() => setMachine('SURNAME_BLUR')}
        value={machine.context.surname}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={submitClick}
      >
        <Text style={styles.button_title}>Sign In</Text>
      </TouchableOpacity>
      <Text 
        style={styles.settings_button}
        onPress={settingsClick}
      >
        Settings
      </Text>
      <Provider>
        <Portal>
          <Modal 
            visible={visible} 
            onDismiss={hideModal} 
            contentContainerStyle={styles.modal}>
            {machine.matches('submiting') ? (
              <View>
                <Text style={styles.modal_text}>
                  Hello Mr. {machine.context.surname} {machine.context.name}.{`\n`} 
                  Nice to meet you 
                </Text>
                <View style={styles.button_wrapper}>
                  <TouchableOpacity 
                    style={styles.modal_button}
                    onPress={okClick}
                  >
                    <Text style={styles.button_title}>OK</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.modal_button}
                    onPress={editClick}
                  >
                    <Text style={styles.button_title}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
            {machine.matches({ nameError: 'tooShort' }) ? (
              <Text style={styles.modal_text}>Too short name</Text>
            ) : null}
            {machine.matches({ surnameError: 'tooShort' }) ? (
              <Text style={styles.modal_text}>Too short surname</Text>
            ) : null}
          </Modal>
        </Portal>
      </Provider>
    </View>
  )
}