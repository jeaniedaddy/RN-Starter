import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const NameScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Name Screen</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        autoCapitalize={"none"}
        autoCorrect={false}
        onChangeText={(newText) => setName(newText)}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
});

export default NameScreen;
