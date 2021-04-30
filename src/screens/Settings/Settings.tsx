import React, { useContext } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { styles } from './style';
import { SettingsProps } from '../../navigation/types';
import { useMachine } from '@xstate/react';
import { machineConfig } from '../../XState/machineConfig';
import { LogInMachineContext } from '../../XState/context';

export const Settings = ({ navigation }: SettingsProps) => {

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
  
  return (
    <View style={styles.settings_screen}>
      <StatusBar
          barStyle="light-content"
          backgroundColor="#18af8a" />
      <View style={styles.edit_container}>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.input_container}>
          <Text style={styles.input_title}>Name:</Text>
          <TextInput 
            style={styles.input_name}
            placeholder="your name..."
            placeholderTextColor="#8d96a1"
            onChangeText={updateName}
            onEndEditing={() => setMachine('NAME_BLUR')}
            defaultValue={machine.context.name}
          />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.input_title}>Surname:</Text>
          <TextInput 
            style={styles.input_surname}
            placeholder="your surname..."
            placeholderTextColor="#8d96a1"
            onChangeText={updateSurname}
            onEndEditing={() => setMachine('SURNAME_BLUR')}
            defaultValue={machine.context.surname}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.button_title}>Save Changes</Text>
        </TouchableOpacity>
        <Text 
          style={styles.home_button}
          onPress={() => navigation.navigate('Home')}
        >
          At home
        </Text>
      </View>
    </View>
  )
}