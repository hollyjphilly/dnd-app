import React from 'react';
import { Image, TextInput } from 'react-native';
import Spacer from '../Spacer';

import { styles } from '../../App.js';

const noop = () => {};

export default function Currency({
    name = '',
    value = '',
    icon = '',
    onChange = noop,
}) {
    return (
      <div style={styles.row}>
        <Image style={styles.currency} source={icon} />
        <TextInput 
          style={styles.input}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Spacer height='20px' />
      </div>
    );
};