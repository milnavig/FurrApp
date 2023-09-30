import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
} from 'react-native';
import DatePicker from './DatePicker';
import Dropdown from './Dropdown';
import LocationPicker from './LocationPicker';
import CustomButton from './CustomButton';

import { fillFiltered } from '../redux/actions/listAction';
import { setPurpose, setAnimal } from '../redux/actions/formAction';

import haversine from '../utils/haversineDistance';

const SearchBox = () => {
  const dispatch = useDispatch();
 
  const doctors = useSelector((store) => store.list.doctors);

  const userLocation = useSelector((store) => store.form.location);
  const userDate = useSelector((store) => store.form.date);

  const purposes = [
    { label: 'Pass the Tests', value: '1' },
    { label: 'Install Chip', value: '2' },
    { label: 'Diagnose', value: '3' },
    { label: 'Get Vaccinated', value: '4' },
  ];

  const animals = [
    { label: 'Cat', value: '1' },
    { label: 'Dog', value: '2' },
    { label: 'Snake', value: '3' },
    { label: 'Parrot', value: '4' },
  ];

  const setUserPurpose = (purpose) => {
    dispatch(setPurpose(purpose));
  }

  const setUserAnimal = (animal) => {
    dispatch(setAnimal(animal));
  }

  const searchDoctors = () => {
    let filteredList = doctors;

    if (userLocation) {
      const doctorsWithDistance = doctors.map(doctor => {
        const distance = haversine(
          userLocation.latitude,
          userLocation.longitude,
          parseFloat(doctor.latitude),
          parseFloat(doctor.longitude),
        );

        return {...doctor, distance }
      });
      
      filteredList = doctorsWithDistance.filter(doctor => {
        return doctor.distance <= 10;
      });
    }

    filteredList = filteredList.filter(doctor => {
      return doctor.date === userDate;
    });

    dispatch(fillFiltered(filteredList));
  }

  return (
    <View style={styles.searchBox}>
      <Dropdown label="Select purpose" data={purposes} onSelect={setUserPurpose} />
      <Dropdown label="Select Animal" data={animals} onSelect={setUserAnimal} />
      <View style={styles.pickersBlock}>
        <DatePicker></DatePicker>
        <LocationPicker></LocationPicker>
      </View>
      <View style={styles.button}>
        <CustomButton title={"Search".toUpperCase()} onPress={searchDoctors}></CustomButton>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    margin: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  pickersBlock: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
  }
});

export default SearchBox;