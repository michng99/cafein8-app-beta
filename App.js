
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Signup from "./src/components/Signup";
import Detail_order from './src/components/Detail_order';

import { StackNavigator } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Fogot_password from './src/components/Fogot_password';


const Stack = createNativeStackNavigator();

const App  =  () => {
  return(
    //<Signup/>
    //<Detail_order/>
    <Fogot_password/>
    // <View>
    //   <NavigationContainer>
    //     <Stack.Screen name = "Signup" component={Signup}/>
    //   </NavigationContainer>
    // </View>
  );
  
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
