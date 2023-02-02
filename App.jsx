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
import Footer from './Footer';
import SchedulerScreen from './SchedulerScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <Signin /> */}
          {/* <Signup /> */}
          {/* <Welcomescreen /> */}
          {/* <TopicScreen /> */}
          {/* <HomeScreen /> */}
          <Stack.Screen name="login" component={Signin} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="signup" component={Signup} />
          {/* <SchedulerScreen /> */}
          {/* <Footer /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
