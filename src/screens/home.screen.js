import React from 'react';
import {
  View, TouchableOpacity, Text
} from 'react-native';
import AppText from '../components/app-text'
import { Lang } from '../lang';
import { observer } from 'mobx-react-lite';

const HomeScreen = observer(() => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppText
        languageKey="this-is-home-page"
      />
      <View style={{ flexDirection: "row" }}>
        <AppText languageKey="set-language" />
        <View style={{ marginLeft: 20 }} />
        <TouchableOpacity
          onPress={() => {
            Lang.setLocale('vi')
          }}
        >
          <Text style={{
            color: Lang.locale === 'vi' ? 'blue' : null
          }}>Viet Nam</Text>
        </TouchableOpacity>
        <View style={{ marginLeft: 5 }} />
        <TouchableOpacity
          onPress={() => {
            Lang.setLocale('en')
          }}
        >
          <Text style={{
            color: Lang.locale === 'en' ? 'blue' : null
          }}>EngLish</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
})

export default HomeScreen;
