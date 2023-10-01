import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { theme } from './../styles/colors';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={ onPress }>
      <View style={ styles.button }>
        <Text style={[ styles.text, styles.buttonText ]}>{ title }</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.blueColor,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 22,
  },
  text: {
    fontFamily: 'Outfit', 
    fontWeight: 700,
  },
  buttonText: {
    color: theme.whiteColor,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default CustomButton;