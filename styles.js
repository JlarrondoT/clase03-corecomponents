
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerInput: {
      padding: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerList: {
      paddingHorizontal: 25,
    },
    textInput: {
      borderColor: 'black',
      borderBottomWidth: 1, 
      marginBottom: 10,
      width: '70%',
      height: 40,
      fontSize: 14,
      color: '#212121'
    },
    textList: {
      fontSize: 14,
      color: '#212121',
      marginBottom: 10,
    }
});