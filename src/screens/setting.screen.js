import React, { memo } from 'react';
import {
  View
} from 'react-native';
import AppText from '../components/app-text';

const SettingScreen = memo(() => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText languageKey="this-is-setting-page" />
    </View>
  )
})

export default SettingScreen;
