import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import CustomButton from './CustomButton';

import { theme } from './../styles/colors';

const Card = ({data}) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Image source={ data.photo } style={ styles.avatar } />
        <View style={ styles.doctorInfo }>
          <Text style={[ styles.text, styles.nameText ]}>{ data.name }</Text>
          <Text style={[ styles.text, styles.fieldText ]}>{ data.field }</Text>
        </View>
        <View style={ styles.ratingBlock }>
          <IconEntypo name="star" style={ styles.starIcon } size={15} />
          <Text style={[ styles.text, styles.ratingText ]}>{ data.rating }</Text>
        </View>
      </View>
      <View style={ styles.locationBlock }>
        <IconEvilIcons name="location" style={ styles.locationIcon } size={20} />
        <Text style={[ styles.text, styles.locationText ]}>
          { data.address }
          <Text style={[ styles.text, styles.separator ]}> · </Text>
          <Text style={[ styles.text, styles.distanceText ]}>
            { data.distance ? `${data.distance.toFixed(2)} mi` : '' }
          </Text>
        </Text>
      </View>
      <View style={ styles.footer }>
        <Text style={[ styles.text, styles.statusText ]}>
          Available { data.date }
        </Text>
        <CustomButton title="Book"></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.whiteColor,
    borderRadius: 10,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  text: {
    fontFamily: 'Outfit', 
  },
  doctorInfo: {
    flex: 1,
    paddingHorizontal: 10,
  },
  nameText: { 
    fontSize: 14,
    fontWeight: 800,
    color: theme.darkBlueColor,
  },
  fieldText: {
    fontSize: 11,
    fontWeight: 500,
    color: theme.darkBlueColor,
  },
  ratingBlock: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  starIcon: {
    color: theme.yellowColor,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 800,
    color: theme.yellowColor,
    paddingLeft: 5,
  },
  locationBlock: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: theme.lightGreyColor,
  },
  locationIcon: {
    color: theme.orangeColor,
  },
  locationText: {
    fontSize: 12,
    fontWeight: 700,
    color: theme.blueColor,
  },
  separator: {
    fontWeight: 900,
    color: theme.greyColor,
    paddingHorizontal: 5,
  },
  distanceText: {
    fontWeight: 700,
    color: theme.darkBlueColor,
  },
  // Footer
  footer: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    flex: 1,
    fontSize: 12,
    fontWeight: 700,
    color: theme.orangeColor,
  },
});

export default Card;