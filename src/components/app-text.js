import React from 'react';
import { Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import { Lang } from '../lang'

const AppText = observer(({ languageKey, style = {} }) => {
  const text = Lang.languages.get(Lang.locale)[languageKey];
  return (
    <Text style={style}>
      {text}
    </Text>
  )
})

AppText.propTypes = {
  languageKey: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default AppText
