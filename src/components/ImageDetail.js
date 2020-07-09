import React from 'react';
import {Text, View,  StyleSheet} from 'react-native';

const ImageDetail = ({title}) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15
    }
});

export default ImageDetail;