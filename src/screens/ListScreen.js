
import React from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";


const  ListScreen = () => {
    const friends = [
        {name: 'friends #1', age: 24},
        {name: 'friends #2', age: 14},
        {name: 'friends #3', age: 34},
        {name: 'friends #4', age: 32},
        {name: 'friends #5', age: 4},
        {name: 'friends #6', age: 94},
        {name: 'friends #7', age: 11},
        {name: 'friends #8', age: 35},
        {name: 'friends #9', age: 49}
    ];
    return (
        //<Text style={styles.text}>List Screen</Text>
        <FlatList 
            //horizontal
            //showsHorizontalScrollIndicator={false}
            //showsVerticalScrollIndicator
            keyExtractor={friend=> friend.name}
            data={friends} 
            renderItem={({item, index})=>{
                return (
                    <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
                );
            }} 
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 40
    }
});

export default ListScreen;