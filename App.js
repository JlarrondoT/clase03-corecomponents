import React, { useState } from 'react';

import {
  View,
  Button,
  TextInput,
  Text
} from 'react-native';

import { styles } from './styles';


const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([
    {
      id: 1,
      value: 'buy some water'
    }
  ]);
  return (
    <View 
      style={styles.container}
    >
      <View style={styles.containerInput}>
        <TextInput
          placeholder='Type here'
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor='#841584'
          style={styles.textInput}
          value={text}
        />
        <Button
          title="Add"
          color="#841584"
          onPress={() =>  null}
          />
      </View>
      <View style={styles.containerList}>
        {textList.map(item  => (
          <Text style={styles.textList}>{item.value}</Text>
        ))}
      </View>
    </View>
  );
};


export default App;
