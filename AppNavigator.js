import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import ShipmentDetailsScreen from './screen/ShippmentDetails';

const AppStack = createStackNavigator(
  {
    Login: LoginScreen,
    ShipmentDetails: ShipmentDetailsScreen,
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(AppStack);
