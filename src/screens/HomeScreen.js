import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageScreen from "./ImageScreen.js";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Hi! there</Text>
      <Button 
        onPress={()=>navigation.navigate('Components') }
        title="Go to Components Demo"
      />
      <Button 
        onPress={()=>navigation.navigate('List') }
        title="Go to List Demo"
      />
      <Button 
        onPress={()=>navigation.navigate('Image') }
        title="Go to Image Demo"
      />
      <Button 
        onPress={()=>navigation.navigate('Counter') }
        title="Go to Counter Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
