import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increse"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Counter;
