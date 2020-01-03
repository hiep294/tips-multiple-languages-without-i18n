import React, { memo } from 'react';
import {
  View
} from 'react-native';
import AppText from '../components/app-text';

const ContactScreen = memo(() => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText languageKey="this-is-contact-page" />
    </View>
  )
})

export default ContactScreen;
