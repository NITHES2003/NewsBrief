import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Signin from './Signin';
import Signup from './signup';
import Welcomescreen from './Welcomescreen';
import TopicScreen from './TopicScreen';
import HomeScreen from './HomeScreen';

function App() {
  return (
    <>
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Welcomescreen /> */}
      {/* <TopicScreen /> */}
      <HomeScreen />
    </>
  );
}

export default App;
