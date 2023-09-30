import { useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  StatusBar,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Dropdown = ({ label, data, onSelect }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(label);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const [dropdownMarginLeft, setDropdownMarginLeft] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h - StatusBar.currentHeight);
      setDropdownWidth(_w);
      setDropdownMarginLeft(_px);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={ styles.item } onPress={() => onItemPress(item)}>
      <Text style={[ styles.text, styles.itemText ]}>{ item.label }</Text>
      {
        selected.value === item.value ? 
        <IconAntDesign name="check" style={ styles.iconCheck } size={15} />
        : null
      }
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={ visible } transparent animationType="none">
        <TouchableOpacity
          style={ styles.overlay }
          onPress={() => setVisible(false)}
        >
          <View style={[ styles.dropdown, { top: dropdownTop, left: dropdownMarginLeft, width: dropdownWidth } ]}>
            <FlatList
              data={ data }
              renderItem={ renderItem }
              keyExtractor={ (item, index) => index.toString() }
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={ DropdownButton }
      style={ styles.button }
      onPress={ toggleDropdown }
    >
      { renderDropdown() }
      <Text style={[ styles.text, styles.buttonText ]}>
        { (!!selected && selected.label) || label }
      </Text>
      <IconEntypo name="chevron-small-down" style={ styles.iconDown } size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E9E8E8',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Outfit', 
    fontSize: 13,
  },
  buttonText: {
    flex: 1,
    fontWeight: 700,
    color: '#08182F',
  },
  iconDown: {
    color: '#A3A3A3',
  },
  iconCheck: {
    marginRight: 10,
    color: '#4DC175',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    elevation: 3, // Add shadow for Android devices
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0, 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10, 
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemText: {
    flex: 1,
    fontWeight: 700,
    color: '#08182F',
  },
});

export default Dropdown;