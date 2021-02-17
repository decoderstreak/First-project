  
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList,ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Apple keeps doctor away',  body: 'You need to take apples daily as it boosts you with immunity', key: '1' },
    { title: 'Grapes are rich in vitamin c',  body: 'The citrus content in grapes is very high.As the body require high amount of citrus content you need to have it', key: '2' },
    { title: 'Fruit Fantasy',  body: 'Having a fruit fantasy is quite awesome and you will be loving the aroma if you feel the texture', key: '3' },
  ]);

  return (
    <ImageBackground style ={globalStyles.image}source ={require('../assets/apple1.png')}>
    <View style={globalStyles.container}>
      
      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
          
        </TouchableOpacity>
     
      )} />
     
    </View>
    </ImageBackground>
  );
}