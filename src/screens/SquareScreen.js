import React, { useState, useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const reducer = (state, action)=>{
  switch(action.type){
    case "change_red":
      return state.red + action.payload < 0 || state.red + action.payload > 255 ? state : {...state, red: state.red + action.payload }; 

    case "change_green":
      return state.green + action.payload < 0 || state.green + action.payload > 255 ? state : {...state, green: state.green + action.payload }; 

    case "change_blue":
      return state.blue + action.payload < 0 || state.blue + action.payload > 255 ? state : {...state, blue: state.blue + action.payload }; 
    default: 
      return state;
  }

};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const { red, green, blue} = state; 

  return (
    <View>
      <ColorCounter
        color="red"
        increase={() => {
          dispatch({type: "change_red", payload: COLOR_INCREMENT});
        }}
        decrease={() => {
          dispatch({type: "change_red", payload: -1* COLOR_INCREMENT});
        }}
      />
      <ColorCounter
        color="green"
        increase={() => {
          dispatch({type: "change_green", payload: COLOR_INCREMENT});
        }}
        decrease={() => {
          dispatch({type: "change_green", payload: -1* COLOR_INCREMENT});
        }}
      />
      <ColorCounter
        color="blue"
        increase={() => {
          dispatch({type: "change_blue", payload: COLOR_INCREMENT});
        }}
        decrease={() => {
          dispatch({type: "change_blue", payload: -1* COLOR_INCREMENT});
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