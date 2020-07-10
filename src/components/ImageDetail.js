import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ImageDetail = ({title, imageSrouce, score}) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
});

export default ImageDetail;
