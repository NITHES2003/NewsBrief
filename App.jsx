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

function App() {
  return (
    <>
      {/* <Signin /> */}
      {/* <Signup /> */}
      <Welcomescreen />
    </>
  );
}

export default App;
