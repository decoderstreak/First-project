import React from 'react';
import { StyleSheet, Text, View,Button,ImageBackground} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
//create a unction to home and return jsx in it

export default function ReviewDetails({navigation}){
  

    const pressHandler = () =>{
        navigation.navigate('Home');
    }
    return(
      <ImageBackground source ={require('../assets/color.png') }style={globalStyles.image} >
        <View style={globalStyles.container}>
          
          
             <Card>
             
        <Text style={globalStyles.titleText}>
          { navigation.getParam('title') }
        </Text>
        
        <Text>{ navigation.getParam('body') }</Text>
        
        <Text>{ navigation.getParam('rating') }</Text>
      </Card>
             <Button title = 'back to home screen' onPress ={pressHandler} />
        </View>
        </ImageBackground>
       
    )
   
}
