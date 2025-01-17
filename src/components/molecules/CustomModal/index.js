import React from 'react';
import {View, Text, Modal, Button} from 'react-native';
import {styles} from './styles';
import SuccessfullyAnimation from '../../lottiePlayer/index';

const CustomModal = ({
  title,
  description,
  selectedItem,
  buttonText,
  onHandleDeleteItem,
  visible,
  wasSuccessful,
}) => {
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.modalContainerContent}>
        {wasSuccessful ? <SuccessfullyAnimation /> : <View />}
        <View style={styles.modaTitle}>
          <Text>{title}</Text>
        </View>
        <View style={styles.modalContent}>
          <Text>{description}</Text>
          <Text style={styles.textList}>{selectedItem.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button
            title={buttonText}
            color="#841584"
            onPress={() => onHandleDeleteItem(selectedItem.id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
