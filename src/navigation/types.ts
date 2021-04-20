import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type HomeProps = {
  navigation: HomeNavigationProp;
};

type SettingsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;

export type SettingsProps = {
  navigation: SettingsNavigationProp;
};