import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header title='Fruit Basket' navigation={navigation} />
        }
      },
   
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions :{
        title: 'REVIEWS'
    }  
  },
};

const HomeStack = createStackNavigator(screens , {
    defaultNavigationOptions: {
        headerTintColor:'#444',
        headerStyle :{backgroundColor: "pink"}
    }
});

export default HomeStack;