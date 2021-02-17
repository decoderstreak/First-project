import React from 'react';
import { StyleSheet, View, Text,Image,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { ScrollView } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global'
import Nav from '../screens/AboutNavigation';



export default function About() {
  return (

    
    <ImageBackground style ={globalStyles.image}source ={require('../assets/bg.png')}>
    <View style={globalStyles.container}>
      <ScrollView>
      
      <Text style={globalStyles.container}>About Me</Text>
      <Image style ={globalStyles.bg} source = {require('../assets/img.png')}  />
      <Text style={globalStyles.container}>Hello Folks I am a food lover! On my research journey I met with various experiences picking the finest I became fruit foodie and started exploring the different types of
      fruits available through out the country and found amazing features in it...
      <Text>dgfgsdhgfdd ahdhawdbdhb a wdhuehwehdhww hdf</Text>
      <Text> sdsgd  THE MAIN AIM OF THE PROJECT IS TO DECRESE THE FOOD WASTAGE AND MAKE FOOD AVAILABLE TO EVERYONE AND MAKE THEM USEFULL AND MAKE SOME SENSE AND DO IT MIRACLE AS SOON AS IT POSSIBLE I HOPE MY PROJECT WILL BE READY BY THIS MAY AND I WILL BE ABLE TO PUBLISH MY APP AND MAKE IT AVAILABLE TO TE PUBLIC</Text>
      </Text>
      </ScrollView>
      <Nav />
    
    </View>
    </ImageBackground>
    
   
    


  );
}
//Implementing scroll view in my fruit basket project