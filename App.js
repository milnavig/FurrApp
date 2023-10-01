import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, 
  StatusBar, 
  ScrollView, 
  ImageBackground 
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Menu from './components/Menu';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';

import { theme } from './styles/colors';
import bgImage from './assets/bg.png';

const loadFonts = async () => {
  await Font.loadAsync({
    Outfit: require('./assets/fonts/Outfit-VariableFont_wght.ttf'),
  });
};

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => {
      setIsFontLoaded(true);
    });
  }, []);

  if (!isFontLoaded) {
    return <Text>Font is loading</Text>;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <ScrollView>
            <SearchBox></SearchBox>
            <CardList></CardList>
          </ScrollView>
          <Menu></Menu>
        </ImageBackground>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    paddingTop: StatusBar.currentHeight,
  },
  bgImage: {
    height: '40%',
    flex: 1,
  }
});
