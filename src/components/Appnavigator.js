import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from "./Signup";
import Detail_order from './Detail_order';
import Mycart from "./Mycart";
import Fogot_password from './Fogot_password';
import HomePage from './HomePage';
import Checkout from './Checkout';
import Login from './Login';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Loginscreen = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Sigup' component={Signup}/>
    </Stack.Navigator>
  )
}

const Reward =() => {
  return(
    <Tab.Navigator>

    </Tab.Navigator>
  )
}

const History = () => {
  return(
    <Tab.Navigator>
  
    </Tab.Navigator>
  )
}

const Trangchu = () => {
  return(
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Homepage' component={HomePage}/>

      </Stack.Navigator>
  )
}

const Tabbar = () => {
  return(
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            position: 'absolute',
            bottom: 30,
            left: 10,
            right: 10,
            borderRadius: 10
          }
          
        }}
      >
        <Tab.Screen name='Trangchu' component={Trangchu} options={{
          tabBarIcon: ({focus}) => (
            <View style={{alignItems: 'center'}}>
              <Image source={require('../asset/Shop.png')} />
            </View>
          )
        }}/>
        <Tab.Screen name='Reward' component={Checkout} options={{
          tabBarIcon: ({focus}) => (
            <View style={{alignItems: 'center'}}>
              <Image source={require('../asset/Buy.png')} />
            </View>
          )
        }}/>
        <Tab.Screen name='History' component={Signup} options={{
          tabBarIcon: ({focus}) => (
            <View style={{alignItems: 'center'}}>
              <Image source={require('../asset/Menu.png')} />
            </View>
          )
        }}/>
      </Tab.Navigator> 
  )
}

function Main() {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='Tabbar' component={Tabbar} />
      <Stack.Screen name='Mycart' component={Mycart}/>
      <Stack.Screen name='Detail_order' component={Detail_order}/>
    </Stack.Navigator>
  )
}
const Appnavigator = () => {
  return (
    <Main/>
  )
}

export default Appnavigator