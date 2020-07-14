import React from 'react';
import {Text, View, Button,  StyleSheet } from 'react-native';

const ColorCounter = ({color, increase, decrease}) => {
  return <View>
    <Button title={`Increase ${color}`} onPress={()=>{ increase();}}/>
    <Button title={`Decrease ${color}`} onPress={()=>{ decrease();}}/>
  </View>;

};

const styles = StyleSheet.create({});

export default ColorCounter ; 