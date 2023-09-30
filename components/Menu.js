import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const Menu = () => {
  return (
    <View style={ styles.container }>
      <TouchableOpacity
        style={ styles.button }
      >
        <IconOcticons name="home" style={ styles.activeButton } size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={ styles.button }
      >
        <IconFeather name="calendar" style={ styles.nonActiveButton } size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={ styles.button }
      >
        <IconIonicons name="paw-outline" style={ styles.nonActiveButton } size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={ styles.button }
      >
        <IconOcticons name="gear" style={ styles.nonActiveButton } size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    color: '#FF974D',
  },
  nonActiveButton: {
    color: '#C8C3BE',
  }
});

export default Menu;