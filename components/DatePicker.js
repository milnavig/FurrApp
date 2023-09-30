import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { setDate } from '../redux/actions/formAction';

export const DatePicker = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
 
  const date = useSelector((store) => store.form.date);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate.toISOString().split('T')[0];
    setShow(false);
    dispatch(setDate(currentDate))
  };

  const showDatepicker = () => {
    setShow(true);
  }

  return (
    <SafeAreaView style={ styles.container }>
      <TouchableOpacity
        style={ styles.datePickerBlock }
        onPress={ showDatepicker }
      >
        <Text style={ styles.text }>{ date }</Text>
        <IconFeather name="calendar" style={ styles.calendarIcon } size={25} />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          dateFormat="month day year"
          value={ new Date(date) }
          mode="date"
          is24Hour={ true }
          onChange={ onChange }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
  },
  datePickerBlock: {
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
    fontWeight: 'bold',
    flex: 1,
  },
  calendarIcon: {
    color: '#FF974D',
  },
});

export default DatePicker;