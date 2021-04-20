import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { styles } from './style';

export const Settings = () => {
  
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
            defaultValue="Nikita"
          />
        </View>
        <View style={styles.input_container}>
          <Text style={styles.input_title}>Surname:</Text>
          <TextInput 
            style={styles.input_surname}
            placeholder="your surname..."
            placeholderTextColor="#8d96a1"
            defaultValue="Zhilinsky"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.button_title}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}