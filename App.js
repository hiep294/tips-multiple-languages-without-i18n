import React from 'react';
import { Text } from 'react-native'

import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './src/screens/home.screen';
import ContactScreen from './src/screens/contact.screen';
import SettingScreen from './src/screens/setting.screen';
import { observer } from 'mobx-react-lite';
import AppText from './src/components/app-text';

const Navigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: ({ tintColor }) => {
        return <AppText languageKey="home" style={{ color: tintColor }} />
      }
    }
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: {
      tabBarLabel: ({ tintColor }) => {
        return <AppText languageKey="contact" style={{ color: tintColor }} />
      }
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: ({ tintColor }) => {
        return <AppText languageKey="setting" style={{ color: tintColor }} />
      }
    }
  }
})

const App = createAppContainer(Navigator);
export default observer(() => <App />);
