import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import * as Location from 'expo-location';
import { setLocation } from '../redux/actions/formAction';

export const LocationPicker = () => {
  const dispatch = useDispatch();
 
  const location = useSelector((store) => store.form.location);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { coords: { latitude, longitude }} = location;
    console.log({ latitude, longitude });
    dispatch(setLocation({ latitude, longitude }))
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.locationPickerBlock}
        onPress={getLocation}
      >
        <Text style={styles.text}>
          { location ? "Location" : "Nearby" }
        </Text>
        <IconEvilIcons name="location" style={styles.locationIcon} size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  locationPickerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E9E8E8',
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'Outfit', 
    
    fontSize: 13,
    flex: 1,
  },
  locationIcon: {
    color: '#FF974D',
  },
});

export default LocationPicker;