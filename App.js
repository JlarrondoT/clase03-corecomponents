import React from 'react';

import {
  View,
  Button,
  TextInput
} from 'react-native';

import { styles } from './styles';


const App = () => {
  return (
    <View 
      style={styles.container}
    >
      <TextInput
        placeholder='Type here'
        autoCorrect={false}
        autoFocus={true}
        placeholderTextColor='#841584'
        style={styles.textInput}
      />
      <Button
        title="Add"
        color="#841584"
        onPress={() =>  null}
        />
    </View>
  );
};


export default App;
