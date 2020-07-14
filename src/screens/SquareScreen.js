import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(`rgb(${red}, ${green}, ${blue})`);

  const changeColor = (color, change) => {
    switch (color) {
      case "red":
        ( red + change < 0 || red + change > 255) ? null : setRed(red + change);
        return;
      case "green":
        ( green + change < 0 || green + change > 255) ? null : setGreen(green + change);
        return;
      case "blue":
        ( blue + change < 0 || blue + change > 255) ? null : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="red"
        increase={() => {
          changeColor("red", COLOR_INCREMENT);
        }}
        decrease={() => {
          changeColor("red", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        color="green"
        increase={() => {
          changeColor("green", COLOR_INCREMENT);
        }}
        decrease={() => {
          changeColor("green", -1 * COLOR_INCREMENT);
        }}
      />
      <ColorCounter
        color="blue"
        increase={() => {
          changeColor("blue", COLOR_INCREMENT);
        }}
        decrease={() => {
          changeColor("blue", -1 * COLOR_INCREMENT);
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
