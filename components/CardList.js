import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';
import { fill, fillFiltered } from '../redux/actions/listAction';

import doctorsList from '../assets/doctors_data';

const CardList = () => {
  const dispatch = useDispatch();
 
  const filteredDoctors = useSelector((store) => store.list.filtered_doctors);

  useEffect(() => {
    dispatch(
      fill(doctorsList)
    );
  }, []);

  const viewAll = () => {
    dispatch(fillFiltered(doctorsList));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.text, styles.headerTitle]}>
          Nearby Vets
        </Text>
        <TouchableOpacity onPress={viewAll}>
          <Text style={[ styles.text, styles.buttonText ]}>View All</Text>
        </TouchableOpacity>
      </View>
      {
        filteredDoctors.length ?
        filteredDoctors.map((item) => <Card data={ item } key={ item.id }></Card>)
        : <Text style={[styles.text, styles.infoText]}>No available vets</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  text: {
    fontFamily: 'Outfit',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#08182F',
    fontWeight: 900,
    fontSize: 18,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 800,
    color: '#2F5EA0',
  },
  infoText: {
    paddingVertical: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CardList;