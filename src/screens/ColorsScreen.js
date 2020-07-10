import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text>Colors Screen</Text>
      <Button
        title="add color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
          console.log(colors);
        }}
      />
      <FlatList
        keyExtractor={item=>item }
        data={colors}
        renderItem={({item}) => (
          <View
            style={{flexDirection: "row"}}
            >
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const randomRgb= () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorsScreen;
