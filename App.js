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
  const [textList, setTextList] = useState([]);

  const handleOnChangeInput = (value) => {
    setText(value);
  }
  
  const addItem = () => {
    setTextList([...textList, { id: textList.length + 1, value: text }]);
    setText('');
  }

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
          onChangeText={handleOnChangeInput}
        />
        <Button
          title="Add"
          color="#841584"
          onPress={() =>  addItem()}
          />
      </View>
      <View style={styles.containerList}>
        {textList.length > 0 && textList.map(item  => (
          <Text key={item.id} style={styles.textList}>{item.value}</Text>
        ))}
      </View>
    </View>
  );
};


export default App;
