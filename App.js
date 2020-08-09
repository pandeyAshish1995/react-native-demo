// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authenticator from './src/Authenticator';
import DashBoardScreen from './src/DashBoardScreen';
import DetailScreen from './src/DetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingScreen from './src/SettingScreen';
import {UserContextProvider} from './src/UserContext';

function Root() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Auth"
        component={Authenticator}
        options={{title: 'Auth', headerShown: false}}
      />
      <Stack.Screen
        name="DashBoard"
        component={DashBoardScreen}
        options={{title: 'DashBoard'}}
      />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}

function NavigaTion() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="DashBoard" component={Root} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <UserContextProvider>
      <NavigaTion />
    </UserContextProvider>
  );
}

export default App;
