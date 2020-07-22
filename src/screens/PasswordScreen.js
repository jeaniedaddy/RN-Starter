import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const PasswordScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Password Screen</Text>
      <TextInput
        style={styles.textInput}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newText => setPassword(newText)}
      />
      { password.length < 5 ? <Text style={styles.textWarning}>Password should at lease 5 charaters </Text> : null }
      { password.length > 15 ? <Text style={styles.textWarning}>Password cannot be more than 15 charaters</Text> : null }
      { password.toLowerCase() === password ? <Text style={styles.textWarning}> password must have at lease 1 upper charater </Text> : null }
      { password.toUpperCase() === password ? <Text style={styles.textWarning}> password must have at lease 1 lowwer charater </Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  }, textWarning: {
    fontStyle: "italic",
    color: "red"
  }
});

export default PasswordScreen;