import React, { useState } from 'react';
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
import { useMachine } from "@xstate/react";
import { machineConfig } from '../../XState/machineConfig';

export const Home = ({ navigation }: HomeProps) => {

  const [machine, send] = useMachine(machineConfig);
  // console.log(machine.value);
  
  const [form, setForm] = useState({
    name: '',
    surname: '',
  });
  console.log(form);

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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
        // onChange={text => setForm({...form, name: text.target.value})}
        onChangeText={setForm}
        value={form.name}
      />
      <Text style={styles.input_title}>Surname:</Text>
      <TextInput 
        style={styles.input_surname}
        placeholder="type here your surname..."
        // onChange={text => setForm({...form, surname: text.target.value})}
        onChangeText={setForm}
        value={form.surname}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={showModal}
      >
        <Text style={styles.button_title}>Sign In</Text>
      </TouchableOpacity>
      <Text 
        style={styles.settings_button}
        onPress={() => navigation.navigate('Settings')}
      >
        Settings
      </Text>
      <Provider>
        <Portal>
          <Modal 
            visible={visible} 
            onDismiss={hideModal} 
            contentContainerStyle={styles.modal}>
            <Text style={styles.modal_text}>Hello Mr. ___ .{`\n`} Nice to meet you</Text>
          </Modal>
        </Portal>
      </Provider>
    </View>
  )
}