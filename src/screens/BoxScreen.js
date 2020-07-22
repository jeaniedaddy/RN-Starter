import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>APP</Text>
      <View style={styles.viewStyle}>
        <View style={styles.viewOneStyle} />
        <View style={styles.viewTwoStyle} />
        <View style={styles.viewThreeStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "red",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 40,
    borderWidth: 2,
    borderColor: "black",
    textAlign: "center",
  },
  viewOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    alignSelf: "flex-start"
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    position: "absolute",
    alignSelf: "flex-end"
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
});

export default BoxScreen;
